<template>
	<section class="container book_list_tab">
		<van-tabs  v-model="categoryActive" @change="onChangeCategory"  sticky swipeable animated>
			<van-tab v-for="(item,index) in categoryItem" :key="index" :title="item.name" >
				<book-items :book-category-id="item.bookCategoryId" :current="index" :active="categoryActive" ></book-items>
			</van-tab>
		</van-tabs>
		<!-- <van-swipe :loop="false" :show-indicators="false" ref="mySwiper" @change="onChangeCategory" :height="550">
			<van-swipe-item v-for="(item,index) in categoryItem" :key="index"> -->
				<!--<no-data v-if="categoryItem[categoryActive].isNoData" ></no-data>-->
				<!--<van-list  v-model="categoryItem[categoryActive].loading" :finished="categoryItem[categoryActive].finished" :immediate-check="false"  @load="init">-->
					<!--<div class="bookItem" v-for="(book,bIndex) in categoryItem[categoryActive].bookList" :key="bIndex" @click="gotoBookDetail(book.id)" >-->
						<!--<div class="list_l">-->
							<!--<img v-lazy="book.cover" v-if="book.cover && book.cover!=null"/>-->
							<!--<img src="/images/shuimg.jpg" v-else/>-->
						<!--</div>-->
						<!--<div class="list_r">-->
							<!--<h3>{{book.title}}</h3>-->
							<!--<p>{{book.recommendation}}</p>-->
							<!--<span>{{book.author}}</span>-->
							<!--<em><van-icon name="yanjing" size="1.2rem" style="vertical-align: bottom;"/> {{book.pv}} </em>-->
						<!--</div>-->
					<!--</div>-->
				<!--</van-list>-->
					<!-- <book-items :book-category-id="item.bookCategoryId" :current="index" :active="categoryActive" ></book-items> -->
				<!-- 	<div >&nbsp;&nbsp;</div>	
			</van-swipe-item>
		</van-swipe> -->
		
	</section>
</template>
<script >
	import {Tab, Tabs, List, Icon, Toast,Cell,Swipe, SwipeItem} from 'vant'
	import {findList} from '../../api/index'
	import noData from '../../components/noData'
	import bookItems from './book_items'
export default {
		components: {[Tab.name]: Tab,[Tabs.name]: Tabs,[List.name]: List, [Icon.name]: Icon, [Toast.name]: Toast, [Cell.name]: Cell,
			[Swipe.name]: Swipe,[SwipeItem.name]: SwipeItem,
		noData,bookItems},
	data() {
		return {
			bookList: [],
		    loading: false,
		    finished: false,
			// params:{
             //    bookCategoryId:0,
             //    page: {page: 1, pageSize: 4},
             //    sort: {order: null, sort: null}
			// },
			isNoData:false,
			categoryActive:0,
			categoryItem:[],
			bookCategoryId:"",
			winHeight:0
		}
	},
	watch: {
		'categoryActive':function(val,oldVal) {
			// console.log('[val]',val)
			// this.$refs.mySwiper.swipeTo(val)
			
			// console.log('[oldVal]',oldVal)
			// this.init();
		}
	},
	methods: {
		gotoBookDetail(id){
			this.$router.push({name: 'BookDetail',query:{id:id}});
		},
        onChangeCategory(index){
        	// console.log('[onChangeCategory]',index)
           this.categoryActive = index
           this.bookCategoryId = this.categoryItem[index].bookCategoryId;
        },
        async getCategoryList(){
		  let resp = await findList();
		  if(this.qUtil.validResp(resp)){
		      this.categoryItem = resp.data.templateClassifyList;
		      this.categoryItem.splice(0,0,{id:0,bookCategoryId:"0",name:'全部'});
              this.categoryItem.map((e,i)=>{
                  e.loading=false;
                  e.finished=false;
                  e.bookList = [];
                  e.page = {page: 1, pageSize: 6};
                  e.sort= {order: null, sort: null};
                  e.isNoData = false;
                  if(e.id == this.$route.query.id){
                    this.categoryActive = i;
                    this.onChangeCategory(i)
                      // this.categoryItem[this.categoryActive].loading = true;
                    // if(i == 0) this.onChangeCategory(0)
                  }
              })
              // this.init();
          }
        },
        // async init() {
		 //    console.log('[111]')
         //    let category = this.categoryItem[this.categoryActive];
         //    let resp = await getBookList(category);
         //    if(this.qUtil.validResp(resp)){
			// 	if(resp.data.total <=0){
         //            category.isNoData = true;
			// 	    return false;
			// 	}
         //        let list = resp.data.bookList;
         //        if(list && list.length >0){
         //            list.map((e,i)=>{
         //                category.bookList.push(e);
			// 		});
         //            console.log(" category.bookList", category.bookList);
         //            category.page.page ++;
         //        }
         //        console.log(" categoryItem", this.categoryItem);
         //    }
         //    category.loading = false;
         //    if(category.bookList.length >=resp.data.total){
         //        category.finished = true;
			// }
         //    this.categoryItem[this.categoryActive] = category
	    // },
	},
	mounted(){
        // this.getCategoryList();
        this.winHeight = document.documentElement.clientHeight -50;
        console.log('winHeight',this.winHeight)
	}

}</script>
<style>
.book_list_tab{
	background: #fff; 
	height: 100%;
}
/*.book_list .van-tabs__wrap{
	position: fixed;
}*/
.book_list_tab .van-list{
	height:auto;
	overflow:hidden;
	background: #fff;
	padding: 3rem 1rem 4rem 1rem;
}
.book_list_tab .van-tabs--line{
	padding: 0;
}
.book_list_tab .van-tabs{
	height: 100%;
	overflow: hidden;
}
.book_list_tab .van-tabs__content{
    overflow: hidden;
    height: 100%;
}
.book_list_tab .van-tabs__track{
	height: 100%;
}
.book_list_tab .van-tab__pane--float {
    height: 100%;
    overflow-y: auto;
		-webkit-overflow-scrolling: touch;
}
.book_list_tab .van-tabs__wrap{
		position: fixed;
}

</style>