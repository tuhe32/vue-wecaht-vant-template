<template>
	<section class="container favorite">
        <no-data v-if="isNoData"></no-data>
		<van-cell-group  v-else>
			<van-list v-model="loading" :finished="finished" @load="init">
				<van-cell v-for="(book,bIndex) in bookList" :title="book.book.title" :label="book.book.author" :key="bIndex" @click="gotoBookDetail(book.bookId)" is-link>
					<!--<img :src="book.book.cover" slot="icon" class="bookimg" v-if="book.book.cover && book.book.cover!=null"/>-->
					<img v-lazy="book.book.cover" slot="icon" class="bookimg" v-if="book.book.cover && book.book.cover!=null"/>
					<img src="/images/shuimg.jpg" slot="icon" class="bookimg" v-else/>
				</van-cell>
			</van-list>
		</van-cell-group>
	</section>
</template>
<script >
	import {List, Cell, CellGroup, Icon, Toast} from 'vant'
	// import {getBookList} from "../../api/user";
    import noData from '../../components/noData'
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
		gotoBookDetail(id){
			// this.$router.push({name: 'BookDetail',query:{id:id}})
		},
	},
	mounted(){

	}

}</script>
<style>
.favorite{
	background: #fff; 
	min-height: 100%;
}
.favorite .van-list{
}
.favorite .van-cell{
	text-align: left;
}
.favorite .van-cell .bookimg{
	width: 3rem;
	height: 4rem;
}
.favorite .van-cell .van-cell__title{
	margin-left: 0.8rem;
}
.favorite .van-cell .van-cell__title span{
	font-size: 1rem;
	line-height: 1.5;
}
.favorite .van-cell .van-cell__title .van-cell__label{
	color: #999;
	margin-top: 0.3rem;
}
.favorite .van-cell .van-cell__right-icon{
	margin-top: 0.7rem;
}
</style>