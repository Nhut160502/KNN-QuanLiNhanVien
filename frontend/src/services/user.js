import axios from 'src/utils/axios'

const path = '/user'

export const getListUsers = () => {
  return axios.get(path)
}

export const showUser = (id) => {
  return axios.get(`${path}/${id}`)
}

export const storeUser = (data) => {
  return axios.post(path, data, {
    headers: {
      'Content-Type': 'application/form-data',
    },
  })
}

export const updateUser = (data) => {
  return axios.put(path, data, {
    headers: {
      'Content-Type': 'application/form-data',
    },
  })
}

export const destroyUser = (id) => {
  return axios.delete(`${path}/${id}`)
}
