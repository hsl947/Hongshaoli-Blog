<template>
  <div v-cloak>
      <mu-appbar style="width: 100%;" color="primary">
        <mu-button icon slot="left" onclick="window.history.back()">
          <mu-icon value="arrow_back"></mu-icon>
        </mu-button>
        <span v-text="testData.title"></span>
      </mu-appbar>
      <p class="time pt70">{{testData.time | formatTime}} - 洪少利</p>
      <div class="ql-container ql-snow" style="border: none;height: auto;">
        <div class="ql-editor" v-html="testData.content"></div>
      </div>
      <div v-if="fullLoading" v-loading="true" data-mu-loading-overlay-color="rgba(255, 255, 255, 0.8)" style="height: 100%;position: fixed;left:0;right: 0;top: 0;bottom: 0;"></div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      testData: {
        time: ''
      },
      fullLoading: true
    }
  },
  methods: {

  },
  created() {
    this.$progress.start();
    window.scrollTo(0, 0);
  },
  mounted() {
    let param = this.$route.params;
    this.$axios.post('/list/detail', param).then((_data)=> {
        this.testData = _data.data;
        let timer = setTimeout(() => {
          this.$progress.done();
          this.fullLoading = false;
          clearTimeout(timer);
        }, 1000);
    });
  }
};
</script>

<style>
  .time{
    font-size: 16px;
    color: #999;
    line-height: 30px;
    padding: 10px;
    margin-top: 10px;
  }
  .ql-container.ql-snow{
    font-size: 16px;
    line-height: 28px;
  }
  .ql-snow .ql-editor pre.ql-syntax{
      font-family: 'Sailec Light', sans-serif;
  }
</style>
