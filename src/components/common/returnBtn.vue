<template>
    <div>
        <div @click = 'returnFn' class="return-btn">
            返回
        </div>
    </div>
</template>

<style scoped>
   .return-btn{
     width: 200px;
     height: 100px;
     border-radius: 10px;
     background: #36ff56;
     color: #cccccc;
     font-size: 14px;
     line-height: 100px;
     text-align: center;
   }
</style>

<script>
    export default{
        name:'returnBtn',
        methods:{
          returnFn(){
            this.$router.go(-1);
          }
        },
        data () {
            return {msg: '这个是Home模板页'}
        }
    }
</script>
