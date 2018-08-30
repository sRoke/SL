<template>
  <div class="hello">
    <h1>扫雷</h1>
    <ul>
      <li>
        <router-link to="/main">main</router-link>
      </li>
    </ul>
    <h2>设置</h2>
    <ul v-for="row in rowNum" class='sl-ul'>
      <li v-for="col in colNum" class='sl-li'>
       <div class="grid-content bg-purple">{{row}}-{{col}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        rowNum:10,
        colNum:10,
      }
    },
    beforeRouteEnter:(to,from,next)=>{
      console.log("准备进入路由模板");
      next();
    },
    beforeRouteLeave: (to, from, next) => {
      console.log("准备离开路由模板");
      next();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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


  .fade-enter {
    opacity:0;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-enter-active{
    transition:opacity .5s;
  }
  .fade-leave-active{
    opacity:0;
    transition:opacity .5s;
  }

 .sl-ul{
    padding:0;
    margin:0;
}
.sl-li{
    padding:0;
    margin:0;
 }
.grid-content {
    border-radius: 4px;
    /*min-height: 36px;*/
    background:#d5d5d5;
    text-align: center;
    width:20px;
    height:20px;
    font-size:8px;
}












</style>
