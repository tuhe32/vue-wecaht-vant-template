import wx from 'weixin-js-sdk'
import {getJssdk} from '@/api/weixin'
import qUtil from "@/utils/queryUtil";
// import axios from '@/components/config/http'

function initConfig(configParam) {
    getJssdk().then((response) => {
      if (qUtil.validResp(response)) {
        console.log('[initConfig]',response.data);
        wx.config(response.data)
        wxReady(configParam)
      }
    }).catch((err) => {
      console.log("err",err)
    })
}
function wxReady(configParam) {
  wx.ready(() => {
    console.log('wechat ready')
    wx.onMenuShareAppMessage({
      title: configParam.title, // 分享标题
      desc: configParam.desc,
      link: configParam.link,
      imgUrl: configParam.imgUrl
    })

    wx.onMenuShareTimeline({
      title: configParam.title, // 分享标题
      desc: configParam.desc,
      link: configParam.link,
      imgUrl: configParam.imgUrl
    })
  })
}
function initLocation() {
  let currentLocation = {};
  wx.ready(() => {
    console.log('wechat ready')
    wx.getLocation({
      type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
      success: function (res) {
        let latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        let longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        alert("经度"+longitude);
        currentLocation.latitude = latitude;
        currentLocation.longitude = longitude;
        return currentLocation;
      }
    });
  })
}
export default {initConfig,initLocation,wxReady};
