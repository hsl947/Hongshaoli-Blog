import Vue from "vue";
import App from "./App.vue";
import router from "./route";
import axios from './utils/axios';
import store from "./store";

import '@/assets/js/highlight/monokai-sublime.min.css'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

import 'muse-ui/lib/styles/base.less';
import 'muse-ui/lib/styles/theme.less';
import {
    AppBar,
    Button,
    Divider,
    Drawer,
    Icon,
    List,
    LoadMore,
    Paper,
    SubHeader,
    Progress,
    Helpers,
    Snackbar
} from 'muse-ui';

Vue.use(AppBar);
Vue.use(Button);
Vue.use(Divider);
Vue.use(Drawer);
Vue.use(Icon);
Vue.use(List);
Vue.use(LoadMore);
Vue.use(Paper);
Vue.use(SubHeader);
Vue.use(Progress);
Vue.use(Helpers);
Vue.use(Snackbar);

import Toast from 'muse-ui-toast';
Vue.use(Toast);

import 'muse-ui-message/dist/muse-ui-message.css';
import Message from 'muse-ui-message';
Vue.use(Message, { width: 300 });

import FastClick from "fastclick";
// 去除300ms延迟
document.addEventListener(
    "DOMContentLoaded",
    function() {
        FastClick.attach(document.body);
    },
    false
);

//如果是开发环境，启用组件
if (process.env.NODE_ENV == "development") {
    //针对手机网页的前端开发者调试面板
    const VConsole = require("vconsole/dist/vconsole.min.js");
    const vConsole = new VConsole();
}

Vue.config.productionTip = false;

Vue.prototype.$store = store;
Vue.prototype.$axios = axios;
Vue.prototype.$extend = function(target, options) {
    for (name in options) {
        target[name] = options[name];
    }
    return target;
};

function isGt10(n) {
    return n < 10 ? '0' + n : n;
}
Vue.filter('formatTime', (input) => {
    var d = new Date(input);
    var year = d.getFullYear();
    var month = isGt10(d.getMonth() + 1);
    var day = isGt10(d.getDate());
    var hour = isGt10(d.getHours());
    var minutes = isGt10(d.getMinutes());
    var seconds = isGt10(d.getSeconds());
    if (year) {
        return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes;
        // return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
    } else {
        return '';
    }

})


import MetaInfo from 'vue-meta-info'
Vue.use(MetaInfo)

new Vue({
    store,
    router,
    render: h => h(App)
    //prerender-spa-plugin
    // ,mounted() {
    //     document.dispatchEvent(new Event('render-event'))
    // }
}).$mount("#app");