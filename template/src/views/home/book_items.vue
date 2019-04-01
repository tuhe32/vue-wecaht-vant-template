<template>
    <no-data v-if="isNoData" ></no-data>
    <van-list  v-else v-model="loading" :finished="finished" ref="vantList" :immediate-check="false" @load="init">
        <div class="bookItem" v-for="(book,bIndex) in bookList" :key="bIndex" @click="gotoBookDetail(book.id)" >
            <div class="list_l">
                <img v-lazy="book.cover" v-if="book.cover && book.cover!=null"/>
                <img src="/images/shuimg.jpg" v-else/>
            </div>
            <div class="list_r">
                <h3>{{book.title}}</h3>
                <p>{{book.recommendation}}</p>
                <span>{{book.author}}</span>
                <em><van-icon name="yanjing" size="1.2rem" style="vertical-align: bottom;"/> {{book.pv}} </em>
            </div>
        </div>
    </van-list>
</template>
<script>
    import { List, Icon, Toast,Cell} from 'vant'
    // import {getBookList} from '../../api/book'
    import noData from '../../components/noData'
    export default {
        components: {[List.name]: List, [Icon.name]: Icon, [Toast.name]: Toast, [Cell.name]: Cell, noData},
        data() {
            return {
                bookList:[],
                params:{
                    bookCategoryId:0,
                    page:{page:1,pageSize:8},
                    sort:{order: null, sort: null}
                },
                loading:false,
                finished:false,
                isNoData:false,
            }
        },
        props:{
          bookCategoryId:{
            type:String,
            default:null
          },
          active:{
            type:Number,
            default:null
          },
          current:{
            type:Number,
            default:null
          },
        },
        watch: {
            'bookCategoryId':function(val,oldVal) {
                // this.$refs.mySwiper.swipeTo(val)
                // console.log('[val]',val)
                // console.log('[oldVal]',oldVal)
                console.log('[-- comp bookCategoryId watch --]',val)
                this.bookList = []
                this.params = {
                    bookCategoryId:this.bookCategoryId,
                    page:{page:1,pageSize:8},
                    sort:{order: null, sort: null}
                }
                this.isNoData=false
                // this.$refs.vantList.check()
                // this.finished=false
                // this.init();
            },
            'active':function(val,oldVal) {
                // console.log('[-- comp active --]',val)
                // console.log('[-- comp current --]',this.current)
                // console.log('[-- comp bookCategoryId --]',this.bookCategoryId)
                if(val == this.current) this.$refs.vantList.check(0)
            },
        },
        methods: {
//             gotoBookDetail(id){
//                 this.$router.push({name: 'BookDetail',query:{id:id}});
//             },
//             async init() {
//                 this.loading = true
//                 let resp = await getBookList(this.params);
//                 if(this.qUtil.validResp(resp)){
//                     if(resp.data.total <=0){
//                         this.isNoData = true;
//                         return false;
//                     }
//                     let list = resp.data.bookList;
//                     console.log('[list111]',resp.data.bookList)
//                     if(list && list.length >0){
//                         list.map((e,i)=>{
//                             this.bookList.push(e);
//                         });
//                         this.params.page.page ++;
//                     }
//                     this.loading = false;
//                     if(this.bookList.length >=resp.data.total){
//                         console.log('[finished]')
//                         this.finished = true;
//                         return false;
//                     }
//                     // console.log('[loading]',this.loading)
//                 }else{
//                     this.loading = false;
//                     this.finished = true;
//                 }
//             },
        },
        mounted(){
//             this.params.bookCategoryId = this.bookCategoryId;
//             if(this.active == this.current)  this.init()
            // console.log('[-- comp active --]',this.active)
            //     console.log('[-- comp current --]',this.current)
            //     console.log('[-- comp bookCategoryId --]',this.bookCategoryId)
        }
    }
</script>
<style scoped>
    .book_list{
        background: #fff;
        min-height: 100%;
    }
    .book_list .van-list{
        padding: 0.8rem 1rem 4rem 1rem;
    }

</style>