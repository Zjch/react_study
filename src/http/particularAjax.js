import axios from 'axios';
import { message } from 'antd'

import Loading from '../component/Loading.js'

// 获取验证码
let getCode = (data) => {
    return new Promise((resolve, reject) => {
        axios.post('/admin/Login/admin_send_verify',{
            ...data
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

// 登录
let LoginIn = (data) => {
    return new Promise((resolve, reject) => {
        axios.post('/admin/Login/admin_login',{
            ...data
        }).then(res => {
            console.log(res)
            if (res.data.error_code === '0000') {
                message.success(res.data.message);
            } else {
                message.error(res.data.message);
            }
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export{
    LoginIn, getCode
} 