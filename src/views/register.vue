<template>
  <div>
      <router-link :to="{ name: 'login'}">登录</router-link>
      <router-link :to="{ name: 'index'}">主页</router-link>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {

    }
  },
  methods: {

  },
  created() {
    this.$progress.start();
  },
  mounted() {
    this.$progress.done();
  }
};
</script>

<style scoped>

</style>
