<template>
	<section class="container user_set">
		<van-cell-group class="user_head">
			<van-uploader :after-read="onRead" accept="image/*" multiple  :max-size="maxSize" @oversize="overSize"  >
				<van-cell title="编辑头像"  is-link >
					<img :src="user.headImgUrl"  class="headimg" slot="icon" v-if="user.headImgUrl && user.headImgUrl!=null" />
					<img src="../../../public/images/nohead.jpg" slot="icon" class="headimg" v-else />
				</van-cell>
			</van-uploader>
		</van-cell-group>
		<van-cell-group>
			<van-field v-model="user.nickName" label="昵称" placeholder="请输入昵称"  clearable />
			<van-field v-model="user.sexName" label="性别" placeholder="请选择性别"  readonly  @click="showSex" is-link />
  			<van-field v-model="user.realName" label="姓名" placeholder="请输入您的真实姓名" clearable />
  			<van-field v-model="user.phone" label="手机" placeholder="请输入手机号" type="number" :readonly="true" >
				<van-button  slot="button" :text="btnText" size="small" type="primary" @click="onChangeTel"></van-button>
			</van-field>
		</van-cell-group>
		<van-cell-group>
			<van-cell title="喜好设置" value="" to="likeCategory" is-link />
		</van-cell-group>
		<div class="set_btn">
			<van-button round type="gray" @click="onSubmit">保存</van-button>
		</div>
		<van-actionsheet
		  v-model="show"
		  :actions="actions"
		  @select="onSelect"
		  slot="button"/>
	</section>
</template>
<script>
	import { Icon, Cell, CellGroup, Toast, Field, Actionsheet, Button,Uploader } from 'vant'
	import valid from '../../utils/validate'
    // import {uploadFile} from "../../api/common";
    export default {
		components: {
			[Icon.name]: Icon,
			[Cell.name]: Cell,
			[CellGroup.name]: CellGroup,
			[Toast.name]: Toast,
			[Field.name]: Field,
			[Actionsheet.name]: Actionsheet,
			[Button.name]: Button,
			[Uploader.name]: Uploader,
		},
		data() {
			return {
			    user:{},
				show:false,
			    actions: [{name: '男',value:"1"},{name: '女',value:"2"}],
                maxSize:1024*1024*10,
                btnText:'绑定'
			}
		},
		methods: {
//             overSize(){
//                 Toast({message:"请上传小于10MB的图片!",duration:1200});
//             },
// 			likeCategory() {
// 				this.$router.push({name: 'likeCategory'});
// 			},
// 			onSelect(item) {
// 		      // 点击选项时默认不会关闭菜单，可以手动关闭
// 		      this.show = false;
// 		      this.user.sex = item.value;
// 		      this.user.sexName = item.name;
// 		    },
// 		    showSex(){
// 		      this.show = true;
// 		    },
// 			//修改手机号
//             onChangeTel(){
// 				this.$router.push({name:'Validate',query:{phone:this.user.phone}});
// 			},
//             async onRead(file){
//                 let fd = new FormData();
//                 fd.append('file',file.file)
//                 let resp = await uploadFile(fd);
//                 if(this.qUtil.validResp(resp)){
//                     let params = {headImgUrl:resp.data}
//                     let saveResp = await saveHeadImg(params);
//                     if(this.qUtil.validResp(saveResp)){
//                         this.user.headImgUrl = resp.data;
// 					}else{
//                         Toast({message:resp.msg,duration:1200});
//                     }
//                 }
//             },
// 			async onSubmit(){
// 			    if(!valid.isNotBlank(this.user.nickName)){
// 			        Toast({message:"昵称不能为空!",duration:1200});
// 			        return false;
// 				}
//                 if(!valid.isNotBlank(this.user.sex)){
//                     Toast({message:"性别不能为空!",duration:1200});
//                     return false;
//                 }
// 			    let resp = await saveUserDetail({weixinUser:this.user});
// 			    if(this.qUtil.validResp(resp)){
// 					Toast.success({message:"保存成功!",duration:1200});
//                     this.$router.push({name:'UserIndex'});
// 				}else{
//                     Toast({message:'保存失败!',duration:1200});
//                 }
// 			},
// 			async init(){
// 			    let resp = await getUserDetail();
// 			    if(this.qUtil.validResp(resp)){
// 			        this.user = resp.data.weixinUser;
//                     this.classifyList = resp.data.classifyList;
//                     if(this.user.sex == "1"){
//                         this.user.sexName = "男";
// 					}else if(this.user.sex == "2"){
//                         this.user.sexName = "女";
// 					}else{
//                         this.user.sexName = "";
// 					}
// 					if(this.baseUtil.isNotBlank(this.user.phone)){
//                         this.btnText = "修改";
//                     }
// 				}
// 			},
		},
		mounted(){
		    // this.init();
		}
	}
</script>
<style>
.user_set {
	padding-bottom: 4rem;
}
.user_set .van-cell-group{
	margin:0.7rem 0;
	height: auto;
	overflow: hidden;
	text-align: left;
}
.user_set .user_head{
	position: relative;
	z-index: 10;
}
.user_set .user_head .van-uploader{
	width: 100%;
}
.user_set .user_head .headimg{
	width: 3rem;
	height: 3rem;
	border-radius: 100%;
}
.user_set .user_head .van-cell__title{
	padding: 0.7rem 0 0 0.5rem;
}
.user_set .user_head .van-cell__right-icon{
	margin-top: 0.7rem;
}
.user_set .van-cell{
	text-align: left;
	padding:1.2rem 0.9375rem;
}
.user_set .van-cell .van-cell__title{
	font-size: 1rem;
	color: #868686;
}
.user_set .van-field .van-cell__title{
	max-width: 3rem;
}
.user_set .van-field .van-field__control{
	font-size: 1rem;
}
.user_set .set_btn{
	margin: 2rem 2rem;
}
.user_set .van-button--gray{
	width: 100%;
}
</style>