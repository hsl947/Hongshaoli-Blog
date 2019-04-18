<template>
  <div v-cloak>
      <mu-appbar style="width: 100%;" color="primary">
        <mu-button icon slot="left" onclick="window.history.back()">
          <i class="iconfont icon-fanhui"></i>
        </mu-button>
        <span v-text="testData.title"></span>
      </mu-appbar>
      <p class="time pt70">{{testData.time | formatTime}} - 洪少利</p>
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
    window.scrollTo(0, 0);
  },
  mounted() {
    let param = this.$route.params;
    if(!param._id){
      let id = localStorage.getItem('blog_id');
      param._id = id;
    }
    this.$axios.post('/list/detail', param).then((_data)=> {
      this.testData = _data.data;
      document.title = this.testData.title;
      localStorage.setItem('blog_id', param._id);
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
