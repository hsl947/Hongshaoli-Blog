<template>
  <div>
      <mu-appbar style="width: 100%;" color="primary">
        <mu-button icon slot="left" onclick="window.history.back()">
          <mu-icon value="arrow_back"></mu-icon>
        </mu-button>
        <span v-text="testData.title"></span>
      </mu-appbar>
      <p class="time">{{testData.time | formatTime}}</p>
      <p class="content" v-html="testData.content"></p>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      testData: {}
    }
  },
  filters: {
   formatTime: (input)=> {
       var d = new Date(input);
       var year = d.getFullYear();
       var month = d.getMonth() + 1;
       var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
       var hour = d.getHours() <10 ? '0' + d.getHours() : '' + d.getHours();
       var minutes = d.getMinutes() <10 ? '0' + d.getMinutes() : '' + d.getMinutes();
       var seconds = d.getSeconds() <10 ? '0' + d.getSeconds() : '' + d.getSeconds();
       return  year+ '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
    }
  },
  methods: {

  },
  created() {
    this.$progress.start();
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

<style scoped>
  .time{
    font-size: 16px;
    color: #999;
    line-height: 30px;
    padding: 10px;
  }
  .content{
    padding: 0 10px;
    font-size: 20px;
    line-height: 28px;
  }
</style>
