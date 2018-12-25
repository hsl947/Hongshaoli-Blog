<template>
  <div>
      <mu-appbar style="width: 100%;" color="primary">
        <mu-button icon slot="left" onclick="window.history.back()">
          <mu-icon value="arrow_back"></mu-icon>
        </mu-button>
        <span v-text="testData.title"></span>
      </mu-appbar>
      <p class="time">{{testData.time | formatTime}}</p>
      <p class="content" v-text="testData.content"></p>
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
       var date = new Date(input);
       return  date.toLocaleString();
    }
  },
  methods: {

  },
  created() {
    this.$progress.start();
  },
  mounted() {
    let param = this.$route.query;
    this.$axios.post('/test', param).then((_data)=> {
        this.$progress.done();
        this.testData = _data.data[0];
    });
  }
};
</script>

<style scoped>
  .time{
    font-size: 16px;
    color: #999;
    line-height: 32px;
    padding: 0 10px;
  }
  .content{
    padding: 0 10px;
    font-size: 20px;
    line-height: 28px;
  }
</style>
