import request from '@/utils/request'

export function getListNoPage(params) {
  return request({
    url: '/vue-admin-template/table/getListNoPage',
    method: 'get',
    params
  })
}


export function getListPage(params) {
  return request({
    url: '/vue-admin-template/table/getListPage',
    method: 'get',
    params
  })
}

