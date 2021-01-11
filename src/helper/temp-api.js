
import axios from 'axios';
export const getList = (data) => {
    return axios.request({
      url:'/xxxx',
      method: 'post',
      data: data
    })
  }
  export const del = (id) => axios.request.delete('/xxxx', {
    params: {
      id
    }
  })
  export const add = (data) => axios.request({
    url: '/xxxx',
    method: 'post',
    data: data
  })
  export const update = (data) => axios.request({
    url: '/xxxx',
    method: 'put',
    data: data
  })
  