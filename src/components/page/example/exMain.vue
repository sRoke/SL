<template>
    <div id="exApp">
      <!--左侧导航-->
      <leftNav></leftNav>
      <!--操作区域-->
      <div class="exMain">
        <router-view></router-view>
      </div>
    </div>
</template>

<style scoped>
  #exApp {
    font-family: 'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    height:100%;
    width: 100%;
  }

  .exMain {
    float: left;
    width: 95%;
    background-color: #EFF2F7;
    height: 100%;
    overflow: auto;
  }

</style>

<script>
  import leftNav from '@/components/page/example/exCommon/leftNav';
    export default{
        name: 'exApp',
        data () {
            return {msg: '这个是Home模板页'}
        },
        components:{
          leftNav
        }
    }
</script>
