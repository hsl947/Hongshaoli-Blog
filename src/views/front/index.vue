<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="open = !open">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      <span>Shaoli's Blog</span>
    </mu-appbar>
    <mu-load-more class="pt70" :loading="loading" @load="load" :loaded-all="finished">
      <mu-paper :z-depth="1" class="demo-list-wrap" ref="container">
        <mu-list textline="three-line" v-for="item in testData" :key="item._id">
          <mu-sub-header>{{item.time | formatTime}}</mu-sub-header>
          <mu-list-item button @click="toDetail(item._id)">
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
        <mu-list-item button target="_blank" href="https://www.hongshaoli.cn/">
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
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      open: false,
      testData: [],
      loading: false,
      finished: false,
      formData: {
        skip: 0,
        limit: 20
      }
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
          this.loading = false;
      });
    },
    load () {
      this.formData.skip += this.formData.limit,
      this.loading = true;
      this.getData();
    },
    toDetail(id) {
      this.$router.push({
        name: 'detail',
        params: {_id: id}
      });
    }
  },
  created() {
    
  },
  mounted() {
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

    /** 
    const ws = new WebSocket("ws://127.0.0.1:8888/");
    ws.onopen = ()=> {
        console.log("Opened");
        ws.send("I'm client");
    };
    ws.onmessage = (evt)=> {
        console.log('----------------');
        console.log(evt.data);
    };
    ws.onclose = ()=> {
        console.log("Closed");
    };
    ws.onerror = (err)=> {
        console.log(err);
    };
    **/
  }
};
</script>

<style scoped> 
  .mu-paper{
    background: none;
  }
  .mu-drawer{
    background: #fff;
  }
  .mu-list{
    padding-bottom: 0;
    margin-bottom: 8px;
    background: #fff;
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
