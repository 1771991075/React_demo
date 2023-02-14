import axios from "axios";
// 设置全局默认配置baseURL
axios.defaults.baseURL = 'http://106.12.150.223:8090/api/private/v1';
axios.defaults.timeout = 6000;
let defaultHeader = {
    "content-type":"application/json"
}
let sendHttp = (url,method,data=null,header=null)=>{
    return axios({
        url:url,
        method:method,
        params:method === 'get' ? data : null,
        data:method === 'post' ? data : null,
        headers:header ? header:defaultHeader
    })
}
export default sendHttp;

/* 
    headers请求头： content-type
    application/json  请求参数为普通对象(请求载荷)
    application/x-www-form-urlencoded 请求参数为 (表单数据)
    multipart/form-data 用于上传文件请求头(二进制)
*/