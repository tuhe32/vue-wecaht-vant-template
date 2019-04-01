import router from './router'
// import Vue from 'vue';
import store from './store'
// import baseUtil from './utils/baseUtil'
// import {getAuthInfo} from './api/user'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
// const history = window.sessionStorage;
// history.clear()
// let historyCount = history.getItem('count') * 1 || 0;
// history.setItem('/', 0);

NProgress.configure({ showSpinner: false ,minimum: 0.65})
router.afterEach(route => {
  // if(route.path.indexOf('/heart/beat') == -1 ) {
    // directRightUrl()
    //   setTimeout(function () {
    //     console.log("===yanshi")
    //   },2000);
    let showFoot = false;
	if(route.meta && route.meta.isShowFoot) showFoot = true
	  store.dispatch('UpdateNavbarStatus',showFoot)
	if(route.meta && route.meta.title)
	  store.dispatch("UpdateNavbarTitle", route.meta.title);
  // }
  NProgress.done()
})

router.beforeEach( (to, from, next) => {
  // 页面刷新时，重新赋值token
  // console.log("state Is :",store.state);
  // let pId = getUrlParam("pid");
  // if(pId) {
  //   let oldPid = baseUtil.getStore('pId')
  //   if(baseUtil.isBlank(oldPid) || oldPid != pId) {
  //     await store.dispatch('LogOut')
  //     baseUtil.removeStore('token')
  //     baseUtil.removeStore('user')
  //   }
  //   baseUtil.setStore('pId',pId)
  // }
  // if (baseUtil.isBlank(store.getters.token) && to.path.indexOf('/heart/beat') == -1) {
    // if (baseUtil.getStore('token') != null ) {
    //   console.log(111334)
    //     let payload = {};
    //     payload.token = baseUtil.getStore('token');
    //     if(baseUtil.getStore('user') != null)
    //       payload.weixinUser = JSON.parse(baseUtil.getStore('user'))
    //     store.dispatch("UpdateLoginInfo",payload)
    //     baseUtil.removeStore('token')
    //     next();
    // }else {
    //   let code = getUrlParam("code");
    //   let state = getUrlParam("state");
    //
    //   let param = {code:code+'',state:state+'',pid:pId+''}
    //   getAuthInfo(param).then(response => {
    //   	if (Vue.prototype.qUtil.validResp(response)) {
    //   		if(response.data.redirect != null) {
	//       		next({
	//               path: '/weixin/heart/beat',
	//               query: {redirect: response.data.redirect}
	//             })
	//       	}
    //       let payload = {};
    //       payload.weixinUser = response.data.weixinUser;
    //       payload.token = response.data.token;
    //       store.dispatch("UpdateLoginInfo",payload)
    //       baseUtil.setStore('token',payload.token)
    //       baseUtil.setStore('user',payload.weixinUser)
    //       next();
    //   	}
    //   }).catch((err) => {
    //     console.log(err.msg)
    //   })
  	// }
  // } else {
    // const toIndex = history.getItem(to.path);
    // const fromIndex = history.getItem(from.path);
    //  if (toIndex) {
    //    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
    //       store.dispatch('UpdateDirection', 'forward')
    //    } else {
    //       store.dispatch('UpdateDirection', 'reverse')
    //    }
    //  } else {
    //      ++historyCount;
    //      history.setItem('count', historyCount);
    //      to.path !== '/' && history.setItem(to.path, historyCount);
    //      store.dispatch('UpdateDirection', 'forward')
    //  }
    // if(to.path == '/' || to.path.indexOf('/heart/beat') != -1) {
    //   next();
    // }else {
      NProgress.start() // start progress bar
      next();
    //   setTimeout(function () {
    //         next();
    //   },1300);
    // }

  // }
})

function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg);  //匹配目标参数
  if (r != null) return unescape(r[2]); return ''; //返回参数值
}