<template>
  <div>
    <h2>{{msg}}</h2>
    <div >   <router-link to="/vuexMain">vuex主页</router-link></div>
    <hr/>
    <h3>{{$store.state.count}}</h3>
    <h3>每次count改变都会执行此方法 countGetters=={{count}}</h3>
    <h3>通过computed的计算属性直接赋值{{count11}}</h3>
    <h3>通通过mapState的对象来赋值{{count22}}</h3>
    <h3>通过mapState的数组来赋值{{count}}</h3>
    <div>
      $store.commit()调用
      <button @click="$store.commit('add',3)">+</button>
      <button @click="$store.commit('reduce',2)">-</button>
    </div>

    <div>
      通过computed的计算属性直接调用add(1)
      <button  @click="add(1)">+</button>
      <button  @click="reduce(1)">-</button>
    </div>
    <div>
      通通过mapMutations的对象来赋值调用add11(2)
      <button  @click="add11(2)">+</button>
      <button  @click="reduce11(2)">-</button>
    </div>
    <div>
      通过mapMutations的数组来赋值调用add22(3)
      <button  @click="add22(3)">+</button>
      <button  @click="reduce22(3)">-</button>
    </div>
------------------------------------------------------------
    <p>
      <button @click="addAction(5)">+</button>
      <button @click="reduceAction(5)">-</button>
    </p>

  </div>
</template>

<style scoped>

</style>

<script>
  import store from '@/vuex/store';
//  import 'vue-resourse'
  import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
  export default{
    data () {



//      this.$http.get('https://www.sojson.com/open/api/weather/json.shtml',{
//        city:'北京'
//      }).then(function(res){
//        alert(res.data);
//
//      },function(res){
//        alert(res.status)
//      });








      return {
        msg: 'Hello Vuex',
//        count:110
      }
    },
    computed:{
//      count(){
//        return this.$store.getters.count;
//      },
      count11(){
          return this.$store.state.count
      },
      ...mapState({
        count22:state=>state.count
      }),
      ...mapState(["count"]),
//      ...mapGetters(["count"])
    },
    methods:{
      aaaa(){

      },
      // 使用对象展开运算符将此对象混入到外部对象中
      add11(n){
        return this.$store.commit('add',n)
      },
      reduce11(n){
        return this.$store.commit('reduce',n)
      },
      ...mapMutations({
        add22:(commit,n) => {console.log('state=',commit,n);commit('add',n)},
      }),
      ...mapMutations({
        reduce22:(commit,n) => commit('reduce',n)
      }),
      ...mapMutations(['add','reduce']),
      ...mapActions(['addAction','reduceAction'])
    },
    store
  }
</script>
