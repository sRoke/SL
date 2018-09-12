<template>
  <div class="exPos">
    <div>
      <el-row>
        <el-col :span='7' class='pos-order'>
          <el-tabs>
            <el-tab-pane label="点餐">
              <el-table :data="tableData" border style="width: 100%">

                <el-table-column prop="goodsName" label="商品"></el-table-column>
                <el-table-column prop="count" label="数量" width="50"></el-table-column>
                <el-table-column prop="price" label="单价" width="70"></el-table-column>
                <el-table-column prop="totalPrice" label="总价" width="70"></el-table-column>
                <el-table-column label="操作" width="100" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="text" size="small">删除</el-button>
                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>

              <div class="totalDiv" style="margin: 10px">
                <el-row type="flex" class="row-bg" justify="center">
                  <el-col :span="9">总数:{{totalCount}}</el-col>
                  <el-col :span="9">总价:{{totalMoney}}</el-col>
                </el-row>
              </div>
              <div style="margin-top: 20px">
                <el-button type="warning">挂单</el-button>
                <el-button type="danger">删除</el-button>
                <el-button type="success">结账</el-button>
              </div>

            </el-tab-pane>
            <el-tab-pane label="挂单">
              <el-table :data="tableData" border show-summary style="width: 100%">
                <el-table-column prop="goodsName" label="商品"></el-table-column>
                <el-table-column prop="count" label="量" width="50"></el-table-column>
                <el-table-column prop="price" label="金额" width="70"></el-table-column>
                <el-table-column label="操作" width="100" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="text" size="small">删除</el-button>
                    <el-button type="text" size="small">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="外卖">
              <el-table :data="tableData" border show-summary style="width: 100%">

                <el-table-column prop="goodsName" label="商品"></el-table-column>
                <el-table-column prop="count" label="量" width="50"></el-table-column>
                <el-table-column prop="price" label="金额" width="70"></el-table-column>
                <el-table-column label="操作" width="100" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="text" size="small">删除</el-button>
                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <!--商品展示-->

        <el-col :span='17' class='pos-order' id="order-list">

          <div class="often-goods">
            <div class="title">常用商品11</div>
            <div class="often-goods-list">
              <ul>
                <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                  <span>{{goods.goodsName}}</span>
                  <span class="o-price">￥{{goods.price}}元</span>
                </li>
              </ul>
            </div>
          </div>


          <div class="goods-type">
            <el-tabs>
              <el-tab-pane label="汉堡">
                <ul class='cookList'>
                  <li v-for="goods in type0Goods">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="小食">
                <ul class='cookList'>
                  <li v-for="goods in type1Goods">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <ul class='cookList'>
                  <li v-for="goods in type2Goods">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <ul class='cookList'>
                  <li v-for="goods in type3Goods">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>

            </el-tabs>
          </div>


        </el-col>


      </el-row>
    </div>
  </div>
</template>

<style scoped>
  .pos-order {
    background: #F9FAFC;
    text-align: center;
    border-right: 1px solid #c0ccda;
    height: 100%;
  }

  .title {
    height: 20px;
    border-bottom: 1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding: 10px;
  }

  .often-goods-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #E5E9F2;
    padding: 10px;
    margin: 5px;
    background-color: #fff;
  }

  .o-price {
    color: #58B7FF;
  }

  .cookList li {
    list-style: none;
    width: 23%;
    border: 1px solid #E5E9F2;
    height: auto;
    overflow: hidden;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin: 2px;

  }

  .cookList li span {
    display: block;
    float: left;
  }

  .goods-type {
    clear: both;
  }

  .foodImg {
    width: 40%;
  }

  .foodName {
    font-size: 18px;
    padding-left: 10px;
    color: brown;

  }

  .foodPrice {
    font-size: 16px;
    padding-left: 10px;
    padding-top: 10px;
  }
</style>

<script>
  import axios from 'axios';
  export default{
    name: 'exPos',
    data(){
      return {
        tableData: [],
        oftenGoods: [],
        type0Goods: [],
        type1Goods: [],
        type2Goods: [],
        type3Goods: [],
        totalCount:0,
        totalMoney:0,
      }
    },
    created(){
      axios.get('http://jspang.com/DemoApi/oftenGoods.php')
        .then(response => {
          console.log(response);
          this.oftenGoods = response.data;
        }).catch(error => {
        console.log(error);
        alert('网络错误，不能访问');
      });

      axios.get('http://jspang.com/DemoApi/typeGoods.php')
        .then(response => {
          console.log(response);
          //this.oftenGoods=response.data;
          this.type0Goods = response.data[0];
          this.type1Goods = response.data[1];
          this.type2Goods = response.data[2];
          this.type3Goods = response.data[3];

        })
        .catch(error => {
          console.log(error);
          alert('网络错误，不能访问');
        })


    },
    mounted: function () {
      var orderHeight = document.body.clientHeight;
      document.getElementById("order-list").style.height = orderHeight + 'px';
    },
    methods:{
        addOrderList(goods){
          this.totalCount=0; //汇总数量清0
          this.totalMoney=0;
          let isHave=false;
          //判断是否这个商品已经存在于订单列表
          for (let i=0; i<this.tableData.length;i++){
            if(this.tableData[i].goodsId==goods.goodsId){
              isHave=true; //存在
              this.tableData[i].count++;
              this.tableData[i].totalPrice = this.tableData[i].price*this.tableData[i].count;
            }
          }
          //根据isHave的值判断订单列表中是否已经有此商品
          if(!isHave){
            //存在就进行数量添加
            let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1,totalPrice:goods.price};
            this.tableData.push(newGoods);
          }
          //进行数量和价格的汇总计算
          this.tableData.forEach((element) => {
            this.totalCount+=element.count;
            this.totalMoney+=element.price*element.count;
          });
        }
    }
  }
</script>

