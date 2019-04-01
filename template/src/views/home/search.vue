<template>
	<section class="container search">
		<van-search v-model="params.keyWord" placeholder="搜索" show-action @search="onSearch">
		  <div slot="action" @click="onSearch" v-if="isHistory">搜索</div>
		  <div slot="action" @click="onCancel" v-else>取消</div>
		</van-search>
	    <div class="search_history" v-if="isHistory">
	    	<div class="tit">
	    		<van-icon name="delete" @click="onClearKeyword"/>
	    		<h3>搜索历史</h3>
	    	</div>
	    	<div class="con">
				<div v-for="(keyword,kIndex) in keywordList" :key="kIndex">
	    			<van-button round size="small" type="cyan_light" @click="onSearchHistory(keyword.keyWord)">{{keyword.keyWord}}</van-button>
				</div>
	    	</div>
	    </div>
		<div class="search_list" v-else>
			<van-list v-model="loading" :finished="finished" @load="init" :immediate-check="false">
				<div class="bookItem" v-for="(book,bIndex) in bookList" :key="bIndex" @click="gotoBookDetail(book.id)" >
					<div class="list_l">
						<!--<img :src="book.cover" v-if="book.cover && book.cover!=null"/>-->
						<img v-lazy="book.cover" v-if="book.cover && book.cover!=null"/>
						<img src="/images/shuimg.jpg" v-else/>
					</div>
					<div class="list_r">
						<h3>{{book.title}}</h3>
						<p>{{book.recommendation}}</p>
						<!--{{book.author}}-->
						<span>{{book.author}}</span>
						<em><van-icon name="yanjing" size="1.2rem" /> {{book.pv}}</em>
					</div>
				</div>
			</van-list>
			<no-data v-if="isNoData"></no-data>
		</div>
	</section>
</template>
<script >
	import {Search, Icon, Toast,Button,List ,Dialog} from 'vant'
	// import {getKeywordList,getBookList,clearKeyword} from "../../api/search";
	import noData from "../../components/noData"

export default {
	components: {
		[Search.name]: Search,
		[Icon.name]: Icon,
		[Toast.name]: Toast,
		[Button.name]: Button,
		[List.name]: List,
		[Dialog.name]: Dialog,
        noData
	},
	data() {
		return {
		    keywordList:[],  //搜索历史关键字
			bookList:[],  //搜索结果
			params:{
                keyWord:'',  //关键字
                page: {page: 1, pageSize: 6},
                sort: {order: null, sort: null}
			},
			isNoData:false,
			isHistory:true,
            loading:false,
            finished:false,
		}
	},
	watch:{
	    'params.keyWord':function (val,oldVal) {
            this.isHistory = true;
			if(val==null || val=='' || val ==undefined){
                this.bookList =[];
                this.params.page.page = 1;
			}
        }
	},
	methods: {
	},
	mounted(){
	    // this.getSearchList();
	},

}</script>
<style>
.search {
	height: 100%;
}
.search .van-search{
	width: 100%;
	background: #fff !important;
	position: fixed;
	top: 0;
	z-index: 10;
	padding: 0.8rem 0.5rem 0.8rem 1rem;
}
.search .van-search .van-cell{
	background: #f4f4f4 !important;
	border-radius: 10rem !important;
	line-height: 1.7rem;
}
.search .van-search .van-field__control::-webkit-input-placeholder{color: #999;}
.search .van-search .van-search__action{
	font-size:1rem;
	color: #999;
}
.search .van-search .van-field__control{
	font-size:0.95rem;
}
.search  .search_history{
	height: auto;
	overflow: hidden;
	background: #fff;
	min-height: 100%;
	padding:5rem 1rem 2rem 1rem;
}
.search  .search_history .tit{
	text-align: left;
}
.search  .search_history .tit h3{
	font-size: 1rem;
	color: #999;
	font-weight: normal;
}
.search  .search_history .tit .van-icon{
	float: right;
	font-size: 1rem;
	color: #999;
}
.search  .search_history .con{
	margin: 1rem 0;
}
.search  .search_history .con .van-button{
	float: left;
	margin:0 0.8rem 1rem 0;
	font-size: 0.95rem;
	height:2rem;
	padding:0 1rem;
	color: #262626;
}
.search .search_list{
	padding:5rem 1rem;
	height: auto;
	overflow: hidden;
}
</style>