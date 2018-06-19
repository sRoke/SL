<template>
    <div>
      <div >  {{msg}} </div>
      <div >
        <router-link to="/">主页</router-link>
        <!--<router-link to="/main2">main2</router-link>-->
        <router-link to="/main21">main21</router-link>
      </div>

      <div >
        <div @click = 'goto'>点击跳转到main1</div>
        <!--<router-link to="/main21">main21</router-link>-->
      </div>


      <div>
        <my-component-button2></my-component-button2>
      </div>


      <div>
        <router-view ></router-view>
        <router-view name="route2" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
        <router-view name="route3" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
      </div>
    </div>
</template>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

<script>
  import returnBtn from '../common/returnBtn.vue'
    export default{
        data () {
            return {msg: '单页面多路由测试main2'}
        },
        methods:{
          goto(){
            this.$router.push('/main1');
          }
        },
        components:{
          'my-component-button2':returnBtn
        }
    }
</script>
