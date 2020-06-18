import fly from '@/utils/request'

export function programFetch() {
  return fly.request({
    url: '/binfen/program/fetch/selected',
    method: 'get',
  })
}
export function programitemFetch(data) {
  return fly.request({
    url: '/binfen/programitem/fetch',
    method: 'get',
    params: data,
  })
}
