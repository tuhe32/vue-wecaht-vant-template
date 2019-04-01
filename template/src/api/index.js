import request from '@/utils/request'



export function saveOne(data) {
  return request({
    url: '/students',
    data:data,
    method:'POST'
  })
}

export function joinTeam(data) {
    return request({
        url: '/students/joinTeam',
        data:data,
        method:'POST'
    })
}

export function findList(params) {
    return request({
        url: '/students/findStudnetsLabels',
        params:params,
        method:'GET'
    })
}

export function findDetail(id) {
    return request({
        url: '/students/'+id,
        method:'GET'
    })
}

export function saveVisit(data) {
    return request({
        url: '/channelProvider/saveVisit',
        data:data,
        method:'POST'
    })
}


