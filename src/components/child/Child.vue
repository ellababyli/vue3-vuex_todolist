<template>
    <div>
        这是子组件的值
       *** {{msg}}***
       <button @click="send">发送子组件参数</button>
    </div>
</template>
<script>
import { defineComponent,ref,onMounted} from 'vue'

export default defineComponent({
    name:'child',
    props:{
        msg:{
            //数据类型校验
            type:String,
            //是否毕传，默认false
            //required:true,
            default:'默认值'
        }
    },
    setup(props,ctx) {
       // console.log(props.msg);
        let cmsg=ref('子组件传过去的参数')
        let cnum=ref(10)
        let send = ()=>{
            //通过ctx.emit 分发事件传值给父组件
            //emit第一个参数事件名称，第二个参数传递的数据
            ctx.emit('send',cmsg.value)
        }
        onMounted(()=>{
            //分发事件不一定是点击事件，也可以通过onUnmounted页面一加载的时候分发
            //ctx.emit('send',cmsg.value)
           // ctx.emit('send',[cmsg.value,cnum.value])
            ctx.emit('send',{
                msg:cmsg.value,
                num:cnum.value
            })
        })
        return{
            cmsg,
            cnum,
            send
        }
    },
})
</script>
