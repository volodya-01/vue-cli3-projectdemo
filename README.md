# cqzfdd

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Vue-cli3.0项目下axios请求本地json文件的数据

### 1. Vue-cli3.0项目节省了很多文件，比如讲vue-cli3.0之前版本的build/dev-server.js配置放在了vue.config.js中。

### 2. 在Vue-cli3.0项目的vue.config.js或vue-cli3.0之前版本的build/dev-server.js中配置：

const express = require('express')
const app = express()
 
var singer = require('./src/db/data/singer.json')  //本地json文件数据
var recommend=require('./src/db/data/recommend.json')
 
var apiRoutes = express.Router();
app.use('/api',apiRoutes)
 
module.exports = {
   devServer:{      
	 before(app) {
       app.get('/api/singer', (req, res) => {
            res.json({              
                errno: 0,   // 这里是你的json内容
                data: singer
            })
        })
        app.get('/api/recommend', (req, res) => {
            res.json({              
                errno: 0,   // 这里是你的json内容
                data: recommend
            })
        })
    },
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null      //设置跨域，即将本文件内任何没有匹配到的静态文件，都指向跨域地址
   },
}
 
### 3. 再组件内使用axios调用本地json文件数据：

import axios from 'axios'
axios.get("/api/singer").then((data)=>{
	console.log(data)

})
### 注意：vue cli3.0 public 文件夹才是静态资源文件,修改了vue.config.js需要重启项目。

See [Configuration Reference](https://blog.csdn.net/weixin_39773631/article/details/92844592).

See [Configuration Reference](https://blog.csdn.net/qq_42231156/article/details/88225660).

See [Configuration Reference](https://blog.csdn.net/lfcss/article/details/81055847).



