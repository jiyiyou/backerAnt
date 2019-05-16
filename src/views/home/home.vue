<template>
  <div>
    <div class="title">新增数据统计</div>
    <dataSet/>
    <count/>
    <div class="title">待办事项</div>
    <toDo/>
    <sale/>
  </div>
</template>

<script>
  import dataSet from './components/DataSet'
  import count from './components/count'
  import toDo from './components/to-do'
  import sale from './components/sale'

  export default {
    name: "Home",
    components: {dataSet, count, toDo, sale},

  }
</script>

<style lang="less" scoped>
  .title {
    font-size: 18px;
    color: #272727;
    line-height: 60px;
  }


</style>
