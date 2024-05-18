import axios from 'src/utils/axios'

const path = '/salary'

export const getListSalaries = () => {
  return axios.get(path)
}

export const showSalary = (id) => {
  return axios.get(`${path}/${id}`)
}

export const storeSalary = (data) => {
  return axios.post(path, data)
}

export const updateSalary = (data) => {
  return axios.put(path, data)
}

export const destroySalary = (id) => {
  return axios.delete(`${path}/${id}`)
}
