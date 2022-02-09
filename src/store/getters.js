const getters = {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    routers: state => state.permission.routers,
    addRouters: state => state.permission.addRouters,
}
export default getters
