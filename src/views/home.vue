
<style  scoped >
</style>

<template>
  <div class="home">
    <helloWorld></helloWorld>
    <p>我是响应式数据{{ name }}</p>

    <div v-for="item in swiperList" :key="item.id">
      <p>数组遍历的数据{{ item }}</p>
    </div>
    <button @click="goToDetail">路由跳转</button>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import helloWorld from "../components/HelloWorld";
// 你需要使用到什么生命周期，就引出来什么生命周期
// setup 函数，就相当于 vue 2.0 中的 created以及beforecreated
// import {
//   onBeforeMount,   组件挂载之前--beforeMount
//   onMounted,        组件挂载完成--mounted
//   onBeforeUpdate,      数据更新，虚拟 DOM 打patch之前--beforeUpdate
//   onUpdated,           数据更新，虚拟 DOM 渲染完成--updated
//   onBeforeUnmount,      组件销毁之前--beforeDestroy
//   onUnmounted,         组件销毁后--destroyed
// } from 'vue'

// 把之前的data,methods,钩子都放在了setup，然后return出来，页面直接用
export default {
  name: "home",
  components: {
    helloWorld,
  },
  setup() {
    const router = useRouter();
    // reactive 是 vue 3.0 的一个重大变化，其作用为创建响应式的对象或数组
    const state = reactive({
      swiperList: [1, 2, 3],
      name: "wei",
    });
    onMounted(() => {
      console.log("onMounted挂载的reactive数据", state);
    });

    const goToDetail = () => {
      printlog();
      router.push({ name: "about" });
    };
    const printlog = () => {
      console.log("测试函数调用函数以及取data值", state.swiperList);
    };
    return {
      ...toRefs(state),
      goToDetail,
    };
  },
};
//reactive 和 ref 的区别就是，reactive 是处理对象或者数组的。
</script>