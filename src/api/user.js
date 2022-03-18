import request from '@/utils/request'

export function login (data) {
  return request({
    url: '/supervice/login',
    method: 'post',
    data
  })
}
