<template>
    <div>
      <div >  {{msg}} </div>
      <div >
        <router-link to="/">主页</router-link>
        <!--<router-link to="/main2">main2</router-link>-->
        <router-link to="/main21">main21</router-link>
      </div>

      <div >
        <div @click = 'goto'>点击跳转到main1</div>
        <!--<router-link to="/main21">main21</router-link>-->
      </div>
      <div id="main" style="width: 600px;height:400px;"></div>
      <div id="main2" style="width: 600px;height:400px;"></div>
      <div>
        <my-component-button2></my-component-button2>
      </div>


      <div>
        <router-view ></router-view>
        <router-view name="route2" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
        <router-view name="route3" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
      </div>
    </div>
</template>

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
</style>

<script>
import returnBtn from "../common/returnBtn.vue";

import echarts from "echarts";
export default {
  data() {
    return {
      msg: "单页面多路由测试main2",
      echartsOpinion: ["A", "B", "C", "D", "E"],
      echartsOpinionData: [
        {
          value: 26,
          name: "A"
        },
        {
          value: 31,
          name: "B"
        },
        {
          value: 18,
          name: "C"
        },
        {
          value: 28,
          name: "D"
        },
        {
          value: 21,
          name: "E"
        }
      ]
    };
  },
  methods: {
    goto() {
      this.$router.push("/main1");
    },
    bbb() {},
    drawGraph(id) {
      // 绘图方法
      this.chart = echarts.init(document.getElementById(id));
      // 皮肤添加同一般使用方式
      this.chart.showLoading();
      // 返回到data中
      var that = this;
      this.chart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        title: {
          text: "标题",
          top: "center",
          left: "center"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["30%", "50%"],
            avoidLabelOverlap: false,
            selectedMode: true,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["30%", "50%"],
            avoidLabelOverlap: false,
            selectedMode: true,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 600, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      });
      this.chart.hideLoading();
    },
    drawGraph2(id) {
      // 绘图方法
      this.chart = echarts.init(document.getElementById(id));
      // 皮肤添加同一般使用方式
      this.chart.showLoading();
      // 返回到data中
      var that = this;
      this.chart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        title: {
          text: "标题",
          top: "center",
          left: "center"
        },
        series: [
          {
            name: "访问来源",
            type: "sunburst",
            radius: ["30%", "90%"],
            avoidLabelOverlap: false,
            selectedMode: true,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                name: "Grandpa",
                value:20,
                children: [
                  {
                    name: "Uncle Leo",
                    value: 5
                  }
                ]
              },
              {
                name: "Nancy",
                value:30,
                children: [
                  {
                    name: "Uncle Nike",
                    value:10
                  }
                ]
              },  
              {
                name: "Nancy",
                value:50,
                children: [
                  {
                    name: "Uncle Nike",
                    value:15
                  }
                ]
              }
            ]
          }
        ]
      });
      this.chart.hideLoading();
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.drawGraph("main");
      this.drawGraph2("main2");
    });
  },
  components: {
    "my-component-button2": returnBtn
  }
};
</script>
