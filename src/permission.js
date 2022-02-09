import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import {Message} from "element-ui";
import fr from "element-ui/src/locale/lang/fr";
import {getToken} from "@/utils/auth";

const whiteList = ['/login'] // 不重定向白名单

router.beforeEach(async (to, from, next) => {

    NProgress.start()
    // 存在userId说明已经登录了
    if (getToken()) {
        // 登录过就不能访问登录界面
        if (to.path === '/login') {
            next({path: '/'})
            NProgress.done()
        } else {
            // 保存在store中的路由不为空则放行（如果刷新了页面，store中的路由为空，需要重新加载数据）
            if (store.getters.addRouters.length || to.name) {
                next()
            } else {
                // 将动态路由加载到store中
                store.dispatch('permission/GenerateRoutes', data).then((res) => {
                    console.log(store.getters.addRouters);
                    router.addRoutes(store.getters.addRouters)
                    // 如果addRouters未完成，路由守卫会一层一层执行，直到addRouters完成找到对应路由
                    next({...to, replace: true})
                }).catch(e => {
                    Message.error(e)
                    next()
                    NProgress.done()
                })
            }
        }
    } else {
        // 未登录时
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
            NProgress.done()
        }
    }
})
router.afterEach(() => {
    NProgress.done() // 结束Progress
})
