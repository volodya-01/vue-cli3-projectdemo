import axios from 'axios';
import router from '../router';
import 'element-ui/lib/theme-chalk/index.css'
import {
  Loading,
  Message
} from 'element-ui'
var loadinginstace
// axios 配置
axios.defaults.timeout = 8000;
/* axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5cb173847aab7f78650d20c4'; */
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // element ui Loading方法
    loadinginstace = Loading.service({
      fullscreen: true,
      background: "rgba(0, 0, 0, 0.8)"
    })
     if (localStorage.token) { //判断token是否存在
       config.headers.Authorization = localStorage.token; //将token设置成请求头

     }
    console.log("%cconfig返回的信息%c", "font-size:36px;font-weight:blod;color:red", "", config);
    return config;
  },
  err => {
    /* loadinginstace.close() */
    Message.error({
      message: '加载超时'
    })
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    Message.success('登录成功')
    loadinginstace.close()
    if (response.data.error === 999) {
      router.replace('/');
      console.log("token过期");
    }
    return response;
  },
  error => {
    loadinginstace.close()
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '错误请求'
          break;
        case 401:
          error.message = '未授权，请重新登录'
          break;
        case 403:
          error.message = '登录过期，请重新登录'
          // 清除token
         /*  localStorage.removeItem('token'); */
          break;
        case 404:
          error.message = '请求错误,未找到该资源'
          break;
        case 405:
          error.message = '请求方法未允许'
          break;
        case 408:
          error.message = '请求超时'
          break;
        case 500:
          error.message = '服务器端出错'
          break;
        case 501:
          error.message = '网络未实现'
          break;
        case 502:
          error.message = '网络错误'
          break;
        case 503:
          error.message = '服务不可用'
          break;
        case 504:
          error.message = '网络超时'
          break;
        case 505:
          error.message = 'http版本不支持该请求'
          break;
        default:
          error.message = `连接错误${error.response.status}`
      }
    } else {
      error.message = "连接到服务器失败"
    }
    Message.error(error.message)
   
    return Promise.reject(error);
  }
);
export default axios;
