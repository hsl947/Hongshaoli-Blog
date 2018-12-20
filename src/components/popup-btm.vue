<template>
    <div>
        <div class="mask" v-if="isShow" @click="hidePicker"></div>
        <div class="popup-bottom" :class="{'show': isShow}">
            <slot />
        </div>
    </div>
</template>

<script>
/**
 * 自定义弹窗组件-用法
 * Hong 2018-12-07
 * import popupBtm from '@/components/popup-btm'
 * components: { popupBtm }
 * <popupBtm v-model="model">...</popupBtm>  
 */
export default ({
    name: 'popup-btm',
    props: {
        value: { // 必须要使用value
　　　　　  default: ''
　　　　},
    },
    computed: {
        isShow: function() {
            return this.value;
        }
    },
    methods: {
      hidePicker(){
           this.$emit('input', false);
      }
  }
});
</script>