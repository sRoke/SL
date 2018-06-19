<template>
    <div>
      <div> {{msg}}</div>
      <div> {{$route.name}}</div>

      <div>
        <p>新闻ID：{{ $route.params.newsId}}</p>
        <p>新闻标题：{{ $route.params.newsTitle}}</p>
      </div>
      <div>
        <router-link to="/">主页</router-link>
      </div>
    </div>
</template>

<style scoped>
    div {
        background-color: #ff0000;
    }
</style>

<script>
    export default{
        data () {
            return {msg: '这个是page1模板页'}
        }
    }
</script>
