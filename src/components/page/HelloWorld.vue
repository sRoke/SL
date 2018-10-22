<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>页面跳转(router测试)</h2>
    <ul>
      <li>
        <router-link to="/main">main</router-link>
      </li>
    </ul>
    <h2>单页面多路由测试</h2>
    <ul>
      <li>
        <transition name='fade'>
          <router-link to="/main2">main2</router-link>
        </transition>
      </li>
    </ul>
    
    <h2>项目demo入口</h2>
    <ul>
      <li>
        <transition name='fade'>
          <router-link to="/proMain">project</router-link>
        </transition>
      </li>
    </ul>


    <h2>vuex测试</h2>
    <ul>
      <li>
        <transition name='fade'>
          <router-link to="/vuexMain">vuex</router-link>
        </transition>
      </li>
    </ul>

    <h2>vue-example入口</h2>
    <ul>
      <li>
        <transition name='fade'>
          <router-link to="/sl">SL入口</router-link>
        </transition>
        /
        <transition name='fade'>
          <router-link to="/exMain/exPos">example-exMain入口</router-link>
        </transition>
        /
         <transition name='fade'>
          <router-link to="/echartDemo">echart测试</router-link>
        </transition>
      </li>
    </ul>

    <div>
      <!--<router-view class="aaa"></router-view>-->
    </div>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  beforeRouteEnter: (to, from, next) => {
    console.log("准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
