import axios from 'axios'
import qs from 'qs'
import Router from '../route'

//开发环境和生产环境不一样，开发环境需使用代理。
let baseUrl = process.env.NODE_ENV == 'development' ? '/api': '';
let configs = {
    timeout: 10000,
    api: '/api'
}

// 添加请求拦截器
axios.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 添加响应拦截器
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.resolve(error.response)
    }
)

function fetch(url, data, method){
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: configs.api+url,
            data: qs.stringify(data),
            timeout: configs.timeout,
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        })
        .catch((error) => {
           reject(error)
        })
    })
}
axios.post = function(url, data){
    let common_key = localStorage.getItem('common_key');//未登录时的key
    let token = localStorage.getItem('token');//登录后的key
    let auth_key = token?token:common_key;
    return fetch(url, data, 'post');
}

export default axios;
