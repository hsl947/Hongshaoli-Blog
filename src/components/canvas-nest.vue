<template>
    <div class="canvas-area" id="canvas-area">
        <vue-canvas-nest :config="{color:'1,1,1', count: 88}" :el="'#canvas-area'"></vue-canvas-nest>
    </div>
</template>
 
<script>
/**
 * canvas网格组件
 * 用法：<canvas-nest></canvas-nest>
 */
  import vueCanvasNest from 'vue-canvas-nest'  
  export default {
    name: "canvas-nest",
    props: {
      
    },
    data() {
      return {
        
      }
    },
    components: {
        vueCanvasNest
    },
    created() {
      
    },
 
    methods: {
      
    }
  }
</script>
 
<style>
    .canvas-area{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -2;
    }
</style>