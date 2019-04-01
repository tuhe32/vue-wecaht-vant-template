import request from '@/utils/request'

export function getIndexList(data) {
  return request({
    url: '/weixin/index/info',
    data:data
  })
}
export function getJssdk(data) {
  return request({
    url: '/weixin/index/jssdk',
    data:data
  })
}