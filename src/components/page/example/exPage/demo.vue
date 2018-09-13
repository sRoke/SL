<template>
  <div class="demo">
          <div class="demoDiv" style="margin-left: 30px">
            <div>title:{{item.title}}</div>

            <div>price:￥{{item.price}}元</div>

            <div>goodsno:{{item.goodsno}}</div>

            <div>brand:{{item.brand}}</div>


            <ul class='cookList' style="margin: 0;padding: 0">
              <li style="border-top: 1px solid black">
                <el-row type="flex" class="row-bg" justify="start">
                  <el-col class="tabs"><div>颜色/尺码</div></el-col>
                  <el-col class="tabs" v-for="(size,index) in item.size" :key="index"><div>{{size}}</div></el-col>
                  <el-col class="tabs"><div>小计</div></el-col>
                </el-row>
              </li>
              <li v-for="(color,index) in item.color" :key="color.index">
                <el-row type="flex" class="row-bg" justify="start">
                  <el-col class="tabs"><div>{{color}}</div></el-col>
                  <el-col class="tabs"  v-for="(size,sizeIndex) in item.size" :key="sizeIndex">
                    <div>
                         <input :placeholder='item.skuinfo[index][sizeIndex]' type="tel"
                                @focus="keepprevalue(inputSkuNum[index][sizeIndex])"
                                v-on:blur="checkamount(item.skuinfo[index][sizeIndex],inputSkuNum[index][sizeIndex],index,sizeIndex,)"
                                @input="checkNum(inputSkuNum[index][sizeIndex],index,sizeIndex)"
                                v-model="inputSkuNum[index][sizeIndex]"
                                ref="item.skuinfo[index][sizeIndex]"/>
                    </div>
                  </el-col>
                  <el-col class="tabs"><div>{{smallPlan[index]?smallPlan[index]:0}}</div></el-col>
                </el-row>
              </li>
              <li style="border-left: 1px solid black">
                <el-row>
                  <el-col  :span="16" class="tabFooter grid-content bg-purple"><div>总计数:{{total.num}},总金额:￥{{total.price}}元</div></el-col>
                  <el-col  :span="8" class="tabFooter grid-content bg-purple"><div><button :disabled="total.num<=0">提交订单</button></div></el-col>
                </el-row>
              </li>
            </ul>
          </div>
  </div>
</template>

<style scoped>
  .demoDiv{
    background: #ffffff ;
  }
  .demoDiv ul{
    display: inline-block;
  }
  .demoDiv li{
    list-style: none;
    border-right: 1px solid black;
  }

  .tabs{
    /*display: inline-block;*/
    /*letter-spacing: -3px;*/
    width:80px;
    height: 50px;
    line-height: 50px;
    text-align:center;
    /*border: 1px solid black;*/
    /*border-left-width:0;*/
    border-top-width:0;
    border-right-width:0;
    border-bottom:1px solid black;
    border-left:1px solid black;
    /*border-bottom-color:black;*/
  }

  .tabFooter{
    height: 50px;
    line-height: 50px;
    text-align:center;
    /*border: 1px solid black;*/
    /*border-left-width:0;*/
    border-top-width:0;
    border-right-width:0;
    border-bottom:1px solid black;
  }


  .demoDiv li div input{

    border: none;
    border-bottom: 1px solid black;
    margin: 0;
    padding: 0;
    width: 50px;
    text-align: center;
    outline: none;
  }

</style>

<script>
  import axios from 'axios';
  export default{
    name: 'exPos',
    data(){
      return {
        item:{},
        smallPlan:[],
        inputSkuNum:[],
        total:{
          num:0,
          price:0
        },
        prevalue:0,
        reg:"/^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$"
      }
    },
    created(){
      axios.get('static/mydata.json')
        .then(response => {
          this.item = response.data;
          for(var i = 0 ;i<response.data.skuinfo.length;i++){
            this.inputSkuNum.push([])
          }
          // this.inputSkuNum = response.data.skuinfo;
        }).catch(error => {
        console.log(error);
        // alert('网络错误，不能访问');
      });
    },
    mounted: function () {
      // var orderHeight = document.body.clientHeight;
      // document.getElementById("order-list").style.height = orderHeight + 'px';
    },
    methods:{

      checkamount(stockcount,obj,cols,rows){ //判断输入是否正确，并且计算小计。参数含义：当前输入框的库存数，当前输入框对象，总共cols行，rows列，价格，当前行数
        console.log(obj,typeof obj)
        var thisinput=parseInt(obj); //获得本次的输入值
        console.log(obj,typeof thisinput)
        if (isNaN(thisinput)) thisinput=0;
        if ( thisinput > stockcount){
          alert('超出库存数量'+stockcount+'！');
          /*if (parseInt(prevalue)==0){
                      obj.value=stockcount; //清除非法输入，推测用户需要最大量，也就是库存量。
                      total=total+stockcount;	//总计加上本次输入变化的值就是新的总计
                  }else
                  obj.value=prevalue; //清除非法输入，恢复以前输入值。
          */
          this.inputSkuNum[cols][rows]= parseInt(stockcount); //输入超出库存，推测用户需要最大量，也就是库存量。
        }
        if(!this.smallPlan[cols]){
          this.smallPlan[cols] = 0
        }else {
          // this.smallPlan[cols] = parseInt(this.smallPlan[cols]);
        }
        this.smallPlan[cols] = this.smallPlan[cols] + this.inputSkuNum[cols][rows] - this.prevalue;
        this.total.num= this.total.num + this.inputSkuNum[cols][rows] - this.prevalue;
        this.total.price = this.total.num*100;
       },
      keepprevalue(obj){//把每个输入框改变前的值保留下来。
         this.prevalue=parseInt(obj);
         if (isNaN(this.prevalue)) this.prevalue=0;
         console.log("prevalue:"+this.prevalue);
       },
      checkNum(num,index,sizeIndex){
        this.inputSkuNum[index][sizeIndex] = num.replace(/[^\d]/g,'');
       }
    }
  }
</script>

