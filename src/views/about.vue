<style scoped>
.btn-text {
  position: relative;
  top: 200px;
}
</style>
<template>
  <div class="about">
    {{ a }}
    <h1>This is an about page</h1>
    <button @click="goHome">返回</button>
    <button class="btn-text" @click="countAdd">{{ btnText }}</button>
    <div>我是普通{{ count }}</div>
    <div>我是计算属性{{ bigCount }}</div>
    <div>我是计算多个属性100倍{{ computeCount["100x"] }}</div>
    <div>我是计算多个属性1000倍{{ computeCount["1000x"] }}</div>
  </div>
</template>
<script>
// ref 是 vue 3.0 的一个重大变化，其作用为创建响应式的值
import { reactive, onMounted, toRefs, ref, computed } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "about",
  setup() {
    const router = useRouter();
    const state = reactive({
      a: "weifan",
      // btnText: "点这个按钮上面的数字会变",
      // count: 0,
    });
    // 定义一个不需要改变的数据
    const btnText = "点这个按钮上面的数字会变";
    // 定义一个 count 的响应式数据，并赋值为 0
    const count = ref(0);
    onMounted(() => {
      console.log("我是about的onMounted", count);
    });
    // 定义一个函数，修改 count 的值。
    const countAdd = () => {
      count.value++;
    };
    // const countAdd = () => {
    //   state.count.value++;
    // };
    // 计算属性，使用计算函数并命名，然后在 return 中导出即可
    const bigCount = computed(() => {
      return count.value * 10;
    });
    // 计算多个属性，可以通过返回一个对象的方式来实现
    const computeCount = computed(() => {
      return {
        "100x": count.value * 100,
        "1000x": count.value * 1000,
      };
    });
    const goHome = () => {
      router.push({ name: "home" });
    };

    return {
      ...toRefs(state),
      goHome,
      btnText,
      count,
      countAdd,
      bigCount,
      computeCount,
    };
  },
};
// 首先，我们的组件不用写一堆东西了，只需要一个 setup 函数即可。this

// 在 setup 函数中 return 出去的东西，可以在模板区域直接使用，也不必理会 this 这个神奇的东西。

// 然后就是 ref 这个函数，我们可以从 vue 中引入它，它传入一个值作为参数，返回一个基于该值的 响应式 Ref 对象，该对象中的值一旦被改变和访问，都会被跟踪到，通过修改 count.value 的值，可以触发模板的重新渲染，显示最新的值。
</script>

