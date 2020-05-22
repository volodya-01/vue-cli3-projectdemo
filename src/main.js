import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import echarts from "echarts";
import vuescroll from "vuescroll";
import axios from './http/http'; //此处问http文件的路径
import moment from "moment";


Vue.prototype.$moment = moment;
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;

Vue.use(ElementUI);
Vue.use(vuescroll, {
  ops: {
    vuescroll: {
      mode: "native",
      sizeStrategy: "percent",
      detectResize: true,
    },
    scrollPanel: {
      initialScrollY: false,
      initialScrollX: false,
      scrollingX: false,
      scrollingY: true,
      speed: 300,
      easing: undefined,
      verticalNativeBarPos: "right",
    },
    rail: {
      background: "#01a99a",
      opacity: 0,
      size: "6px",
      specifyBorderRadius: false,
      gutterOfEnds: null,
      gutterOfSide: "2px",
      keepShow: false,
    },
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: false,
      keepShow: true,
      background: "#ddd",
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: false,
      size: "4px",
      disable: false,
    },
  }, // 在这里设置全局默认配置
});



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
