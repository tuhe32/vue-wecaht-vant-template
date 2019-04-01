<template>
	<section class="container feedback">
		<div class="feedback_input">
			<p class="num">{{messageLen}}/140字</p>
			<van-field v-model="feedMessage" type="textarea" placeholder="请填写您的问题或建议"rows="8"  />
		</div>
		<div class="feedback_uploadimg mt7" >
			<div class="tit">
				<span>最多1张</span>
				<h3>上传截图</h3>
			</div>
			<dl class="uploadBox">
				<dt>
					<van-loading v-show="isLoading" size="50px" style="text-align: center;margin:15px auto 0 auto;" />
					<van-uploader v-show="!isLoading" :after-read="onRead" accept="image/*" multiple  :max-size="maxSize" @oversize="overSize">
						<van-icon name="jia" />
					</van-uploader>
				</dt>
				<dd v-if="imageUrl!=null && imageUrl!=''">
					<van-icon name="delete" @click="onDeleteImg"/>
					<img :src="imageUrl"/>
				</dd>
			</dl>
		</div>
		<div class="feedback_button">
			<van-button round type="cyan" @click="onSubmit">提交反馈</van-button>
		</div>
	</section>
</template>
<script >
	import {Field, Cell, CellGroup,Button, Icon, Toast,Uploader,Loading } from 'vant'
	// import {uploadFile} from "../../api/common";
	// import {saveOpinion} from "../../api/user";

    export default {
	components: {
		[Field.name]: Field,
		[Cell.name]: Cell,
		[CellGroup.name]: CellGroup,
		[Button.name]: Button,
		[Icon.name]: Icon,
		[Toast.name]: Toast,
		[Uploader.name]: Uploader,
		[Loading.name]: Loading,
	},
	data() {
		return {
			feedMessage:'',
            imageUrl:'',
			messageLen:0,
			maxSize:1024*1024*10,
			isLoading:false
		}
	},
	watch:{
        feedMessage:function (val,oldVal) {
			this.messageLen = val.length;
			if(this.messageLen > 140){
			    this.feedMessage = oldVal;
			}
        }
	},
	methods: {
//         onDeleteImg(){
//             this.imageUrl = '';
// 		},
//         overSize(){
//           Toast({message:"图片太大!",duration:1200});
// 		},
//         async onRead(file){
//             this.isLoading = true;
// 			let fd = new FormData();
// 			fd.append('file',file.file);
// 			let resp = await uploadFile(fd);
// 			if(this.qUtil.validResp(resp)){
//                 this.isLoading = false;
// 				this.imageUrl = resp.data;
// 			}
// 			console.log("src_image",resp.data);
// 		},
//         async onSubmit(){
// 			let resp = await saveOpinion({content:this.feedMessage,imageUrl:this.imageUrl});
// 			if(this.qUtil.validResp(resp)){
// 			    Toast.success({message:"提交成功!",duration:1200});
// 			    this.$router.push({name:'UserIndex'});
// 			}else{
//                 Toast({message:"提交失败!",duration:1200});
// 			}
// 		},
	},

}</script>
<style>
.feedback{
	min-height: 100%;
}
.feedback .feedback_input{
	width: 100%;
	height: auto;
	overflow:hidden;
	background: #fff;
	position: relative;
	padding-bottom:1rem;
}
.feedback .feedback_input .num{
	position: absolute;
	z-index: 1;
	right: 0.75rem;
	bottom: 0.75rem;
	color: #ccc;
	font-size: 0.9rem;
}
.feedback .feedback_input .van-field .van-field__control{
	font-size: 0.9rem;
}
.feedback .feedback_uploadimg{
	height: auto;
	overflow:hidden;
	background: #fff;
	padding:0.5rem 1rem;
	text-align: left;
}
.feedback .feedback_uploadimg .tit{
	height:2rem;
	line-height: 2.5rem;
}
.feedback .feedback_uploadimg .tit span{
	float: right;
	font-size: 0.9rem;
	color: #999;
}
.feedback .feedback_uploadimg .tit h3{
	font-size: 1rem;
	font-weight: normal;
}
.feedback .feedback_uploadimg .uploadBox{
	margin: 1rem 0;
}
.feedback .feedback_button{
	margin: 2rem;
}
.feedback .feedback_button .van-button{
	width: 100%;
}
</style>