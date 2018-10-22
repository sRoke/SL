<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-aside style="width: 220px;">
        <sid-nav></sid-nav>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <span @click="goto('pro11')">页面1</span>
          <span @click="goto('pro12')">页面2</span>
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <router-view ></router-view>
          <!--<el-table :data="tableData">-->
            <!--<el-table-column prop="date" label="日期" width="140">-->
            <!--</el-table-column>-->
            <!--<el-table-column prop="name" label="姓名" width="120">-->
            <!--</el-table-column>-->
            <!--<el-table-column prop="address" label="地址">-->
            <!--</el-table-column>-->
          <!--</el-table>-->
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>


<script>
  import sidNav from '../../common/sidNav.vue'

  export default {
    name: "proMain",
    data () {
      return {
        msg: '单页面多路由测试main2',
        item:{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      }
    },
    methods:{
      goto(data){
        console.log('data===========',data);

        // this.$router.push({ name: 'pro11'});


        // this.$router.push(data);
        this.$router.push({
          // path: data,
          name: data,
          params: {
            id: 123123
          },
          query: {
            id: 123123
          }
        });
      }
    },
    components:{
      'sid-nav':sidNav
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
