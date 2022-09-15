import request from '@/utils/request'

/**
 * 获取搜索联想
 * @param {String} q  关键词
 * @returns promise
 */
export const getSuggestionAPI = (q) => {
  return request({
    url: '/v1_0/suggestion',
    params: {
      q
    }
  })
}

/**
 * 获取搜索结果
 * @param {Number} page  页数，不传默认为1
 * @param {Number} per_page  每页数量，不传每页数量由后端决定
 * @param {String} q 搜索关键词
 * @returns promise
 */
export const getResultAPI = (/* eslint-disable-line */ page, per_page, q) => {
  return request({
    url: '/v1_0/search',
    params: {
      page,
      per_page,
      q
    }
  })
}
