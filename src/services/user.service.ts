import { AxiosResponse } from 'axios'
import APIService from './base.service'

export default class UserService {
  static getUsers(): Promise<AxiosResponse> {
    return APIService.get('/users')
  }
}
