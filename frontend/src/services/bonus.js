import axios from 'src/utils/axios'

const path = '/bonus'

export const getListBonus = () => {
  return axios.get(path)
}

export const showBonus = (id) => {
  return axios.get(`${path}/${id}`)
}

export const storeBonus = (data) => {
  return axios.post(path, data)
}

export const updateBonus = (data) => {
  return axios.put(path, data)
}

export const destroyBonus = (id) => {
  return axios.delete(`${path}/${id}`)
}
