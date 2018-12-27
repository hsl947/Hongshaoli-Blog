import Vue from "vue";
import App from "./App.vue";
import router from "./route";
import axios from './utils/axios';

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);

import 'muse-ui-progress/dist/muse-ui-progress.css';
import NProgress from 'muse-ui-progress';
Vue.use(NProgress, { color: 'deepOrange500' });

import Loading from 'muse-ui-loading';
Vue.use(Loading);

//如果是开发环境，启用组件
if (process.env.NODE_ENV == "development") {
    //针对手机网页的前端开发者调试面板
    const VConsole = require("vconsole/dist/vconsole.min.js");
    const vConsole = new VConsole();
}

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype.$extend = function(target, options) {
    for (name in options) {
        target[name] = options[name];
    }
    return target;
};

Vue.filter('formatTime', (input) => {
    var d = new Date(input);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
    var hour = d.getHours() < 10 ? '0' + d.getHours() : '' + d.getHours();
    var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : '' + d.getMinutes();
    var seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : '' + d.getSeconds();
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
})

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");