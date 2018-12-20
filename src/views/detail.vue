<template>
  <div>
      <mu-appbar style="width: 100%;" color="primary">
        <mu-button icon slot="left" onclick="window.history.back()">
          <mu-icon value="arrow_back"></mu-icon>
        </mu-button>
        <span>Detail</span>
      </mu-appbar>
      <span>Details...</span>
  </div>
</template>

<script>
export default {
  name: "login",
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
