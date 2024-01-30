import axios from 'axios'
export const Conn = axios.create({
    baseURL : "http://localhost:3333"
})