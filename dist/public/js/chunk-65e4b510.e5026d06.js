(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65e4b510"],{2953:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mu-button",{attrs:{color:"success"},on:{click:t.add}},[t._v("添加")]),a("mu-paper",{attrs:{"z-depth":1}},[a("mu-data-table",{attrs:{stripe:"",columns:t.columns,data:t.testData},scopedSlots:t._u([{key:"default",fn:function(e){return[a("td",{staticClass:"is-center"},[t._v(t._s(e.$index+1))]),a("td",{staticClass:"is-center"},[t._v(t._s(e.row.title.substr(0,14)))]),a("td",{staticClass:"is-center"},[t._v(t._s(e.row.description.substr(0,14)))]),a("td",{staticClass:"is-center"},[t._v(t._s(t._f("formatTime")(e.row.time)))]),a("td",{staticClass:"is-center"},[a("mu-button",{attrs:{color:"success"},on:{click:function(a){t.edit(e.row._id)}}},[t._v("编辑")])],1)]}}])})],1),a("div",{staticClass:"justify-center"},[a("mu-pagination",{attrs:{raised:"",total:t.total,"page-size":t.formData.limit,current:t.formData.page},on:{"update:current":function(e){t.$set(t.formData,"page",e)},change:t.toPage}})],1)],1)},i=[],s=(a("cadf"),a("551c"),a("097d"),a("eb59"),{name:"admin_index",components:{},data:function(){return{formData:{page:1,limit:8},columns:[{title:"序号",name:"id",width:80,align:"center"},{title:"标题",name:"title",align:"center"},{title:"描述",name:"description",align:"center"},{title:"添加时间",name:"time",width:200,align:"center"},{title:"操作",name:"action",align:"center"}],testData:[],current:1,total:0}},filters:{},methods:{getData:function(){var t=this;this.$axios.post("/admin/list",this.formData).then(function(e){t.total||(t.total=e.count),t.testData=e.data;var a=setTimeout(function(){t.$progress.done(),clearTimeout(a)},1e3)})},toPage:function(t){this.formData.page=t,this.testData=[],this.getData()},add:function(){this.$router.push({path:"/add"})},edit:function(t){this.$router.push({path:"/edit",query:{_id:t}})}},created:function(){this.$progress.start()},mounted:function(){this.getData()}}),o=s,r=(a("6965"),a("2877")),c=Object(r["a"])(o,n,i,!1,null,null,null);c.options.__file="index.vue";e["default"]=c.exports},"645e":function(t,e,a){},6965:function(t,e,a){"use strict";var n=a("645e"),i=a.n(n);i.a}}]);