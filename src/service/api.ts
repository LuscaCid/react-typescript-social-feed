import axios from 'axios'
export const conn = axios.create({
    baseURL : "http://localhost:3333"
})
