<template>
  <div id="app">
    <transition :name="transitionName">
        <router-view class="router"></router-view>
    </transition>
    <pl-lazy time="3000">
        <canvas-nest></canvas-nest>
    </pl-lazy>
  </div>
</template>

<script>
import plLazy from '@/components/lazy'
import canvasNest from '@/components/canvas-nest'
export default {
  name: "app",
  data() {
    return {
      transitionName: 'fade'
    }
  },
  components: {
    plLazy,
    canvasNest: resolve => {require(['@/components/canvas-nest'], resolve)}
  },
  created() {},
  mounted() {},
  methods: {},
  watch:{}
};

 // 友盟统计添加
const script = document.createElement("script");
script.src = "https://s23.cnzz.com/z_stat.php?id=1276871081&web_id=1276871081";
script.language = "JavaScript";
document.body.appendChild(script);
</script>

<style lang="scss">
@import "assets/css/style.css";
@import "assets/css/index.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.router{
  max-width: 750px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition:  all cubic-bezier(.55,0,.1,1)   .3s ;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
