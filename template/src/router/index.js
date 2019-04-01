import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
	{
		path: '/', component: ()=> import('../views/home/home'),name: 'Home',meta: {title:'首页',isShowFoot:true},
	},
	{
		path: '/book_detail', component: ()=> import('../views/home/book_detail'),name: 'BookDetail',meta: {title:'书籍详情',isShowFoot:false},
    },
	{
		path: '/book_list', component: ()=> import('../views/home/book_list'),name: 'BookList',meta: {title:'书籍列表',isShowFoot:true},
	},
	{
		path: '/search', component: ()=> import('../views/home/search'),name: 'Search',meta: {title:'搜索',isShowFoot:false},
	},
	{
		path: '/user_index', component: ()=> import('../views/user/userIndex'),name: 'UserIndex',meta: {title:'个人中心',isShowFoot:true},
	},
	{
		path: '/userSet', component: ()=> import('../views/user/set'),name: 'UserSet',meta: {title:'编辑个人信息',isShowFoot:false},
	},
	{
		path: '/favorite', component: ()=> import('../views/user/favorite'),name: 'Favorite',meta: {title:'我喜欢的书',isShowFoot:false},
	},
	{
		path: '/feedback', component: ()=> import('../views/user/feedback'),name: 'Feedback',meta: {title:'意见反馈',isShowFoot:false},
	},
	{
		path: '/bindSuccess', component: ()=> import('../views/user/bindSuccess'),name: 'BindSuccess',meta: {title:'手机号绑定成功',isShowFoot:false},
	},
	{
		path: '/setPassword', component: ()=> import('../views/user/setPassword'),name: 'SetPassword',meta: {title:'修改密码',isShowFoot:false},
	},
]


export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})
