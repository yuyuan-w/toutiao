import request from '@/utils/request'

/**
 * 获取用户频道
 * @returns promise
 */
export const getChannelAPI = () => {
  return request({
    url: '/v1_0/user/channels'
  })
}

/**
 * 获取所有用户频道
 * @returns promise
 */
export const getAllChannelAPI = () => {
  return request({
    url: '/v1_0/channels'
  })
}

/**
 * 删除频道
 * @param {String | Number} id 频道ID
 * @returns promise
 */
export const delChannelAPI = (id) => {
  return request({
    url: `/v1_0/user/channels/${id}`,
    method: 'DELETE'
  })
}

/**
 * 新增频道
 * @param {String | Number} id 新增频道ID
 * @param {Number} seq 新增频道的索引值
 * @returns primise
 */
export const addChannelAPI = (id, seq) => {
  return request({
    url: '/v1_0/user/channels/',
    method: 'PATCH',
    data: {
      channels: [{ id, seq }]
    }
  })
}
