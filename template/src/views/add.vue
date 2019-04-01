<style scoped="scoped">
	.order{}
	.order .van-button--green{
		margin: 2rem auto;
		width: 85%;
	}
	.order .tips{
		padding:1rem 1.5rem 0 1.5rem;
		font-size: 0.8rem;
		line-height: 1.5rem;
		text-align: left;
		color: #666;
	}
</style>
<template>
  <section class="container order">
	  <van-nav-bar title="报名助手" left-arrow @click-left="$router.go(-1)">
		  <van-icon name="shouye" slot="right" @click="$router.push({path: '/'})" />
	  </van-nav-bar>
	  <van-cell-group>
			<van-field v-model="form.name" label="姓名" placeholder="请输入" required/>
			<van-field v-model="sex"  label="性别" readonly is-link placeholder="请选择" @click="onActionShow()" />
			<van-field v-model="form.phone" label="手机号" placeholder="请输入" required/>
			<!--<van-field v-model="form.wechat" label="微信号" placeholder="请输入" />-->
			<van-field v-model="form.email" label="邮箱" placeholder="请输入" required/>
			<van-field v-model="form.school" label="学校" placeholder="请输入" />
			<van-field v-model="form.major" label="专业" placeholder="请输入" />
			<van-field v-model="form.referrerPhone" label="推荐人手机号" placeholder="请输入" />
			<!--<van-field v-model="form.grade" label="年级" placeholder="请输入" />-->
			<!--<van-field v-model="form.education" label="学历" placeholder="请输入" />-->
	  </van-cell-group>
	  <div class="tips">
		  <p>留下您的个人信息，便于寻找队友和将您加入咨询群进行问题咨询!</p>
	  </div>
	  <van-button type="green" @click="save" :loading="isSubmitLoading" loading-text="提交中">确认提交</van-button>
	  <van-actionsheet v-model="actionShow" :actions="actions" @select="onSelect" />
  </section>
</template>

<script>
import {NavBar,Field,Icon,Button,Cell, CellGroup,Actionsheet,Toast } from 'vant';
import {saveOne,saveVisit} from '../api/index';
import valid from '../utils/validate'
import baseUtil from "../utils/baseUtil";

export default {
	name: 'order',
	components: {
	[NavBar.name]: NavBar,
	 [Button.name]: Button,
	 [Icon.name]: Icon,
	 [Cell.name]: Cell,
	 [CellGroup.name]: CellGroup,
	 [Field.name]: Field,
	 [Actionsheet.name]: Actionsheet,
	 [Toast.name]: Toast,
	},
	data() {
		return {
		    form:{
                name:'',
                sex:null,
                phone:'',
                wechat:'',
                email:'',
                school:'',
                major:'',
                grade:'',
                education:'',
			},
			sex:'',
			actionShow: false,
            isSubmitLoading:false,
			actions: [{name: '男',value:1},{name: '女',value:0}]
		};
	},
	methods: {
		onActionShow(){
			this.actionShow = true;
		},
		onSelect(item) {
			// 点击选项时默认不会关闭菜单，可以手动关闭
			this.actionShow = false;
			this.sex = item.name
			this.form.sex = item.value
		},
        async save() {
            if(!valid.isNotBlank(this.form.name)){
                Toast({message:"姓名不能为空!",duration:1200});
                return false;
            }
            if(!valid.isNotBlank(this.form.phone)){
                Toast({message:"手机号不能为空!",duration:1200});
                return false;
            }
            if(!valid.tel(this.form.phone)){
                Toast({message:"手机号格式不正确!",duration:1200});
                return false;
            }
            if(!valid.isNotBlank(this.form.email)){
                Toast({message:"邮箱不能为空!",duration:1200});
                return false;
            }
            if(baseUtil.isNotBlank(this.form.email)&&!valid.email(this.form.email)){
                Toast({message:"邮箱格式不正确!",duration:1200});
                return false;
            }
			if(baseUtil.isNotBlank(this.form.referrerPhone)&&!valid.tel(this.form.referrerPhone)){
				Toast({message:"推荐人手机号格式不正确!",duration:1200});
				return false;
			}
            this.isSubmitLoading = true
            let resp = await saveOne({entity:this.form});
            if(this.qUtil.validResp(resp)){
				let chanelId = this.baseUtil.getStore("from")
				if(this.baseUtil.isNotBlankObj(chanelId)) await saveVisit({id:chanelId,type:3})
                this.isSubmitLoading = false
                Toast.success({message:"保存成功!",duration:1200});
                this.$router.push({name:'home'});
            }else{
                this.isSubmitLoading = false
                Toast({message:resp.msg,duration:1200});
			}
        },
	},
	
}
</script>
