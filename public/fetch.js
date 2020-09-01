// public/fetch.js

import axios from "axios";
import Vue from 'vue';
import { Message } from 'element-ui';
Vue.component(Message.name, Message);
Vue.prototype.$message = Message;
// baseurl 就是 在 .env.development 和 .env.development.local 中 预设的域名
let baseurl =
    process.env.VUE_APP_TITLE === "local" // 通过判断 当前的环境变量 得知 项目 运行在 本地 或者 线上
        ?
        process.env.VUE_APP_PROXY // 本地 使用代理 => '/dev' 此处在 vue.config.js 中代理请求处有配置
        :
        process.env.VUE_APP_URL; // 线上 使用域名 => ''
axios.defaults.baseURL = baseurl; // 将 baseurl 设置为 axios 的默认 baseURL
/**
 * 下面 是 axios 封装的 请求
 * 采用 es6 promise 和 async await 方式
 */
export default async (url = "", data = {}, type = "POST", status) => {
    type = type.toUpperCase();
    const token = StorageService.getToken()
  
    var headers = {}
    if (status == 0) {
        headers = {}
    }
    else if (status == 1) {
        if (token == null || token == '') {
            StaticService.logout();
        }
        headers = {
            headers: {
                'token': token
            }
        }
    } else if (status == 2) {
        if (token == null || token == '') {
            StaticService.logout();
        }
        headers = {
            headers: {
                'token': token,
                'Content-Type': 'application/json;application/octet-stream;text/csv;charset=utf-8'
            },
            responseType: 'arraybuffer',
        }
    }
    if (type == "GET") {
        //请求参数 拼接字符串
        let dataStr = "";
        Object.keys(data).forEach(key => {
            dataStr += key + "=" + data[key] + "&";
        });
        if (dataStr !== "") {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf("&"));
            url = url + "?" + dataStr;
        }
        return new Promise((resolve, reject) => {
            axios
                .get(url, headers)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
    /**
     * post 请求
     */

    if (type == "POST") {
        return new Promise((resolve, reject) => {
            //   data = qs.stringify(data);
            axios
                .post(url, data, headers)
                .then(res => {
					
                    const contentType = res.headers['content-type']
                    if (contentType.indexOf('application/octet-stream') !== -1) {
                        // 有文件下载
                        resolve(res)
                    } else {
                        resolve(res.data);
                    }
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
    /**
     * put 请求
     */
    if (type == "PUT") {
        return new Promise((resolve, reject) => {
            //   data = qs.stringify(data);
            axios
                .put(url, data, headers)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
}
