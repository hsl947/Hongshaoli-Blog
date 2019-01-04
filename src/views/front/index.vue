<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="open = !open">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      <span>Shaoli's Blog</span>
    </mu-appbar>
    <!-- @refresh="refresh" :refreshing="refreshing" -->
    <mu-load-more class="pt70" :loading="loading" @load="load" :loaded-all="finished">
      <mu-paper :z-depth="1" class="demo-list-wrap" ref="container">
        <mu-list textline="three-line">
          <mu-sub-header>今天</mu-sub-header>
          <mu-list-item button :to="'detail?_id='+item._id" v-for="item in testData" :key="item._id">
            <mu-list-item-content>
              <mu-list-item-title v-text="item.title"></mu-list-item-title>
              <mu-list-item-sub-title v-text="item.description"></mu-list-item-sub-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
        <p class="no-data" v-if="finished">- 我也是有底线的 -</p>
      </mu-paper>
    </mu-load-more>
    <mu-drawer :open.sync="open" :docked="false" :left="true">
      <mu-list>
        <mu-list-item button :to="'/'">
          <mu-list-item-title>首页</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :to="'/admin'">
          <mu-list-item-title>Admin后台首页</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :to="'/#'">
          <mu-list-item-title>关于我</mu-list-item-title>
        </mu-list-item>
        <mu-list-item  @click="open = false" button>
          <mu-list-item-title>Close</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
    <mu-button id="toTop" button class="mu-button mu-fab-button mu-inverse">
      <div class="mu-button-wrapper">
        <div class="mu-ripple-wrapper"></div>
        <i class="mu-icon  material-icons" style="user-select: none;">arrow_upward</i>
      </div>
    </mu-button>
    <div v-if="fullLoading" v-loading="true" data-mu-loading-overlay-color="rgba(255, 255, 255, 0.8)" style="height: 100%;position: fixed;left:0;right: 0;top: 0;bottom: 0;"></div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      open: false,
      testData: [],
      refreshing: false,
      loading: false,
      finished: false,
      formData: {
        skip: 0,
        limit: 20
      },
      fullLoading: true
    }
  },
  components: {

  },
  methods: {
    getData() {
      this.$axios.post('/list', this.formData).then((_data)=> {
          if(_data.data.length == 0){
            this.finished = true;
            return;
          }
          this.testData = this.testData.concat(_data.data);
          let timer = setTimeout(() => {
            this.$progress.done();
            this.loading = false;
            this.refreshing = false;
            this.fullLoading = false;
            clearTimeout(timer);
          }, 1000);
      });
    },
    refresh () {
      this.testData = [];
      this.formData = {
        skip: 0,
        limit: 20
      };
      this.finished = false;
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      this.getData();
    },
    load () {
      this.formData.skip += this.formData.limit,
      this.loading = true;
      this.getData();
    }
  },
  created() {
    this.$progress.start();
  },
  mounted() {
    // this.fullLoading.close();
    this.getData();

    var timer1, timer2; 
    var toTop = document.getElementById("toTop");
    window.onscroll = function () { 
      if (timer1) clearTimeout(timer1);
      timer1 = setTimeout(function() {
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          if (scrollTop > 300) { 
            toTop.style.bottom = "16px"; 
          } 
          else { 
            toTop.style.bottom = "-80px"; 
          } 
      }, 300);
    }
    toTop.onclick = function(){
      if (timer2) clearTimeout(timer2);
      timer2 = setTimeout(function() {
          window.scrollTo(0, 0);
          clearInterval(timer1);
      }, 50);
    }
  }
};
</script>

<style scoped>
  .mu-list{
    padding-bottom: 0;
  }
  .mu-list>li{
    border-bottom: solid 1px rgba(0,0,0,.12);
  }
  .no-data{
    color: #999;
    font-size: 14px;
    text-align: center;
    padding: 10px 0;
  }
  #toTop{
    user-select: none; 
    outline: none; 
    -webkit-appearance: none; 
    background-color: #2196f3; 
    position: fixed; 
    right: 16px; 
    bottom: -80px; 
    z-index: 101;
    min-width:56px;
    transition: all .3s;
  }
</style>
