<template>
  <div>
    <div class="flex">
      <div class="title">销售排行</div>
      <a-radio-group defaultValue="a" buttonStyle="solid">
        <a-radio-button value="a">日</a-radio-button>
        <a-radio-button value="b">月</a-radio-button>
        <a-radio-button value="c">年</a-radio-button>
      </a-radio-group>
    </div>
    <a-table :columns="columns" :dataSource="[...data,...data,...data]" bordered>

    </a-table>
  </div>
</template>
<script>
  const columns = [{
    dataIndex: 'key',
    title: '序号'
  }, {
    title: '商品名称',
    dataIndex: 'name'
  }, {
    title: '订单编号',
    dataIndex: 'age'
  }, {
    title: '已卖出',
    dataIndex: 'address'
  }];

  const data = [{
    key: '01',
    name: '2019新款牛仔短裙显瘦纯棉',
    age: 962347895622336975,
    address: 11414,
  }];

  export default {
    name: 'sale',
    data() {
      return {
        data,
        columns,
      }
    }
  }
</script>
<style lang="less" scoped>
  .title {
    font-size: 18px;
    color: #272727;
    line-height: 60px;
  }
</style>
