<template>
    <!-- 开始页面 -->
    <div>
            <button @click="start">开始任务 </button>
    </div>
</template>
<script>
import { defineComponent ,ref,onMounted,onUnmounted} from "vue"
import { useRouter} from 'vue-router'

export default defineComponent({
  name: "Start",
  setup() {
    let router = useRouter()
    let num = ref(10)
    let name = ref('jack')
    let obj = ref({
        msg:'start'
    })
     //组件的挂载
  //发请求
  //数据初始化的操作 接收路由传递的参数
    onMounted(()=>{
        console.log('onMounted');
    })
    //组件卸载时的生命周期
    //跳转路由
    //清除定时器，闭包函数。。。。
    onUnmounted(()=>{
        console.log('onUnmounted');
    })
    let start = ()=>{
        //router.push('/home')
        //push:如果是传的对象格式，就可以传递参数
        //query传参name和path都可以 参数会在地址栏显示 刷新之后还在
        //params传参必须是name 参数不会在地址栏显示 刷新之后不再
        router.push({
          //  path:'/home',
          name:'Home',
            // query:{
            //     name:name.value,
            //     num:num.value,
            //     obj:JSON.stringify(obj)
            // }
             params:{
                name:name.value,
                num:num.value,
                obj:JSON.stringify(obj.value)
            }
        })
    }
    return {
        start
    }
  },
});
</script>
