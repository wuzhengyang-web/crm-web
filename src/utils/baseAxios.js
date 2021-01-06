import axios from "axios";
import {Message} from "element-ui"
//统一设置BaseUrl
axios.defaults.baseURL = 'http://localhost:9000/';
// Add a request interceptor
axios.interceptors.request.use(function (config) {

    return config;
}, function (error) {

    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
   let {status,data,message} =response.data;
   if (status===20000){
       return data;
   }else {
       Message.error('错了哦，这是一条错误消息',message);
       //代码阻断掉 不往下执行
        return  Promise.reject(false);
   }

}, function (error) {

    return Promise.reject(error);
});

export default axios;
