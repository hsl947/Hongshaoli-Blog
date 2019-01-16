import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
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
                title: '详情'
            },
            children: []
        },
        {
            path: "/admin",
            name: 'admin_index',
            component: resolve => require(["../views/admin/index"], resolve),
            meta: {
                title: '后台admin首页',
                requireAuth: true
            },
            children: []
        },
        {
            path: "/add",
            name: 'blog_add',
            component: resolve => require(["../views/admin/add"], resolve),
            meta: {
                title: '添加',
                requireAuth: true
            }
        },
        {
            path: "/edit",
            name: 'blog_edit',
            component: resolve => require(["../views/admin/edit"], resolve),
            meta: {
                title: '编辑',
                requireAuth: true
            }
        },
        {
            path: "/login",
            name: 'blog_login',
            component: resolve => require(["../views/admin/login"], resolve),
            meta: {
                title: '登录'
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    if (to.matched.some(r => r.meta.requireAuth)) {
        //这里的requireAuth为路由中定义的 meta:{requireAuth:true}，
        //意思为：该路由添加该字段，表示进入该路由需要登陆的
        if (store.state.admin_token) {
            next();
        } else {
            next({
                name: 'blog_login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next();
    }
});

export default router;