<template>
  <a-table :columns="columns" :dataSource="[...data,...data,...data]" bordered>

  </a-table>
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
    title: '状态',
    dataIndex: 'address',
    customRender: (text, record, index) => {
      return text === 1 ? '待收货' : '待发货'
    }
  }];

  const data = [{
    key: '01',
    name: '2019新款牛仔短裙显瘦纯棉',
    age: 962347895622336975,
    address: 1,
  }];

  export default {
    name: 'to-do',
    data() {
      return {
        data,
        columns,
      }
    }
  }
</script>
