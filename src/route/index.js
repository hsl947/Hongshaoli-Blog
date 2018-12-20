import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: 'index',
      component: resolve => require(["../views/Home"], resolve),
      meta: {
        index: 0, //页面的深度，来判断使用的过渡动画
        title: '首页'
      },
      children: []
    },
    {
      path: "/detail",
      name: 'detail',
      component: resolve => require(["../views/detail"], resolve),
      meta: {
        index: 1,
        title: '详情'
      },
      children: []
    },
    {
      path: "/register",
      name: 'register',
      component: resolve => require(["../views/register"], resolve),
      meta: {
        index: 2,
        title: '注册',
        // requireAuth: true
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
