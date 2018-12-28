<template>
  <div>
      <mu-container>
        <mu-button color="success">添加</mu-button>
        <mu-paper :z-depth="1">
          <mu-data-table stripe :columns="columns" :data="testData">
            <template slot-scope="scope">
              <td class="is-center">{{scope.$index+1}}</td>
              <td class="is-center">{{scope.row.title}}</td>
              <td class="is-center">{{scope.row.description}}</td>
              <td class="is-center">{{scope.row.time | formatTime}}</td>
              <td class="is-center"><mu-button color="success">编辑</mu-button></td>
            </template>
          </mu-data-table>
        </mu-paper>    
        <mu-flex justify-content="center">
          <mu-pagination raised circle :total="total" :current.sync="formData.page" @change="toPage"></mu-pagination>
        </mu-flex>
      </mu-container>
  </div>
</template>

<script>
export default {
  name: "admin_index",
  components: {
    
  },
  data() {
    return {
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
    bottom: 30px;
  }
  .container{
    padding-bottom: 50px;
  }
  .mu-button{
    margin: 10px 0;
  }
</style>
