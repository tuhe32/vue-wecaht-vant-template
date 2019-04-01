import WeixinUtil from '../utils/weixinUtil'

//初始化微信分享
export const initWeixinShare = {
  methods: {
    //传递过来的图片地址需要处理后才能正常使用
    initWeixinShare(shareName,shareLogo,shareTitle) {
        let configParam = {};
        let currentUrl = document.location.href;
        let pp = currentUrl.split('#');
        let shareUrl = '';
        currentUrl = pp[0];
        console.log("currentUrl",currentUrl);
        console.log("shareName",shareName);
        console.log("shareLogo",shareLogo);
        console.log("shareTitle",shareTitle);
        // if(currentUrl.indexOf("?#") == -1) {
        //   let paths = currentUrl.split('#');
        //   let domain;
        //   if (paths[0].indexOf("?") > -1) {
        //     domain = paths[0].substring(0, paths[0].indexOf("?"));
        //   } else {
        //     domain = paths[0]
        //   }
        //   shareUrl = domain + "?#" + paths[1];
        // }else {
        //   shareUrl = currentUrl;
        // }
        shareUrl = currentUrl;
        if(shareTitle) {
          configParam.title = shareName;
          configParam.desc =  shareTitle;
        }else {
          configParam.title = shareName;
          configParam.desc =  shareName;
        }
//            console.log(domain+paths[1]);
        configParam.link = shareUrl;
        configParam.imgUrl = shareLogo;

        WeixinUtil.initConfig(configParam);
    }
  }
}