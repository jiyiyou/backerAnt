<template>
  <a-row :gutter="16">
    <a-col :span="8" v-for="(item,index) in card" :key="index">
      <a-card hoverable class="card-main">
        <div class="main">
          <div class="info" :style="{color:item.color}">
            <div class="shape" :style="{background:item.color}">
              <a-icon :type="item.icon"/>
            </div>
            <div>{{item.count}}</div>
          </div>
          <div>{{item.title}}</div>
        </div>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
  export default {
    name: "DataSet",
    data() {
      const card = [{color: '#fcc72c', icon: 'user', count: '365', title: '新增用户数'},
        {color: '#fa656d', icon: 'profile', count: '36', title: '新增订单数'},
        {color: '#85affa', icon: 'shopping', count: '35', title: '新增商品数'}]
      return {
        card
      }
    }
  }
</script>

<style lang="less" scoped>
  .card-main {
    text-align: center;
    color: #6f6f6f;
    font-size: 16px;
    border-radius: 20px;
    overflow: hidden;

    .main {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .info {
      display: flex;
      line-height: 66px;
      font-size: 40px;

      .shape {
        width: 66px;
        height: 66px;
        border-radius: 50%;
        color: #fff;
        margin-right: 20px;
      }
    }
  }
</style>