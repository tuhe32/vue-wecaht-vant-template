<style scoped="scoped">
	.home{
		padding-bottom: 5rem;
	}
	.home .top{
		padding: 0;
	}
	.home .top img{
		width: 100%;
		display: block;
	}
	.home .menu{
		width: 100%;
		background: #fff;
		position: fixed;
		bottom: 0;
		z-index: 100;
		border-top:0.05rem #eeeeee solid;
	}
	.home .menu .menucon{
		padding:0.5rem 1rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.home .menu div{
		flex: 1;
	}
	.home .menu div .van-icon{
		background: #3ecd59;
		color: #fff;
		font-size:1.5rem;
		width:3rem;
		height:3rem;
		line-height: 2.8rem;
		overflow: hidden;
		border-radius: 100%;
	}
	.home .menu div p{
		font-size: 0.8rem;
		color: #3ecd59;
		margin-top: 0.3rem;
	}
	.home .tips{
		background: #fff;
		padding:0.5rem 1.5rem 0.5rem 1.5rem;
	}
	.home .tips a.btn{
		width: 100%;
		height: 2.2rem;
		line-height: 2.2rem;
		background: #3ecd59;
		color: #fff;
		display:block;
		border-radius: 0.3rem;
	}
	.pagebox1{
		background: #fff;
		border-top:0.1rem #ecf3ef solid;
		padding: 1.5rem 0;
	}
	.pagebox2{height: auto; overflow: hidden; padding:1.5rem 0; background:url(../assets/images/home_boxbg1.jpg) no-repeat center top; background-size:cover;}
	.pagebox2 .boxCon{
		background:rgba(15,32,49,0.7);
		margin:1rem 1.5rem;
	}
	.pagebox2 .boxCon p{
		color: #fff;
	}
	.pagebox2 .boxCon h3{
		font-size:1.2rem;
		color: #fff;
		font-style: italic;
		margin: 1rem 0;
		line-height: 1.5rem;
		text-align: center;
	}
	.pagebox2 .boxCon .van-button{
		margin:1rem auto;
		display: block;
	}
	.pagebox3-1{height: auto; overflow: hidden; padding:1rem 0 0 0; background:#fff;}
	.pagebox3-1 .boxCon{
		margin:1rem 0rem 0 0;
	}
	.pagebox3-1 .boxCon img{
		width: 100%;
		display: block;
	}
	.pagebox3{ height: auto; overflow: hidden; padding:2rem 0 0rem 0; background: #fff;}
	.pagebox3 .boxCon{
		background:url(../assets/images/home_boxbg2.jpg) no-repeat center bottom; 
		background-size:cover;
		margin: 1.5rem 0;
		padding: 1.5rem 0;
	}
	.pagebox3 .carousel-3d-container{
		
	}
	.carousel-3d-container .carousel-3d-slide{
		background: none;
		border: 0;
	}
	.carousel-3d-container .slide_box{
		background: #fff;
		width: 50%;
		height:19rem;
		overflow: hidden;
		padding:1rem;
		text-align: center;
		border-radius:0.3rem;
		margin: 0 auto;
		position: relative;
	}
	.pagebox3 .slide_box .box_con{
		position: absolute;
		bottom:0.2rem;
		background: #fff;
		left: 0;
		padding: 0 1rem;
	}
	.pagebox3 .slide_box .box_con p{
		height:3.9rem;
		overflow: hidden;
		transition: height 1s;
	}
	.pagebox3 .slide_box .box_con.active p{
		height: 13.5rem;
		transition: height 1s;
	}
	.pagebox3 .slide_box .box_con .icon_arrowup{
		width: 2rem;
		height:2rem;
		line-height: 2rem;
		text-align: center;
		border-radius: 100%;
		background: #fff;
		font-size: 1.5rem;
		color: #f60;
		position:absolute;
		top: -1rem;
		left: 43%;
		transition: All 0.2s ease-in-out;
		transform: rotate(0deg);
	}
	.pagebox3 .slide_box .box_con.active .icon_arrowup{
		transition: All 0.2s ease-in-out;
		transform: rotate(180deg);
	}
	.pagebox3 .slide_box .box_con span{
		display: block;
		color: #999;
		font-size: 0.8rem;
		vertical-align: middle;
	}
	.pagebox3 .slide_box .box_con span em{
		font-style: normal;
		vertical-align: middle;
		display: inline;
	}
	.pagebox3 .slide_box .box_con .icon_arrowdown{
		font-size:1.5rem;
		color: #f60;
		vertical-align: middle;
		display: inline;
	}
	.pagebox3 .slide_box img{
		width: 100%;
		display: block;
	}
	.pagebox3 .slide_box  h3{
		font-size: 1.1rem;
		color: #3ecd59;
		margin:1rem 0 0.5rem 0;
	}
	.pagebox3 .slide_box  p{
		font-size:0.9rem;
		color: #666;
		line-height: 1.3rem;
		text-align: left;
	}
	.pagebox3 .boxCon .van-button{
		margin:1rem auto;
		display: block;
	}
	.pagebox4{ height: auto; overflow: hidden; padding:1.5rem 0; background: #fff;}
	.pagebox4 .boxTit h3{
		font-size:1rem;
	}
	.pagebox4 .tabcon{
		margin:3.5rem 1rem;
	}
	.pagebox4 .tabcon .bigimg{
		float: left;
		width:50%;
		display: inline-block;
		
	}
	.pagebox4 .tabcon .c_tit{
		width:50%;
		text-align: center;
		float: left;
	}
	
	.pagebox4 .tabcon .c_tit img{
		width: 5rem;
		display: block;
		margin:2rem auto 1rem auto;
	}
	.pagebox4 .tabcon .c_tit h3{
		font-size: 1.2rem;
		color: #53ba59;
	}
	.pagebox4 .tabcon p{
		clear: both;
		width: 100%;
		display: block;
		text-align: left;
		font-size: 1rem;
		color: #666;
		line-height: 1.5rem;
		padding-top:1rem;
	}
	.pagebox4 .tabcon p strong{
		color: #53ba59;
	}
	.pagebox4 .tabcon .c_tit1{
		width:100%;
		text-align: center;
		float: left;
	}
	.pagebox4 .tabcon .c_tit1 img{
		float: left;
		width:7rem;
	}
	.pagebox4 .tabcon .c_tit1 h3{
		font-size: 1.2rem;
		color: #53ba59;
		padding-top:2.5rem;
	}
	.pagebox5{height: auto; overflow: hidden; padding:2rem 0; background:url(../assets/images/home_boxbg3.jpg) no-repeat center top; background-size:cover;}
	.pagebox5 .boxCon{
		background:rgba(255,255,255,0.8);
		margin:1.5rem 1.5rem;
		padding: 1.5rem;
	}
	.pagebox5 .boxCon p{
		color: #333;
	}
	.pagebox5 .boxCon .van-button{
		width: 46%;
		margin:1rem 2%;
		display: inline-block;
		font-size:0.9rem;
	}
	.footer{
		height: auto; 
		overflow: hidden; 
		padding:2rem 0;
		background: #fff;
		text-align: center;
	}
	.footer h3{
		font-size: 1.2rem;
		color: #000;
	}
	.footer .footcon{
		display: flex;
		justify-content:center;
		margin: 1rem 0 0 0;
	}
	.footer .footcon a{
		padding: 0 0.5rem;
	}
	.footer .footcon img{
		width:3rem;
		display: block;
	}
	
</style>
<template>
  <section class="container home">
		<div class="top">
			<img src="../assets/images/home_img1.jpg" alt="">
			<img src="../assets/images/home_img2.jpg" alt="">
			<div class="tips">
				<a href="https://gogreeninthecity.se.com/zh/challenges/gogreeninthecity?lang=zh" class="btn">申请入口（注册报名及提交作品）</a>
			</div>
			<img src="../assets/images/home_img3.jpg" alt="">
		</div>
		<div class="menu">
			<div class="menucon">
				<div @click="$router.push({name:'about'})">
					<van-icon name="g" />
					<p>活动背景</p>
				</div>
				<div @click="$router.push({name:'theme'})">
					<van-icon name="dzhuanhuan" />
					<p>大赛详情</p>
				</div>
				<div @click="$router.push({name:'rule'})">
					<van-icon name="guize" />
					<p>参赛规则</p>
				</div>
				<div @click="$router.push({name:'order'})">
					<van-icon name="baoming" />
					<p>报名助手</p>
				</div>
				<div @click="$router.push({name:'team'})">
					<van-icon name="huangguan" />
					<p>召唤队友</p>
				</div>
			</div>
		</div>
		<div class="pagebox1">
			<div class="boxTit">
				<img src="../assets/images/tit_left1.png" >
				<h1>大赛背景</h1>
				<img src="../assets/images/tit_right1.png" >
			</div>
			<div class="boxCon">
				<p>施耐德电气正在引领<span>能效管理和自动化领域的数字化转型</span>。我们一直在寻找能够塑造我们公司及所属行业未来的大胆想法。</p>
				<p>现在，已连续成功举办八届的<span>施耐德电气绿色能效全球创新案例挑战赛</span>，<span>在2019年再次袭来！</span></p>
				<p>这一次，将迎来<span>更大规模、质量更优且想法更大胆的挑战！</span>我们在全世界范围内寻觅乐意将自己的技能和想法付诸实践考验的学生。</p>
				<h3>赢得参加巴塞罗那举办的全球创新峰会的宝贵机会！</h3>
			</div>
		</div>
		<div class="pagebox2">
			<div class="boxTit1">
				<img src="../assets/images/tit_left2.png" >
				<h1>赢得参加巴塞罗那举办的<br>全球创新峰会的宝贵机会！</h1>
				<img src="../assets/images/tit_right2.png" >
			</div>
			<div class="boxCon">
				<h3>即刻参加这项全球规模的大型商业挑战赛！</h3>
				<p>历年8届的耐德电气绿色能效全球创新案例挑战赛吸引了来自全球180个国家的8万多名学生参与——现在，<span>它也是你的舞台！</span></p>
				<p>以两人一组的方式参赛，向施耐德展示你的想法。若成功晋级在西班牙举行的最终评比，<span>将有机会角逐宝贵的特等奖！</span></p>
				<!--<van-button type="white" @click="$router.push({name:'order'})">即刻报名参加挑战赛吧！</van-button>-->
			</div>
		</div>
		<div class="pagebox3">
			<div class="boxTit">
				<img src="../assets/images/tit_left1.png" >
				<h1>分享你的大胆想法！</h1>
				<img src="../assets/images/tit_right1.png" >
			</div>
			<div class="stit">解决能效管理领域<span>四项真实业务挑战中<br>的任意一项你自己的大胆想法。</span></div>
			<div class="boxCon">
				<carousel-3d :perspective="0" :space="280" :height="350" :display="3" :controls-visible="true">
					<slide :index="0">
						<div class="slide_box" @click="slideOn(0)">
							<img src="../assets/images/Sustainable_v1.jpg" alt="">
							<div :class="[{active:isActive==0},'box_con']">
								<van-icon name="arrow_tips" class="icon_arrowup"/>
								<h3>可持续性和能源获取</h3>
								<p>由于大规模的快速城市化、工业化和数字化趋势，到2050年，能源消耗将增长50%，而对电力的需求更将以两倍的速度增长。
通过创新的数字化商业模式和/或可持续性方法来解决能源困境，推动能源普及或可持续发展。</p>
								<span><van-icon name="cQuery" class="icon_arrowdown" /> <em>点击展开</em></span>
							</div>
						</div>
					</slide>
					<slide :index="1" >
						<div class="slide_box" @click="slideOn(1)">
							<img src="../assets/images/buildings_v1.jpg" alt="">
							<div :class="[{active:isActive==1},'box_con']">
								<van-icon name="arrow_tips" class="icon_arrowup"/>
								<h3>未来楼宇</h3>
								<p>现在，楼宇的智能化和节能化时代已经来临。如何将新技术以创新的方式融入到楼宇之中？我们如何重塑医院、住宅、学校和商业楼宇的未来？请分享你的大胆构想！</p>
								<span><van-icon name="cQuery" class="icon_arrowdown" /> <em>点击展开</em></span>
							</div>
						</div>
					</slide>
					<slide :index="2" >
						<div class="slide_box" @click="slideOn(2)">
							<img src="../assets/images/plant_v1.jpg" alt="">
							<div :class="[{active:isActive==2},'box_con']">
								<van-icon name="arrow_tips" class="icon_arrowup"/>
								<h3>未来工厂</h3>
								<p>施耐德电气正在引领工业自动化市场的数字化转型。怎样将物联网、人工智能、机器学习等应用于当前或未来的工业，或许您可以基于EcoStruxure 架构和我们聊聊。</p>
								<span><van-icon name="cQuery" class="icon_arrowdown" /> <em>点击展开</em></span>
							</div>
						</div>
					</slide>
					<slide :index="3" >
						<div class="slide_box" @click="slideOn(3)">
							<img src="../assets/images/Grid_v1.jpg" alt="">
							<div :class="[{active:isActive==3},'box_con']">
								<van-icon name="arrow_tips" class="icon_arrowup"/>
								<h3>未来电网</h3>
								<p>到2040年，全球能源需求将增长58%。我们的世界如何才能在满足这样的需求增长的同时，确保地球的健康发展，保护其有限的资源？<br>
								现在，我们期待着你们为能源管理和配电的未来开发新的解决方案。 区块链、人工智能 ......创想的天空没有无际！ 你有什么石破天惊的大胆构想？</p>
								<span><van-icon name="cQuery" class="icon_arrowdown" /> <em>点击展开</em></span>
							</div>
						</div>
					</slide>
				</carousel-3d>

				<!--<van-button type="white" @click="$router.push({name:'order'})">即刻报名参加挑战赛吧！</van-button>-->
			</div>
		</div>
		<div class="pagebox3-1">
			<div class="boxTit">
				<img src="../assets/images/tit_left1.png" >
				<h1>中国区比赛时间表</h1>
				<img src="../assets/images/tit_right1.png" >
			</div>
			<div class="boxCon">
				<img src="../assets/images/Schneider_timeline.png" alt="">
			</div>
		</div>
		<div class="pagebox4">
			<div class="boxTit">
				<img src="../assets/images/tit_left1.png" >
				<h1>快来报名参加挑战赛！</h1>
				<img src="../assets/images/tit_right1.png" >
			</div>
			<div class="stit">你将有机会赢得</div>
			<van-tabs v-model="tabActive" type="card" swipeable animated>
				<van-tab class="tab1">
					<div slot="title" class="tit tabtit1"><h4>中国区奖项设置</h4></div>
					<div class="tabcon">
						 <img src="../assets/images/SemiFinalistsPrize.png" class="bigimg">
						 <div class="c_tit">
							 <img src="../assets/images/tab_icon3.png" class="titimg">
							 <h3>中国区决赛入围奖</h3>
						 </div>
						 <p>入围中国区决赛的参赛者将会得到施耐德电气专家的指导，帮助改进方案，助力选手角逐全球总决赛！</p>
						<p><strong>中国区冠军队伍：</strong>获得2万元人民币奖金，并可赴西班牙巴塞罗那参与决赛角逐；</p>
						<p><strong>中国区第二名队伍：</strong>奖金8000元人民币；</p>
						<p><strong>中国区第三名队伍：</strong>奖金6000元人民币；</p>
						<p><strong>中国区10强队伍：</strong>将获得施耐德电气中国实习面试机会！</p>
						<p><strong>中国区50强队伍：</strong>将获得大赛资格证书，及施耐德电气中国创新峰会、公司参观活动参与机会！</p>
					</div>
				</van-tab>
				<van-tab class="tab2">
					<div slot="title" class="tit tabtit2"><h4>全球总决赛奖项设置</h4></div>
					<div class="tabcon">
						 <img src="../assets/images/fstPrize.png" class="bigimg">
						 <div class="c_tit">
							 <img src="../assets/images/tab_icon1.png" class="titimg">
							 <h3>特等奖</h3>
						 </div>
						 <p>最终胜出的小组将赢得施耐德电气的工作邀约，并可任选两个城市（需设有施耐德电气办事处）进行观光旅游。</p>
						  <div class="c_tit1">
							 <img src="../assets/images/tab_icon4.png" class="titimg1">
							 <h3>能源创新杰出女性奖</h3>
							</div>
						 <p style="padding: 0;">入围半决赛的一支全女性小组将赢得Women in Energy Award奖项，为其保留决赛席位，并可获得1000美元的现金奖励。</p>
					</div>
				</van-tab>
			</van-tabs>
		
		</div>
		
		<div class="pagebox5">
			<div class="boxTit">
				<img src="../assets/images/tit_left1.png" >
				<h1>召唤队友</h1>
				<img src="../assets/images/tit_right1.png" >
			</div>
			<div class="boxCon">
				<p>施耐德电气绿色能效全球创新案例挑战赛活动组队参赛的两名选手中必须有一名女生，以符合施耐德电气的多元化&包容性的理念。</p>
				<p><span>想要寻找合适的队友，马上点击下面按钮参与吧。</span></p>
				<van-button type="green" @click="$router.push({name:'goddess'})">召唤队友</van-button>
				<van-button type="green" @click="$router.push({name:'team'})">查看队伍</van-button>
			</div>
		</div>
		<div class="footer">
			<h3>在社交媒体上关注"GoGreen"</h3>
			<div class="footcon">
				<a ><img src="../assets/images/qrcode.jpg" alt=""></a>
				<a ><img src="../assets/images/linkedin.png" alt=""></a>
				<a ><img src="../assets/images/weibo.png" alt=""></a>
				<a ><img src="../assets/images/Laptop.png" alt=""></a>
			</div>
		</div>
	</section>
</template>

<script>
// @ is an alias to /src
import { Icon,Button,Tab,Tabs,Toast  } from 'vant';
import baseUtil from "../utils/baseUtil";
import {saveVisit} from '../api/index';

export default {
		name: 'home',
		components: {
		 [Button.name]: Button,
		 [Icon.name]: Icon,
		 [Tab.name]: Tab,
		 [Tabs.name]: Tabs,
			[Toast.name]: Toast,
		},
		data() {
			return {
				tabActive:2,
				slides:4,
				isActive:null,
			};
		},
		methods: {
            async visit(id) {
            	this.baseUtil.setStore("from",id)
                let resp = await saveVisit({id:id,type:1})
                if(this.qUtil.validResp(resp)){
                }else{
                    Toast({message:resp.msg});
                }
            },
			slideOn(index){
				if(this.isActive==index){
					this.isActive=null;
				}else
				{
					this.isActive=index;	
				}
			},
		},
		mounted(){
			if(baseUtil.isNotBlankObj(this.$router.currentRoute.query) && baseUtil.isNotBlank(this.$router.currentRoute.query.from)){
				let id = parseInt(this.$router.currentRoute.query.from)
				if(id <=0 )   Toast.success({message:"渠道商不存在!",duration:1200});
			    else 	this.visit(id)
			}
		}
}
</script>