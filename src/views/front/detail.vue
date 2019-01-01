<template>
  <div v-cloak>
      <mu-appbar style="width: 100%;" color="primary">
        <mu-button icon slot="left" onclick="window.history.back()">
          <mu-icon value="arrow_back"></mu-icon>
        </mu-button>
        <span v-text="testData.title"></span>
      </mu-appbar>
      <p class="time pt70">{{testData.time | formatTime}}</p>
      <div class="ql-container ql-snow" style="border: none;height: auto;">
        <div class="ql-editor" v-html="testData.content"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      testData: {
        time: ''
      }
    }
  },
  methods: {

  },
  created() {
    this.$progress.start();
    window.scrollTo(0, 0);
  },
  mounted() {
    let param = this.$route.query;
    this.$axios.post('/list/detail', param).then((_data)=> {
        this.$progress.done();
        this.testData = _data.data;
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
</style>
