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
    <mu-paper :z-depth="1" class="demo-list-wrap">
      <mu-list textline="three-line">
        <mu-sub-header>今天</mu-sub-header>
        <mu-list-item button to="detail">
          <mu-list-item-content>
            <mu-list-item-title>这个周末一起吃饭么?</mu-list-item-title>
            <mu-list-item-sub-title>
              周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
            </mu-list-item-sub-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button to="detail">
          <mu-list-item-content>
            <mu-list-item-title>Alex Qin</mu-list-item-title>
            <mu-list-item-sub-title>
              我们去看电影，最近有部烂片上映，又有吐槽的了
            </mu-list-item-sub-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button to="detail">
          <mu-list-item-content>
            <mu-list-item-title>LOL</mu-list-item-title>
            <mu-list-item-sub-title>
              周末一起 LOL
            </mu-list-item-sub-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button to="detail">
          <mu-list-item-content>
            <mu-list-item-title>LOL</mu-list-item-title>
            <mu-list-item-sub-title>
              实在编不下去，这就是个demo
            </mu-list-item-sub-title>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
    </mu-paper>
    <p>测试node接口数据---{{JSON.stringify(testData)}}</p>
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
      testData: {}
    }
  },
  components: {

  },
  methods: {

  },
  created() {
    this.$progress.start();
  },
  mounted() {
    this.$progress.done();
    this.$axios.post('/test').then((_data)=> {
        this.testData = _data;
    });
  }
};
</script>

<style scoped>

</style>
