<template>
  <div>
      <!-- <mu-container> -->
        <mu-button @click="add" color="success">添加</mu-button>
        <mu-button @click="exit" color="error" class="fr">退出登录</mu-button>
        <mu-paper :z-depth="1">
          <mu-data-table stripe :columns="columns" :data="testData">
            <template slot-scope="scope">
              <td class="is-center">{{scope.$index+1}}</td>
              <td class="is-center">{{scope.row.title.substr(0, 14)}}</td>
              <td class="is-center">{{scope.row.description.substr(0, 14)}}</td>
              <td class="is-center">{{scope.row.time | formatTime}}</td>
              <td class="is-center"><mu-button color="success" @click="edit(scope.row._id)">编辑</mu-button></td>
            </template>
          </mu-data-table>
        </mu-paper> 
        <div class="justify-center">
          <mu-pagination raised :total="total" :page-size="formData.limit" :current.sync="formData.page" @change="toPage"></mu-pagination>
        </div>
      <!-- </mu-container> -->
  </div>
</template>

<script>
import '@/admin'
export default {
  name: "admin_index",
  components: {
    
  },
  data() {
    return {
      role: this.$store.state.admin_token,
      formData: {
        page: 1,
        limit: 8
      },
      columns: [
          { title: '序号', name: 'id', width: 80, align: 'center' },
          { title: '标题', name: 'title', align: 'center'},
          { title: '描述', name: 'description', align: 'center'},
          { title: '添加时间', name: 'time', width: 200, align: 'center'},
          { title: '操作', name: 'action', align: 'center'}
      ],
      testData: [],
      current: 1,
      total: 0
    }
  },
  filters: {
   
  },
  methods: {
    getData() {
      this.$axios.post('/admin/list', this.formData).then((_data)=> {
          if(!this.total) this.total = _data.count;
          this.testData = _data.data;
          let timer = setTimeout(() => {
            this.$progress.done();
            clearTimeout(timer);
          }, 1000);
      });
    },
    toPage(page){
      this.formData.page = page;
      this.testData = [];
      this.getData();
    },
    add() {
      if(this.role == 'guest'){
        this.$toast.error('访客模式不允许操作！');
        return;
      }
      this.$router.push({
        path: '/add'
      });
    },
    edit(id) {
      if(this.role == 'guest'){
        this.$toast.error('访客模式不允许操作！');
        return;
      }
      this.$router.push({
        path: '/edit',
        query: {_id: id}
      });
    },
    exit() {
      this.$toast.success('退出登录成功！');
      this.$store.commit('delToken');
      this.$router.replace({
        name: 'blog_login'
      });
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

<style>
  .mu-table th, .mu-table td{
    vertical-align: middle;
  }
  .mu-table th{
    background: #2196f3;
    color: #fff;
  }
  .mu-pagination{
    padding: 10px;
    position: fixed;
    bottom: 0;
  }
  .container{
    padding-bottom: 50px;
  }
  .mu-button{
    margin: 10px 0;
  }
  .mu-pagination-item.mu-button{
    overflow: hidden!important;
    -webkit-tap-highlight-color: transparent!important;
  }
  .justify-center{
    display: flex;
    justify-content: center;
  }
  .fr{
    float: right;
  }
  .fr::after{
    content: '';
    display: block;
    clear: both;
  }
</style>
