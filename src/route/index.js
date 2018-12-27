import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    routes: [{
            path: "/",
            name: 'index',
            component: resolve => require(["../views/front/index"], resolve),
            meta: {
                title: '首页'
            },
            children: []
        },
        {
            path: "/detail",
            name: 'detail',
            component: resolve => require(["../views/front/detail"], resolve),
            meta: {
                title: '详情',
                // requireAuth: true
            },
            children: []
        },
        {
            path: "/admin",
            name: 'admin_index',
            component: resolve => require(["../views/admin/index"], resolve),
            meta: {
                title: '后台admin首页'
            },
            children: []
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;