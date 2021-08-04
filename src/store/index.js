import { createStore } from 'vuex'

export default createStore({
  //定义所需要的状态
  state: {
    list:[
      {
        title: "吃饭",
        complete: false,
      },
      {
        title: "睡觉",
        complete: false,
      },
      {
        title: "敲代码",
        complete: true,
      },
    ]
  },
  //同步修改state,都是方法
  //第一个参数state,第二个参数需要修改的值
  mutations: {
    //添加任务 
    //payload形参代表要添加的任务
    addTodo(state,payload){
      state.list.push(payload);
    },
    //删除任务 splice(下标，删除的个数)
    //payload形参代表当前点击的下标
    delTode(state,payload){
      state.list.splice(payload,1);
    },
    //清除任务
    //payload形参代表过滤后的数组
    clear(state,payload){
      //把过滤后的数组传进来
      state.list=payload
    }
  },
  //异步提交mutations
  //第一个参数store,第二个参数需要修改的值
  actions: {
    // asyncSetName(store,params){
    //   setTimeout(()=>{
    //     //commit是提交mutations,调用mutations的方法
    //     store.commit('setName',params)
    //   },2000)
    // }
  },
  //模块化
  modules: {
  }
})
