import { baseURL } from '../config'
import axios from 'axios'
import reqFilter from './reqFilter'
import resFilter from './resFilter'

export default async function fetch (option) {
  let instance = axios.create({
    baseURL
  })
  instance.interceptors.request.use(reqFilter.interceptors, reqFilter.errors)
  instance.interceptors.response.use(resFilter.interceptors, resFilter.errors)
  let res = await instance.request(option)

  return res
}
