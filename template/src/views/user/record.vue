<template>
	<section class="container record">
		<no-data v-if="isNoData"></no-data>
		<van-cell-group v-else>
			<van-list v-model="loading" :finished="finished" @load="init">
				<van-cell v-for="(book,bIndex) in bookList" :title="book.book.title" :label="fmDate(book.lastHeardAt)" :key="bIndex" @click="gotoBookDetail(book.bookId)" is-link>
					<img v-lazy="book.bookImage" slot="icon" class="bookimg" v-if="book.bookImage && book.bookImage!=null"/>
					<img src="/images/shuimg.jpg" slot="icon" class="bookimg" v-else/>
				</van-cell>
			</van-list>
		</van-cell-group>
	</section>
</template>
<script >
	import {List, Cell, CellGroup, Icon, Toast} from 'vant'
	// import {getHistoryList} from "../../api/user";
	import noData from '../../components/noData'
	import {fmDate} from "../../utils";

    export default {
	components: {
		[List.name]: List,
		[Cell.name]: Cell,
		[CellGroup.name]: CellGroup,
		[Icon.name]: Icon,
		[Toast.name]: Toast,
        noData,
	},
	data() {
		return {
            params:{
                page: {page: 1, pageSize: 12},
                sort: {order: null, sort: null}
            },
            bookList:[],
		    loading: false,
		    finished: false,
            isNoData:false,

		}
	},
	methods: {
	},
	mounted(){

	}

}</script>
<style>
.record{
	background: #fff; 
	min-height: 100%;
}
.record .van-list{
}
.record .van-cell{
	text-align: left;
}
.record .van-cell .bookimg{
	width: 3rem;
	height: 4rem;
}
.record .van-cell .van-cell__title{
	margin-left: 0.8rem;
}
.record .van-cell .van-cell__title span{
	font-size: 1rem;
	line-height: 1;
}
.record .van-cell .van-cell__title .van-cell__label{
	color: #999;
	margin-top: 0.2rem;
}
.record .van-cell .van-cell__right-icon{
	margin-top: 0.7rem;
}
</style>