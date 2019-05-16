<template>
  <a-row :gutter="16">
    <a-col :span="8">
      <div class="title">用户统计</div>
      <a-card hoverable class="card-main">
        <div class="info">用户总数</div>
        <div class="count">10069</div>
      </a-card>
    </a-col>
    <a-col :span="16">
      <div class="title">商品统计</div>
      <a-card hoverable class="card-main">
        <div id="c1"></div>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
  import G2 from '@antv/g2';

  export default {
    name: "count",
    data() {
      const data = [
        {year: '总商品数', sales: 38},
        {year: '已上架商品数', sales: 52},
        {year: '未上架商品数', sales: 61},
        {year: '待发商品数', sales: 145},
        {year: '待收商品数', sales: 48},
        {year: '全额退款商品数', sales: 38},
        {year: '退货退款商品数', sales: 38}]
      return {
        data
      }
    },
    methods: {
      charts() {
        const chart = new G2.Chart({
          container: 'c1',
          forceFit: true,
          height: 270
        });
        chart.source(this.data);
        chart.scale('sales', {
          alias: '订单量',
          tickInterval: 20
        });
        chart.interval().position('year*sales');
        chart.render();
        setTimeout(() => {
          chart.forceFit(); // 手动调用自适应函数
        })
      }
    },
    mounted() {
      this.charts()
    }
  }
</script>

<style lang="less" scoped>
  .title {
    font-size: 18px;
    color: #272727;
    line-height: 60px;
  }

  .card-main {
    border-radius: 20px;
    height: 270px;
    text-align: center;

    .info {
      font-size: 16px;
      color: #272727;
    }

    .count {
      margin-top: 40px;
      font-size: 52px;
      background-image: -webkit-gradient(linear, 0 top, 0 bottom, from(#79c7ff), to(#379ef5));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
</style>