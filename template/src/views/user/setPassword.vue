<template>
	<section class="container validate">
		<div class="validate_con">
			<van-cell-group>
			  	<van-field v-model="userPhone" left-icon="shouji" type="number" center clearable placeholder="请输入手机号" />
			  	<van-field v-model="password" left-icon="mima"  type="password" center clearable placeholder="请设置新密码" />
			  	<van-field v-model="newPassword" left-icon="mima"  type="password" center clearable placeholder="请确认新密码" />
			  	<van-field v-model="validateCode" left-icon="yanzhengma" center clearable  placeholder="请输入验证码">
					<van-button v-if="time == 60" slot="button" size="small" round  type="cyan" plain @click="getCode" :disabled="isGetCode">获 取</van-button>
					<van-button v-else slot="button" size="small" round  type="gray" plain >重新发送{{time}}s</van-button>
	  			</van-field>
			</van-cell-group>
			<van-button round type="cyan" @click="onSubmit">确 认</van-button>
			<p style="font-size: 0.8rem;color:#2BB89A; margin-top: 0.8rem;" @click="gotoHome">返回登陆</p>
		</div>
	</section>
</template>
<script >
	import {Field, Cell, CellGroup, Button, Icon, Toast} from 'vant'
	import  valid from '../../utils/validate'
	// import {savePassword} from "../../api/user";
	// import {sendValidateCode} from "../../api/common";

    export default {
		components: {
		[Field.name]: Field,
		[Cell.name]: Cell,
		[CellGroup.name]: CellGroup,
		[Button.name]: Button,
		[Icon.name]: Icon,
		[Toast.name]: Toast,
		},
		data() {
			return {
				userPhone:'',
				validateCode:'',
				password:'',
				newPassword:'',
				phone:'',
                time:60,
                isGetCode:true,
			}
		},
        watch:{
            userPhone:function (val) {
                this.isGetCode = true;
				if(valid.isNotBlank(val) && valid.tel(val)){
					this.isGetCode = false;
				}
            },
        },
		methods: {
			gotoHome(){
				this.$router.push({name: 'Home'})
			},
            timer(){
                let _this = this;
                let t = setInterval(function () {
                    _this.time --;
                    if(_this.time == 0){
                        clearInterval(t);
                        _this.time = 60;
                    }
                },1000);
            },
			async getCode(){
                if(valid.isNotBlank(this.phone) && this.phone != this.userPhone){
                    Toast({message:"请输入绑定的手机号!",duration:1200});
                    return false;
                }
                this.timer();
				// await sendValidateCode({phone:this.userPhone});
			},
			async onSubmit() {
				if(!valid.isNotBlank(this.userPhone)){
					Toast({message:"请输入手机号!",duration:1200});
					return false;
				}
				if(!valid.tel(this.userPhone)){
					Toast({message:"请输入正确的手机号!",duration:1200});
					return false;
				}
				if(valid.isNotBlank(this.phone) && this.phone != this.userPhone){
					Toast({message:"请输入绑定的手机号!",duration:1200});
					return false;
				}
				if(valid.isBlankStr(this.validateCode)){
					Toast({message:"请输入验证码!",duration:1200});
					return false;
				}
				if(valid.isBlankStr(this.password)){
					Toast({message:"请输入密码!",duration:1200});
					return false;
				}
				if(valid.isBlankStr(this.newPassword)){
					Toast({message:"请输入确认密码!",duration:1200});
					return false;
				}
				if(this.password != this.newPassword ){
					Toast({message:"两次密码输入不一致!",duration:1200});
					return false;
				}
				let params = {
					phone:this.userPhone,
					code:this.validateCode,
					password:this.password,
				};
// 				let resp = await savePassword(params);
// 				if(this.qUtil.validResp(resp)){
// 					Toast.success({message:'保存成功!',duration:1200});
// 					this.$router.push({name:'UserIndex'});
// 				}else{
// 					Toast({message:resp.msg,duration:1200});
// 				}
			},
		},
		mounted(){
			// this.phone = this.$route.query.phone || '';
		},

	}
</script>
<style>
.validate{
	height: 100%;
	background: #fff;
	overflow: hidden;
}
.validate .validate_con{
	margin:20% 13%;
	text-align: center;
}
.validate .validate_con .van-cell-group{
}
.validate .validate_con .van-hairline--top-bottom::after{
	border: none;
}
.validate .validate_con .van-cell{
	padding-left: 0;
}
.validate .validate_con .van-cell .van-icon{
	font-size: 1.5rem;
	color: #2BB89A;
}
.validate .validate_con .van-cell::after {
    content: ' ';
    position: absolute;
    pointer-events: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    left: 0rem;
    right: 0;
    bottom: 0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    border-bottom: 0.0625rem solid #eee;
}
.validate .validate_con .van-button{
	width: 100%;
	margin:3rem 0 0 0;
}
.validate .validate_con .van-cell .van-button{
	width: 100%;
	font-size: 0.9rem !important;
	padding: 0 1rem;
	margin: 0;
}
</style>