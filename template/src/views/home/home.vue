<template>
	<section class="container home">
		<header class="home_header" v-if="!loading">
			<div class="topsearch" @click="gotoSearch">
				<van-icon name="sousuo" />
				<span>搜索</span>
			</div>
		</header>
		<van-swipe class="banner-swipe" :show-indicators="false" :autoplay="3000" @change="swiperChange">
			<!-- <van-swipe-item  v-for="(banner,bIndex) in bannerList" :key="bIndex" :class="{'currentItem':currentSwiper==bIndex}">
				 <img class="needsclick"  :src="banner.imageUrl" v-if="banner.imageUrl && banner.imageUrl!=null" @click="gotoBookDetail(banner)">
				 <img class="needsclick"  src="/images/banner.jpg" v-else @click="gotoBookDetail(banner)">
			</van-swipe-item> -->
			<van-swipe-item  :class="{'currentItem':currentSwiper==bIndex}">
				 <img class="needsclick"  src="../../assets/images/banner.jpg"  @click="gotoBookDetail(banner)">
			</van-swipe-item>
		</van-swipe>
		<div class="home_category">
			<dl>
				<dd v-if="!loading" @click="gotoBookList({id:0,linkType:1})">
					<p class="txt"><span>全部</span></p>
					<img src="../../assets/images/categoryimg0.jpg"/>
				</dd>
				<dd v-for="(classify,cIndex) in classifyList" :key="cIndex" @click="gotoBookList(classify)">
					<p class="txt"><span>{{classify.name}}</span></p>
					<img :src="classify.imageUrl" v-if="classify.imageUrl && classify.imageUrl!=null"/>
					<img src="../../assets/images/categoryimg.jpg" v-else/>
				</dd>
				<dt></dt>
			</dl>
		</div>
		<div class="home_box mt7" v-for="(templateBlock,tIndex) in templateBlockList" :key="tIndex">
			<div class="tit">
				<span @click="gotoBlockBookList(templateBlock.id,templateBlock.title)">更多 <van-icon name="arrow" /></span>
				<h3>{{templateBlock.title}}</h3>
			</div>
			<div class="book_list">
				<div class="bookItem" v-for="(book,oIndex) in templateBlock.bookList" :key="oIndex" @click="gotoBlockBookDetaila(book)">
					<div class="list_l">
						<!--<img :src="book.cover" v-if="book && book.cover !=null" />-->
						<img v-lazy="book.cover" v-if="book && book.cover !=null" />
						<img src="../../assets/images/shuimg.jpg" v-else />
					</div>
					<div class="list_r">
						<h3>{{book.title}}</h3>
						<p>{{book.recommendation}}</p>
						<span>{{book.author}}</span>
						<em><van-icon name="chakan" /> {{book.pv}}</em>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	import { Icon, Cell, CellGroup, Swipe , SwipeItem } from 'vant'
	// import {getIndexList} from "../../api/home";
	import NProgress from 'nprogress' // progress bar
	import 'nprogress/nprogress.css'// progress bar style
	NProgress.configure({ showSpinner: false ,minimum: 0.65})

    export default {
		components: {
			[Icon.name]: Icon,
			[Cell.name]: Cell,
			[CellGroup.name]: CellGroup,
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
		},
		data() {
			return {
				currentSwiper: 0,
                publishing:{},
                bannerList:[],
                classifyList:[],
                templateBlockList:[],
                loading:false,
			}
		},
		methods: {
			async init(){
				NProgress.start();
// 				this.loading = true;
// 			    let resp = await getIndexList();
// 			    if(this.qUtil.validResp(resp)){
// 					this.publishing = resp.data.publishing;
// 					this.$store.dispatch("UpdateNavbarTitle",this.publishing.name);
// 					this.bannerList = resp.data.bannerList;
// 					this.classifyList = resp.data.classifyList;
// 					if(resp.data.classifyList && resp.data.classifyList.length >4){
// 					    this.classifyList = resp.data.classifyList.splice(0,4);
// 					}
// 					this.templateBlockList = resp.data.templateBlockList;
// 				}
// 				this.loading = false
				NProgress.done()
			}
		},
		mounted(){
		    // this.init();
		}
	}
</script>
<style scoped>
	.home {
		padding-bottom: 3rem;
	}
	
	.home_header {
		width: 100%;
		height: auto;
		overflow: hidden;
		background: #fff;
	}
	
	.topsearch {
		margin: 0.8rem 1rem;
		height: 2rem;
		line-height: 2rem;
		text-align: center;
		background: #f5f5f5;
		color: #999;
		border-radius: 2rem;
	}
	
	.topsearch span {
		font-size: 1rem;
		margin: 0 0.5rem;
	}
	
	.banner-swipe {
		height: auto;
		overflow: hidden;
		background: #fff;
		/*margin: 0 1rem;*/
	}
	
	.banner-swipe .van-swipe__track {}
	
	.banner-swipe .van-swipe-item {
		/*transform: scale3d(0.8, 0.8, 1);
	transition-duration: 0ms;
	transform-style: preserve-3d;*/
		border-radius: 0.5rem;
	}
	
	.banner-swipe .van-swipe-item img {
		width: 100%;
		height: 10rem;
		display: block;
	}
	
	.banner-swipe .van-swipe-item.currentItem {
		/*transform: scale3d(1.1, 1.1, 1);
	transition-duration: 0ms;*/
	}
	
	.home_category {
		padding: 1rem 0.8rem;
		height: auto;
		overflow-x: auto;
		background: #fff;
		-webkit-overflow-scrolling: touch;
	}
	.home_category::-webkit-scrollbar{height: 0 !important}
	.home_category dl{
		width:auto;
		display: flex;
		flex-wrap: nowrap;
		/* white-space: nowrap; */
		justify-content: flex-start;
	}
	.home_category dd {
		flex:0 0 22%;
		margin: 0 1.5%;
		height:calc((100vw - 1.6rem) * 0.22 );
		overflow: hidden;
		position: relative;
		text-align: center;
		border-radius: 0.4rem;
		background: #000;
	}
	.home_category dt{
		flex:0 0 4%;
	}
	.home_category .txt {
		width: 100%;
		height: 100%;
		color: #fff;
		font-size: 0.9rem;
		position: absolute;
		z-index: 10;
		display: -webkit-flex;
		display: flex;
		-webkit-align-items: center;
		align-items: center;
		-webkit-justify-content: center;
		justify-content: center;
	}
	
	.home_category .txt span {
		line-height: 1.2rem;
	}
	
	.home_category img {
		width: 100%;
		display: block;
		opacity: 0.6;
	}
	
	.home_box {
		background: #fff;
		height: auto;
		overflow: hidden;
		padding-bottom:1rem;
	}
	
	.home_box .tit {
		width: 100%;
		height: 3rem;
		line-height:3.5rem;
		overflow: hidden;
		text-align: left;
	}
	
	.home_box .tit h3 {
		font-size: 1.2rem;
		color: #333;
		text-indent: 1rem;
	}
	
	.home_box .tit span {
		float: right;
		display: block;
		height: 3rem;
		line-height: 3.5rem;
		font-size: 0.95rem;
		color: #999;
		margin-right: 1rem;
	}
	
	.home_box .tit span i {
		font-size: 0.75rem;
	}
	.home_box .book_list {
		padding: 0rem 1rem;
		height: auto;
		overflow: hidden;
	}
	
</style>