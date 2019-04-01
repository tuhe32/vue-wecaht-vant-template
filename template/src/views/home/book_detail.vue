<template>
	<section class="container book_detail">
		<header class="detail_header">
			<van-icon name="arrow-left" @click="onBack" />
			<van-button @click="onCancelCollection" v-if="isCollection">已收藏</van-button>
			<van-button @click="onCollection" v-else>喜欢</van-button>
		</header>
		<div class="detail_top">
			<aplayer :audio="audio" :autoplay="autoplay" />
			<!--<aplayer autoplay :music="{title:book.title,artist:publishName,src:voicePath,pic:book.cover}"/>-->
		</div>
		<div class="detail_con mt7">
			<div class="tit">
				<h3>内容简介</h3>
			</div>
			<div class="con">
				<div v-html="book.recommendation" style="border-bottom: 1px #dddddd dashed; padding-bottom:0.75rem;"></div>
				<div v-html="book.content" style="margin-top:0.75rem;"></div>
			</div>
		</div>
		<div class="floatIcon" @click="gotoHome">
			<van-icon name="yemian-copy" />
		</div>
	</section>
</template>
<script >
	import {NavBar, Icon, Toast,Progress, Button ,Dialog} from 'vant'
    // import {getBookDetail,saveRecord,saveFavouriteBook,getFavouriteVaild} from '../../api/book'
    import {initWeixinShare} from '@/mixins'
	import {mapGetters} from 'vuex'
	export default {
		components: {
			[NavBar.name]: NavBar,
			[Icon.name]: Icon,
			[Progress.name]: Progress,
			[Button.name]: Button,
			[Toast.name]: Toast,
			[Dialog.name]: Dialog,
		},
        computed: {
            ...mapGetters([
                'user',
            ])
        },
		mixins:[initWeixinShare],
		data() {
			return {
			    params:{
			        id:0,
                    voiceType:1,
				},
				book:{},
				isCollection:false,
                audio: [],
                autoplay:false,
				publishingName:"",
            }
		},
		methods: {
		},
		mounted(){
		}
	}
</script>
<style>
.book_detail{
	/*-webkit-overflow-scrolling: touch;*/
}
.book_detail .detail_header{
	width: 100%;
	height: 3rem;
	line-height:3rem;
	overflow: hidden;
	position:absolute;
	top: 0;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #fff;
}
.book_detail .detail_header .van-icon{
	margin-left:1rem;
	color: #fff;
}
.book_detail .detail_header h1{
	font-size: 1rem;
}
.book_detail .detail_header .van-button{
	margin-right:1rem;
	color: #fff;
	background: none;
	border: 0;
	padding: 0;
}

.book_detail .detail_top{
	width: 100%;
	height: auto;
	overflow: hidden;
	background:#fff url(../../assets/images/shubg.jpg) no-repeat center top;
	background-size:100% auto;
}
.book_detail .aplayer{
	background: none;
	margin:0rem;
	box-shadow: none;
}
.book_detail .aplayer-body{
	display: flex;
	flex-direction: column;
	margin: 0;
	box-shadow: none;
	border-radius: 0;
	padding: 0 1rem;
}
.book_detail .aplayer-body .aplayer-pic{
	width: 8rem;
	height: 11.6rem;
	margin:25% auto 0.8rem auto;
	box-shadow:0 -0.3rem 0.8rem rgba(0,0,0,0.3);
}
.book_detail .aplayer .aplayer-body .aplayer-info{
	height: auto;
	overflow: hidden;
	padding-bottom: 1.5rem;
	margin: 0;
}
.book_detail .aplayer .aplayer-body .aplayer-info .aplayer-music{
	text-align: center;
	margin-bottom: 1rem;
	height: auto;
	overflow: hidden;
	white-space: normal !important;
	text-overflow: initial !important;
}
.book_detail .aplayer .aplayer-body .aplayer-info .aplayer-music .aplayer-title{
	display: block;
	font-size: 1.3rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
	letter-spacing: 0.1rem;
}
.book_detail .aplayer .aplayer-body .aplayer-info .aplayer-music .aplayer-author{
	font-size: 0.8rem;
	color: #999;
}
.book_detail .aplayer-bar-wrap .aplayer-bar{
	height: 0.3rem !important;
	background:#f5f5f5 !important;
	border-radius:0.5rem;
}
.book_detail .aplayer-bar-wrap .aplayer-bar .aplayer-loaded{
	height:0.3rem !important;
	background: #dff4f0 !important;
	border-radius:0.5rem;
}
.book_detail .aplayer-bar-wrap .aplayer-bar .aplayer-played{
	height:0.3rem !important;
	border-radius:0.5rem;
	background: #2bb89a !important;
}
.book_detail .aplayer-bar-wrap .aplayer-bar .aplayer-played .aplayer-thumb{
	width:1rem !important;
	height:1rem !important;
	margin-top: -6px !important;
	background: #2bb89a!important;
	border-color: #fff !important;
}
.book_detail .aplayer-icon-loop{
	display: none;
}

.book_detail .detail_con{
	height: auto;
	overflow: hidden;
	background: #fff;
	padding: 0.5rem 1rem 4rem 1rem;
}
.book_detail .detail_con .tit{
	margin:1rem 0;
	text-align: left;
}
.book_detail .detail_con .tit h3{
	font-size: 1.2rem;
	color: #000;
}
.book_detail .detail_con .con{
	text-align: left;
	line-height: 1.8rem;
	font-size: 0.8rem;
	min-height:3rem;
	color: #333;
}
.book_detail .detail_con .con img{
	width: 100%;
	display: block;
}

</style>