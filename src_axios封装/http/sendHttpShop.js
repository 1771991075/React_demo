import axios from "axios";
axios.defaults.baseURL = 'http://apif.java.crmeb.net';
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
        headers:header ?header:defaultHeader
    })
}

export default sendHttp;