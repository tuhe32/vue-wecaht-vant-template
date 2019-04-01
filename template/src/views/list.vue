<template>
  <section class="container team">
	<van-nav-bar title="全部队伍" left-arrow  @click-left="$router.go(-1)">
		<van-icon name="shouye" slot="right" @click="$router.push({path: '/'})" />
	</van-nav-bar>
	<van-search
	  v-model="params.key"
	  placeholder="请输入搜索关键词"
	  show-action
	  shape="round"
	  @search="onSearch"
      @clear="onSearch"
	>
	  <div slot="action" @click="onSearch">搜索</div>
	</van-search>
	<no-data v-if="isNoData"></no-data>
	<van-cell-group v-else>
		<van-list v-model="loading" :finished="finished" @load="init">
			<van-cell  v-for="(item, index) in dataList" icon="user-o" :label="item.label" :key="index">
				<template slot="title">
					<van-button type="green" size="small" @click="$router.push({name:'detail',query:{sid:item.sid}})">查看详情</van-button>
					<h3 class="tit">{{item.name}}</h3>
				</template>
			</van-cell>
		</van-list>
		<!-- <van-cell icon="user-o" label="参赛宣言：在竞争中学习，在学习中成长，青春没有失败，比赛赢的是自己。超越自我，勇于向前！">
		  <template slot="title">
			<van-button type="green" size="small">查看详情</van-button>
			<h3 class="tit">刘德华</h3>
		  </template>
		</van-cell> -->
	</van-cell-group>
	<div class="floatIcon" @click="$router.push({name:'goddess'})">
		<span>召唤<br>队友</span>
	</div>
  </section>
</template>

<script>
import {List,NavBar,Icon,Button,Cell, CellGroup,Search } from 'vant';
import {findAllTeam} from '../api/index';
import NoData from "../components/noData";


export default {
	name: 'order',
	components: {
        NoData,
        [List.name]: List,
		[NavBar.name]: NavBar,
	 [Button.name]: Button,
	 [Icon.name]: Icon,
	 [Cell.name]: Cell,
	 [CellGroup.name]: CellGroup,
	 [Search.name]: Search,
	},
	data() {
		return {
            params:{
                key:'',
                page: 1, pageSize: 12,
                order: null, sort: null
            },
            dataList:[],
            loading: false,
            finished: false,
            isNoData:false,
		}
	},
	methods: {
		onSearch() {
            this.dataList = []
            this.params.page = 1
            this.init();
		},
        async init() {
            let resp = await findAllTeam(this.params);
            if(this.qUtil.validResp(resp)){
                this.isNoData = resp.data.total<=0?true:false;
                let list = resp.data.dataList;
                if(list!=null && list.length > 0){
                    list.map((e,i)=>{
                        e.label = "参赛宣言："+e.label
                        this.dataList.push(e);
                    });
                    this.params.page++;
                }
                this.loading = false;
                if(this.dataList.length >= resp.data.total){
                    this.finished = true;
                }
            }else{
                this.loading = false;
                this.finished = true;
            }
        },
	},
	
}
</script>
<style scoped>
	.team{}
	.team .van-cell-group{
		border-top:0.05rem #eeeeee solid;
	}
	.team .van-cell .van-button.van-button--green{
		float: right;
		border-radius:2rem!important;
		font-size: 0.8rem!important;
		padding: 0 1rem;
	}
	.team .van-cell .van-icon{
		color: #3ECD59;
		font-size: 1.2rem;
		margin-top: 0.3rem;
		font-weight: bold;
	}
	.team .van-cell__title .tit{
		font-size: 1rem;
		margin-top: 0.3rem;
	}
	.team .van-cell .van-cell__label{
		clear: both;
		font-size: 0.8rem;
		padding-top: 0.3rem;
		line-height: 1.3rem;
	}
</style>