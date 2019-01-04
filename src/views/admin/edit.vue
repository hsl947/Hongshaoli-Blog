<template>
  <div class="container">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" onclick="window.history.back()">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      <span>编辑 - {{title}}</span>
    </mu-appbar>
    <mu-form ref="form" :model="formData" class="mu-demo-form pt70">
      <mu-form-item label="标题" help-text="" prop="title" :rules="titleRules">
        <mu-text-field v-model="formData.title" prop="title" placeholder="请输入标题"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="描述" prop="description" :rules="descriptionRules">
          <mu-text-field v-model="formData.description" prop="description" placeholder="请输入文章描述"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="内容" prop="content">
        <quill-editor v-model="formData.content"
            ref="myQuillEditor"
            :options="editorOption"
            @change="onEditorChange($event)">
        </quill-editor>
      </mu-form-item>
      <mu-form-item style="white-space: nowrap;">
        <mu-button color="primary" @click="submit">提交</mu-button>
        <mu-button @click="clear">重置</mu-button>
        <mu-button color="error" @click="del">删除</mu-button>
      </mu-form-item>
    </mu-form>
  </div>
</template>

<script>
import '@/admin'
import { quillEditor } from 'vue-quill-editor'
export default {
  name: "blog_add",
  components: {
    quillEditor
  },
  data() {
    return {
      editorOption: {
        placeholder: '请输入内容'
      },
      title: '',
      formData: {},
      titleRules: [
        { validate: (val) => !!val, message: '标题不能为空'}
      ],
      descriptionRules: [
        { validate: (val) => !!val, message: '描述不能为空'}
      ],
      contentRules: [
        { validate: (val) => !!val, message: '内容不能为空'}
      ]
    }
  },
  filters: {
   
  },
  methods: {
     submit () {
      this.$refs.form.validate().then((result) => {
        if(result){
          this.$axios.post('/admin/edit', this.formData).then((_data)=> {
            if(_data.status == 200){
              this.$toast.success(_data.message);
              this.$router.replace({
                path: '/admin'
              });
            }
          });
        }
      });
    },
    clear () {
      this.$refs.form.clear();
      this.formData = {};
    },
    onEditorChange({ quill, html, text }) {
      console.log(text)
      console.log('editor change!', html)
      this.formData.content = html;
    },
    del () {
      this.$confirm('确定要删除？', '警告', {
        type: 'warning'
      }).then(({ result }) => {
        if (result) {
         this.$axios.post('/admin/delete', this.formData).then((_data)=> {
            if(_data.status == 200){
              this.$toast.success(_data.message);
              this.$router.replace({
                path: '/admin'
              });
            }
          });
        } else {}
      });
      
    }
  },
  created() {
    this.$progress.start();
  },
  mounted() {
    let param = this.$route.query;
    this.formData._id = param._id;
    this.$axios.post('/list/detail', param).then((_data)=> {
        this.$progress.done();
        this.formData = _data.data;
        this.title = _data.data.title;
    });
  }
};
</script>

<style>
  .ql-container{
    height: 300px;
  }
  .ql-container.ql-snow{
    border: 1px solid #ccc;
  }
</style>
