import {constantRoutes} from "@/router";

const state = {
    routers: constantRoutes,
    addRouters: []
}

const mutations = {
    SET_ROUTER(state, router) {
        state.addRouters = router
        state.routers = constantRoutes.concat(router)
    }
}

const actions = {
    GenerateRoutes({commit}, role) {
        return new Promise(resolve => {
            let accessRouters = constantRoutes
            console.log(constantRoutes);

            commit('SET_ROUTER', accessRouters)
            resolve()
        })
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
