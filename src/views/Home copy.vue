<template>
  <div>
    <!-- <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
    <div>
      {{list}}
    </div> -->
    <!-- <div>
      {{ num1 }}---{{ num2 }} 之和：{{ addNum }}

      <button @click="add()">add</button>
    </div> -->
    <button @click="goto">跳转路由</button>
    <div>{{num}}----{{name}}---{{obj}}</div>
  </div>
</template>

<script>
import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain";
import NavFooter from "@/components/navFooter/NavFooter";
import { defineComponent, computed, ref,onMounted } from "vue";
import { useStore } from 'vuex'
import { useRouter,useRoute} from 'vue-router'
export default defineComponent({
  name: "Home",
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },
  setup() {
    //router全局路由对象
    let router = useRouter()
    //route代表当前路由对象
    let route = useRoute()
    //query传过来的参数都是字符串类型
    console.log(route.params);

    let num =ref(null)
    let name = ref('')
    let obj = ref({})
 
    onMounted(()=>{
      num.value = route.params.num*1
      name.value = route.params.num
      obj.value = JSON.parse(route.params.obj)
    })

    let goto = ()=>{
      //跳转路由
      //push函数里面可以传入跳转的路由
      //back: 回退到上一页
      //forward: 去到下一页
      //go(整数) 正数代表前进 负数代表后腿
      router.push('/about');
    }

    // let store = useStore();
    // console.log(store);
    // let list = computed(()=>{
    //   return store.state.list
    // })


    // let num1 = ref(10);
    // let num2 = ref(20);
    // let addNum = computed(() => {
    //   //必须返回一个值
    //   //逻辑代码
    //   //商城购物车总价、数量
    //   return num1.value + num2.value;
    // });
    // let add = () => {
    //   num1.value++;
    //   num2.value++;
    // };
    return {
      goto,
      name,
      obj,

      num,
      //list

      // num1,
      // num2,
      // addNum,
      // add,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>
