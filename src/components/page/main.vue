<template>
    <div>
      <h2>这是主页面</h2>


      <div > {{ $route.name }}</div>
      <div >   <router-link to="/">主页</router-link></div>
      <ul>
        <li>
          <!--<a to="/page1" target="_blank">vue-router</a>-->
          <router-link to="/page1/123/啊哈哈">page1</router-link>
          <router-link :to="{name:'page2',params:{username:'wwwww'}}">page2</router-link>
        </li>
      </ul>
      <ul>
        <li>
          <button @click="go">跳转到main2</button>
        </li>
      </ul>



      <div>
        <router-view class="aaa"></router-view>
      </div>

      <div>
        <my-component-button2></my-component-button2>
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
            return {
              msg: '这个是Home模板页',
            }
        },
        components:{
          'my-component-button2':returnBtn
        },
        methods:{
          go(){
            this.$router.push('/main2');
          }
        },
    }
</script>
