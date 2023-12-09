//  对axios配置
import store from "@/store";
import axios from 'axios'
import axiosRetry from 'axios-retry'
//axios.create返回值是一个新的axioss实例
// axios.create({})
const request =  axios.create({
    // baseURL:"http://111.229.247.11:3000/"
    baseURL:"http://127.0.0.1:3000"
})

axiosRetry(axios, { retries: 3 });

// 每一次请求都会触发的函数如何去设置（请求拦截器）
// 如何设置请求拦截器？
request.interceptors.request.use((config) => {
    // config是你每一次发起请求的详细配置（请求的地址、请求的路径、请求的参数...）
    // 在这个位置可以对请求配置作更改
    const cookie = store.state.auth.cookie;
    // console.log(store.state.auth);
    if (cookie) {
        ({
            get(){
                config.params || (config.params = {});
                config.params.cookie = cookie;
            },
            post(){
                config.data || (config.data = {});
                config.data.cookie = cookie;
            }
        })[config.method]();

        
    //   if (config.method === "post") {
    //     config.data || (config.data = {});
    //     config.data.cookie = cookie;
    //   }
    //   if (config.method === "get") {
    //     config.params || (config.params = {});
    //     config.params.cookie = cookie;
    //   }

    }
    
    return config;
  });
  
  window.request = request;


export default request
// 
// _aioxs 和 axios 99%功能一致

// window.axios = axios
// window._aioxs = _aioxs

// axios.get('/c') =>http://localhost:8080/c
// 基础请求地址baseURL