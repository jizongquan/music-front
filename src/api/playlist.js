import request from '@/utils/request'
const baseURL = 'http://localhost:3000'

export function fetchList(params){
    return request({
        params,
        url: `${baseURL}/playlist/list`,
        method: 'get'
    })
}

export function fetchByid(params){
    return request({
        params,
        url: `${baseURL}/playlist/getByid`,
        method: 'get'
    })
}

export function update(params){
    return request({
        url: `${baseURL}/playlist/updatePlaylist`,
        method: 'post',
        data:{
            ...params
        }
    })
}

export function del(params){
    return request({
        url: `${baseURL}/playlist/del`,
        method: 'get',
        params,
    })
}
  