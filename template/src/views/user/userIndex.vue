<template>
	<section class="container user_index">
		<div class="user_header" v-if="user.headImgUrl && user.headImgUrl !=null">
			<img :src="user.headImgUrl"/>
			<h3>{{user.nickName}}</h3>
		</div>
		<div class="user_header" v-else>
			<img src="../../../public/images/nohead.jpg" />
			<h3>手机号登录</h3>
		</div>
		<van-cell-group class="user_bind"  v-if="baseUtil.isBlank(user.phone)">
			<!--<van-cell title="绑定手机号" value="已绑定" icon="bangdingshouji"  is-link  v-if="user.phone && user.phone!=null"/>-->
			<van-cell  title="绑定手机号" value="立即绑定" icon="bangdingshouji" label="(方便多平台登录)" to="/bindPhone" class="bind"/>
		</van-cell-group>
		<van-cell-group>
			<van-cell title="个人信息" value="" icon="ziliao" is-link @click="toUserSet"/>
			<van-cell title="我喜欢的书" value="" icon="myfavorite" to="/favorite" is-link />
			<van-cell title="我浏览过的书" value="" icon="shuji" to="/record" is-link />
		</van-cell-group>
		<van-cell-group>
			<van-cell title="问题反馈" value="" icon="youjian" to="/feedback" is-link />
		</van-cell-group>
		<van-cell-group  v-if="baseUtil.isNotBlank(user.phone)">
			<van-cell title="修改登录密码" value="" icon="mima"  is-link @click="toSetPassword"/>
		</van-cell-group>
	</section>
</template>
<script>
	import { Icon, Cell, CellGroup, Toast,Button} from 'vant'
	// import {getUserDetail} from "../../api/user";

    export default {
		components: {
			[Icon.name]: Icon,
			[Cell.name]: Cell,
			[CellGroup.name]: CellGroup,
			[Toast.name]: Toast,
			[Button.name]: Button,
		},
		data() {
			return {
			    user:{},
			}
		},
		methods: {
            toUserSet(){
                this.$router.push({name:'UserSet',query:{user:this.user}});
			},
            toSetPassword(){
                this.$router.push({name:'SetPassword',query:{phone:this.user.phone}});
			},
			async init(){
// 			    let resp = await getUserDetail();
// 			    if(this.qUtil.validResp(resp)){
// 			        this.user = resp.data.weixinUser;
// 				}
			}
		},
		mounted(){
			// this.init();
		}

	}
</script>
<style>
.user_index {
	padding-bottom: 4rem;
}
.user_index .user_header{
	width: 100%;
	height: auto;
	overflow: hidden;
	background: #000;
	padding:1rem 0 3rem 0;
	display: flex;
	justify-content: flex-start;
	align-content: center;
}
.user_index .user_header img{
	width: 4.5rem;
	height:4.5rem;
	border-radius: 100%;
	margin-left: 1rem;
	border: 0.1rem #eeeeee solid;
}
.user_index .user_header h3{
	color: #fff;
	line-height: 4.5rem;
	margin-left: 0.8rem;
}
.user_index .van-cell-group{
	margin:0.7rem 1rem 0.7rem 1rem;
	border-radius: 0.3rem;
	height: auto;
	overflow: hidden;
	box-shadow: 0 0.2rem 0.3rem #dddddd;
	text-align: left;
}
.user_index .user_bind{
	margin:-1.5rem 1rem 0.7rem 1rem;
	position: relative;
	z-index: 10;
}
.user_index .van-cell .van-cell__left-icon{
	font-size: 1.5rem;
	line-height: 1rem;
	color: #2BB89A;
}
.user_index .user_bind .van-cell .van-cell__value{
	color: #999;
}
.user_index .user_bind .van-cell.bind .van-cell__value span{
	background: #2BB89A;
	color: #fff;
	display: block;
	padding: 0.1rem 0.8rem;
	float: right;
	border-radius:2rem;
}
.user_index .van-cell{
	text-align: left;
	padding:1.2rem 0.9375rem;
}
.user_index .van-cell .van-cell__title span{
	font-size: 1rem;
}
.user_index .user_bind .van-cell.bind .van-cell__label{
	color: #2BB89A;
}
</style>