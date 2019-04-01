<template>
	<section class="container bindSuccess">
		<div class="bindSuccess_con">
			<h3><van-icon name="checked" /> 手机号绑定成功</h3>
			<img src="../../../public/images/bindphone.png"/>
			<p>已绑定手机号<br /><span>18525456858</span></p>
			<van-button round type="cyan" >解绑</van-button>
			<strong @click="gotoHome"><van-icon name="arrow-left" /> 返回首页</strong>
		</div>
	</section>
</template>
<script >import {Field, Cell, CellGroup,Button, Icon, Toast} from 'vant'
export default {
	components: {
		[Field.name]: Field,
		[Cell.name]: Cell,
		[CellGroup.name]: CellGroup,
		[Button.name]: Button,
		[Icon.name]: Icon,
		[Toast.name]: Toast,
	},
	data() {
		return {
			feedMessage:'',
		}
	},
	methods: {
		gotoHome(){
			this.$router.push({
				name: 'Home'
			})
		},
		onLoad() {
	      // 异步更新数据
//	      setTimeout(() => {
//	        for (let i = 0; i < 10; i++) {
//	          this.list.push(this.bookList.length + 1);
//	        }
//	        // 加载状态结束
//	        this.loading = false;
//	
//	        // 数据全部加载完成
//	        if (this.list.length >= 40) {
//	          this.finished = true;
//	        }
//	      }, 500);
	    },
	},

}</script>
<style>
.bindSuccess{
	height: 100%;
	background: #fff;
	overflow: hidden;
}
.bindSuccess .bindSuccess_con{
	margin:20% 15%;
	text-align: center;
}
.bindSuccess .bindSuccess_con h3{
	font-size: 1.3rem;
	color: #333;
	font-weight: normal;
}
.bindSuccess .bindSuccess_con h3 .van-icon{
	color: #2BB89A;
}
.bindSuccess .bindSuccess_con img{
	width:70%;
	display: block;
	margin: 2rem auto 1rem auto;
}
.bindSuccess .bindSuccess_con p{
	margin:2rem 0 2rem 0;
	font-size: 0.9rem;
	color: #999;
	line-height: 2rem;
}
.bindSuccess .bindSuccess_con p span{
	display: block;
	color: #333;
	font-size: 1.2rem;
}
.bindSuccess .bindSuccess_con .van-button{
	width: 100%;
	margin-bottom: 2rem;
}
.bindSuccess .bindSuccess_con strong{
	font-weight: normal;
	font-size: 1rem;
	color: #999;
}
.bindSuccess .bindSuccess_con strong .van-icon{
	font-size: 0.8rem;
}
</style>