(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-428e5822"],{"86ba":function(t,e,i){},bb51:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("mu-appbar",{staticStyle:{width:"100%"},attrs:{color:"primary"}},[i("mu-button",{attrs:{slot:"left",icon:""},on:{click:function(e){t.open=!t.open}},slot:"left"},[i("mu-icon",{attrs:{value:"menu"}})],1),i("span",[t._v("Shaoli's Blog")]),i("mu-menu",{attrs:{slot:"right"},slot:"right"},[i("mu-button",{attrs:{flat:""}},[t._v("MENU")]),i("mu-list",{attrs:{slot:"content"},slot:"content"},[i("mu-list-item",{attrs:{button:""}},[i("mu-list-item-content",[i("mu-list-item-title",[t._v("Menu Item 1")])],1)],1),i("mu-list-item",{attrs:{button:""}},[i("mu-list-item-content",[i("mu-list-item-title",[t._v("Menu Item 2")])],1)],1)],1)],1)],1),i("mu-paper",{staticClass:"demo-list-wrap",attrs:{"z-depth":1}},[i("mu-list",{attrs:{textline:"three-line"}},[i("mu-sub-header",[t._v("今天")]),i("mu-list-item",{attrs:{button:"",to:"detail"}},[i("mu-list-item-content",[i("mu-list-item-title",[t._v("这个周末一起吃饭么?")]),i("mu-list-item-sub-title",[t._v("\n            周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈\n          ")])],1)],1),i("mu-divider"),i("mu-list-item",{attrs:{button:"",to:"detail"}},[i("mu-list-item-content",[i("mu-list-item-title",[t._v("Alex Qin")]),i("mu-list-item-sub-title",[t._v("\n            我们去看电影，最近有部烂片上映，又有吐槽的了\n          ")])],1)],1),i("mu-divider"),i("mu-list-item",{attrs:{button:"",to:"detail"}},[i("mu-list-item-content",[i("mu-list-item-title",[t._v("LOL")]),i("mu-list-item-sub-title",[t._v("\n            周末一起 LOL\n          ")])],1)],1),i("mu-divider"),i("mu-list-item",{attrs:{button:"",to:"detail"}},[i("mu-list-item-content",[i("mu-list-item-title",[t._v("LOL")]),i("mu-list-item-sub-title",[t._v("\n            实在编不下去，这就是个demo\n          ")])],1)],1)],1)],1),i("p",[t._v("测试node接口数据---"+t._s(JSON.stringify(t.testData)))]),i("mu-drawer",{attrs:{open:t.open,docked:!1,left:!0},on:{"update:open":function(e){t.open=e}}},[i("mu-list",[i("mu-list-item",{attrs:{button:""}},[i("mu-list-item-title",[t._v("Menu Item 1")])],1),i("mu-list-item",{attrs:{button:""}},[i("mu-list-item-title",[t._v("Menu Item 2")])],1),i("mu-list-item",{attrs:{button:""},on:{click:function(e){t.open=!1}}},[i("mu-list-item-title",[t._v("Close")])],1)],1)],1)],1)},s=[],u={name:"home",data:function(){return{open:!1,testData:{}}},components:{},methods:{},created:function(){this.$progress.start()},mounted:function(){var t=this;this.$progress.done(),this.$axios.post("/test").then(function(e){t.testData=e})}},m=u,o=(i("c14a"),i("2877")),l=Object(o["a"])(m,n,s,!1,null,"1c397f88",null);l.options.__file="Home.vue";e["default"]=l.exports},c14a:function(t,e,i){"use strict";var n=i("86ba"),s=i.n(n);s.a}}]);