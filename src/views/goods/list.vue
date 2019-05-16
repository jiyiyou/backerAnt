<template>
  <div>
    <a-tabs defaultActiveKey="1" @change="callback">
      <a-tab-pane tab="已上架" key="1" forceRender>
        <a-table :rowSelection="rowSelection" :columns="columns" :dataSource="data">

          <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>

          <span slot="customTitle"><a-icon type="smile-o"/>姓名</span>

          <span slot="tags" slot-scope="tags">
      <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
          </span>
          <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
          <span slot="action" slot-scope="text, record">
            <a href="javascript:;">详情{{record.name}}</a><a-divider type="vertical"/>
            <a href="javascript:;" >修改</a><a-divider type="vertical"/>
            <a href="javascript:;">删除</a>

    </span>
        </a-table>
      </a-tab-pane>
      <a-tab-pane tab="Tab 2" key="2">
        仓库
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
  const columns = [{
    dataIndex: 'name',
    key: 'name',
    title: '姓名',
    //slots: {title: 'customTitle'},
    scopedSlots: {customRender: 'name'},

  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '标志',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: {customRender: 'tags'},
  }, {
    title: '操作',
    key: 'action',
    scopedSlots: {customRender: 'action'},
  }];

  const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }];

  export default {
    name: "list",
    data() {
      return {
        data,
        columns,
      }
    },
    computed: {
       rowSelection() {
         const { selectedRowKeys } = this;
         return {
           onChange: (selectedRowKeys, selectedRows) => {
             console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
           },
           getCheckboxProps: record => ({
             props: {
               disabled: record.name === 'Disabled User', // Column configuration not to be checked
               name: record.name,
             }
           }),
         }
      }
    },
    methods: {
      //标签切换
      callback(key) {
        console.log(key)
      },

    },
  }
</script>

<style scoped>
</style>
