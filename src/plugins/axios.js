import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://sandbox.core.api.brandme.la/api'
})

export default axiosInstance
