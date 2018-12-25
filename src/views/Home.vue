<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="open = !open">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      <span>Shaoli's Blog</span>
      <mu-menu slot="right">
        <mu-button flat>MENU</mu-button>
        <mu-list slot="content">
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>Menu Item 1</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>Menu Item 2</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu>
    </mu-appbar>
    <!-- @refresh="refresh" :refreshing="refreshing" -->
    <mu-load-more :loading="loading" @load="load" :loaded-all="finished">
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
        <mu-list-item button>
          <mu-list-item-title>Menu Item 1</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Menu Item 2</mu-list-item-title>
        </mu-list-item>
        <mu-list-item  @click="open = false" button>
          <mu-list-item-title>Close</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
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
      }
    }
  },
  components: {

  },
  methods: {
    getData() {
      this.$axios.post('/test', this.formData).then((_data)=> {
          if(_data.data.length == 0){
            this.finished = true;
            return;
          }
          this.testData = this.testData.concat(_data.data);
          let timer = setTimeout(() => {
            this.$progress.done();
            this.loading = false;
            this.refreshing = false;
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
    this.getData();
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
</style>
