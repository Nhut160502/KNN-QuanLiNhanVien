import axios from 'src/utils/axios'

const path = '/position'

export const getListPosition = () => {
  return axios.get(path)
}

export const showPosition = (id) => {
  return axios.get(`${path}/${id}`)
}

export const storePosition = (data) => {
  return axios.post(path, data)
}

export const updatePosition = (data) => {
  return axios.put(path, data)
}

export const destroyPosition = (id) => {
  return axios.delete(`${path}/${id}`)
}
