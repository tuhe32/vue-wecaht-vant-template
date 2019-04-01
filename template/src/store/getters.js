const getters = {
  token: state => state.user.token,
  user: state => state.user.user,
  isShowFoot: state => state.user.isShowFoot,
  navbarTitle: state => state.user.navbarTitle,
  direction: state => state.user.direction
}
export default getters
