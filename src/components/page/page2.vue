<template>
    <div>
      <div> {{msg}}</div>
      <div> {{$route.name}}</div>

      <div>{{$route.params.username}}</div>

      <div>
        <router-link to="/">主页</router-link>
      </div>
    </div>
</template>

<style scoped>

</style>

<script>
    export default{
        data () {
            return {msg: '这个是page2模板页'}
        }
    }
</script>
