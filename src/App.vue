<template>
  <div id="app">
    <transition :name="transitionName">
        <router-view class="router"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      transitionName: 'fade'
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  watch:{}
};
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
