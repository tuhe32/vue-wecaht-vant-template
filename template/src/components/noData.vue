<template>
	<section class="container nodata">
		<div class="nodata_con">
			<van-icon name="zanwushuju" />
			<p>暂无数据，<span @click="onRefresh">点击刷新一下试试</span></p>
			<van-button round type="green" @click="onBackIndex">返回首页</van-button>
		</div>
	</section>
</template>
<script >
	import { Icon, Toast,Button} from 'vant'
	export default {
		components: {
			[Icon.name]: Icon,
			[Button.name]: Button,
			[Toast.name]: Toast,
		},
		data() {
			return {

			}
		},
		methods: {
            onRefresh(){
				this.$router.go(0);
			},
            onBackIndex() {
		     	this.$router.push({name:'home'});
		    },
		},
	}
</script>
<style scoped>
.nodata{
	height: 100%;
	overflow: hidden;
}
.nodata .nodata_con{
	margin:20% 4rem;
	text-align: center;
}
.nodata .nodata_con .van-icon{
	font-size:8rem;
	color: #ccc;
}
.nodata .nodata_con p{
	margin:3rem 0;
	font-size: 0.9rem;
	color: #666;
}
.nodata .nodata_con p span{
	color: #3ecd59;
}
.nodata .nodata_con .van-button{
	width: 100%;
}
</style>