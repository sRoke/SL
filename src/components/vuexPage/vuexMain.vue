<template>
    <div>
      <h2>
        {{msg}}
      </h2>
      <div >   <router-link to="/">主页</router-link></div>
      <!--<h2>页面跳转(router测试)</h2>-->
      <ul>
        <li>
          <router-link to="/vuexCount">count</router-link>
        </li>
      </ul>

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
</style>

<script>
    export default{
        data () {
            return {msg: '这个是xuex测试的主页面'}
        }
    }
</script>
