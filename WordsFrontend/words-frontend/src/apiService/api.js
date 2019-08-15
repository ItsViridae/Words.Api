import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://localhost:44311/api',
    //withCredentials: false
})

export default () => {
    return instance
}