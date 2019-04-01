import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
	scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/', name: 'home', component: Home ,meta: {title:'首页',isShowFoot:false}
        },
        {
            path: '/add', name: 'add', component: () => import('../views/add.vue'),meta: {title:'报名助手',isShowFoot:true}
        },
		{
		    path: '/list', name: 'list', component: () => import('../views/list.vue'),meta: {title:'组队列表',isShowFoot:true}
		}
    ]
})
