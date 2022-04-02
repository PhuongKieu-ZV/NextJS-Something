import axios from 'axios'
import qs from 'qs'

const APIService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
  headers: {
    'Content-Type': 'application/json',
  },
})

const regexUsedForCheckPathNeedToAttachCognitoInfo = [
  /^(\/)?users/,
  /^(\/)?auth/,
  /^(\/)?tenant-address/,
  /^(\/)?user-address/,
  /^(\/)?orders/,
]

APIService.interceptors.request.use(
  (request) => {
    if (!request.params) {
      request.params = {}
    }
    request.baseURL = process.env.NEXT_PUBLIC_BACKEND_API
    request.paramsSerializer = (params) => qs.stringify(params)
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for API calls
APIService.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default APIService
