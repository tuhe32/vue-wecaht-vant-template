// import {getUserInfo} from '@/api/user'
import baseUtil from '../../utils/baseUtil'

const user = {
	state: {
		user:'',
		token:baseUtil.getStore('token'),
		isShowFoot: true, //是否显示foot栏
        navbarTitle: "首页", //导航页标题
        direction:''
	},
	mutations: {
		SET_TOKEN: (state, token) => {
	      state.token = token
	    },
	    SET_USER: (state, user) => {
	      state.user = user
	    },
	    SET_ISSHOWFOOT: (state, isShowFoot) => {
	      state.isShowFoot = isShowFoot
	    },
	    SET_NAVBARTITLE: (state, navbarTitle) => {
	      state.navbarTitle = navbarTitle
	    },
	    SET_LOGOUT: (state) => {
	      state.user = null
	      state.token = null
	    },
	    UPDATE_DIRECTION: (state, direction) => {
	      state.direction = direction
	    }
	},
	actions: {
		UpdateLoginInfo({commit},userInfo) {
	      commit('SET_TOKEN', userInfo.token)
	      commit('SET_USER', userInfo.weixinUser)
	    },
	    LogOut({commit}){
	    	commit('SET_LOGOUT');
	    },
		//  // 获取用户信息
	    // GetUserInfo({ commit, state }) {
	    //   return new Promise((resolve, reject) => {
	    //     // let token = "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjE0LCJhdWQiOiJwaW5rZSIsImlzcyI6InBpbmtlIiwiaWF0IjoxNTM3MTY0NDkzLCJleHAiOjE1MzgwMjg0OTN9.5dangew_DT5ma-K9hACHNBC66Sba_9UUuzRkdgzr0qnIdbDiin7hDFhctMgnAIr934Nhloq-wnhIzk74kXq8ng";
	    //     getUserInfo(state.token).then(response => {
	    //     // getUserInfo(token).then(response => {
	    //       if (response.code == 1 || response.code == -1) {
	    //         return reject(response.msg);
	    //       }
	    //       const data = response.data
		//
	    //       console.log('[GetUserInfo]',response)
	    //       let weixinUser = data.weixinUser;
		//
	    //       commit('SET_USER', weixinUser)
	    //       resolve(response)
	    //     }).catch(error => {
	    //       reject(error)
	    //     })
	    //   })
	    // },
	    UpdateNavbarStatus({commit}, navbarStatusObject){
	      commit('SET_ISSHOWFOOT', navbarStatusObject);
	    },
	    UpdateNavbarTitle({commit,state}, navbarTitle){
	      if(navbarTitle == '首页') navbarTitle = state.user.publishing?state.user.publishing.name:""
	      commit('SET_NAVBARTITLE', navbarTitle);
	      document.title = navbarTitle || "";
	    },
	    UpdateDirection({commit}, direction) {
	    	commit('UPDATE_DIRECTION',direction)
	    }
	}
}

export default user