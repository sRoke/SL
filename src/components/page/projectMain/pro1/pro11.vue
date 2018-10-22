<template>
  <div>
    <el-table :data="tableData">
      <el-table-column prop="date" label="日期" width="140">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  export default {
    name: "pro11",
    data () {
      const item ={
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        msg: 'pro11页面',
        tableData: Array(20).fill(item)
      }
    },
    created(){
      console.log('created路由参数==',this.$route,this.$route.params)
    },
    mounted: function () {
      console.log('mounted路由参数==',this.$route,this.$route.params)
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>
