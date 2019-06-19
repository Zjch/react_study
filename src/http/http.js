import axios from 'axios';

const http = {
    post: ''
}

// 创建一个axios实例
const createAxios = axios.create();

// 请求拦截
createAxios.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    console.log(config)
    return config; 
},(error) => {
    // 对请求错误做些什么
    console.log(error)
    return Promise.reject(error);
})

http.post = (url,params) => {
    return new Promise((resolve, reject) => {
        createAxios.post(url,{
            ...params
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}


export default http;