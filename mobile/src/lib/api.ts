import axios from 'axios'

export const api = axios.create({
  // ip local no momento
  baseURL: 'http://192.168.2.113:3333',
})
