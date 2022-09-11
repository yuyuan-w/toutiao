import request from '@/utils/request'

/**
 * 获取推荐文章列表
 * @param {String | Number} id 频道ID
 * @param {Number} timestamp  时间戳，请求新的推荐数据传当前的时间戳，请求历史推荐传指定的时间戳
 * @returns
 */
export const getArticles = (id, timestamp) => {
  return request({
    url: '/v1_0/articles',
    params: {
      channel_id: id,
      timestamp
    }
  })
}
