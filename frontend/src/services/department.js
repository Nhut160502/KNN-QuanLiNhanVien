import axios from 'src/utils/axios'

const path = '/department'

export const getListDepartment = () => {
  return axios.get(path)
}

export const showDepartment = (id) => {
  return axios.get(`${path}/${id}`)
}

export const storeDepartment = (data) => {
  return axios.post(path, data)
}

export const updateDepartment = (data) => {
  return axios.put(path, data)
}

export const destroyDepartment = (id) => {
  return axios.delete(`${path}/${id}`)
}
