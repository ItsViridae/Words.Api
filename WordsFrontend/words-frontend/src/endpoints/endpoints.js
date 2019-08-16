const baseURL = 'https://localhost:44311/api'
const API_ENDPOINTS = Object.freeze({
    ///frozen object does -> if const is set an object, it can be changed! type safety used here
    getAllWords: `${baseURL}/Words`,
    postWord: `${baseURL}/Words`,



    getAllNumbers:`${baseURL}/Numbers`
})
export default API_ENDPOINTS