<template>
    <div>
        这是父组件的值
    </div>
    <child :msg='msg' @send='send'></child>
</template>
<script>
import { defineComponent,ref} from 'vue'
import child from '../components/child/Child.vue'
export default defineComponent({
    name:'detail',
    components:{
        child
    },
    setup() {
        let msg=ref('这是父组件传的参数')
        let send = (val)=>{
            console.log(val);
        }
        return{
            msg,
            send
        }
        
    },
})
</script>
