/**
 * Created by susf on 18-4-18.
 */
import  Vue from 'vue';
import  Vuex from 'vuex';

Vue.use(Vuex);




const  state = {
  count:1
};

const mutations={
  add(state,n){
    state.count+=n;
  },
  reduce(state,n){
    state.count-=n;
  }
};


const getters = {
  count:function(state){
    return state.count +=100;
  }
};

const actions ={
  addAction(context,n){
    context.commit('add',n);
    setTimeout(function () {
      context.commit('reduce',n)
    },3000)
    console.log('我比reduce提前执行');
  },
  reduceAction({commit},n){
    commit('reduce',n)
  }
};


// const moduleA={
//   state,mutations,getters,actions
// }


export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  // modules:{a:moduleA}
})
