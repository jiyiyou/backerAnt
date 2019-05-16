<template>
  <div>
    <a-table :rowSelection="rowSelection" :columns="columns" :dataSource="data">
      <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
      <span slot="action" slot-scope="text, record">
            <a href="javascript:;" @click="showDrawer(record , 1)">详情{{record.name}}</a><a-divider type="vertical"/>
            <a href="javascript:;" @click="showDrawer(record , 2)">修改</a><a-divider type="vertical"/>
            <a href="javascript:;">删除</a>
      </span>
    </a-table>
    <a-drawer
            title="Create a new account"
            :width="720"
            @close="onClose"
            :visible="visible"
            :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}"
    >
      <a-form :form="form" layout="vertical" hideRequiredMark>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Name">
              <a-input :disabled="disabled"  v-decorator="['name', {
                  rules: [{ required: true, message: 'Please enter user name' }]
                }]" placeholder="Please enter user name"  />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Url">
              <a-input
                      v-decorator="['url', {
                  rules: [{ required: true, message: 'please enter url' }]
                }]"
                      style="width: 100%"
                      addonBefore="http://"
                      addonAfter=".com"
                      placeholder="please enter url"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Owner">
              <a-select
                      v-decorator="['owner', {
                  rules: [{ required: true, message: 'Please select an owner' }]
                }]"
                      placeholder="Please a-s an owner"
              >
                <a-select-option value="xiao">Xiaoxiao Fu</a-select-option>
                <a-select-option value="mao">Maomao Zhou</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Type">
              <a-select
                      v-decorator="['type', {
                  rules: [{ required: true, message: 'Please choose the type' }]
                }]"
                      placeholder="Please choose the type"
              >
                <a-select-option value="private">Private</a-select-option>
                <a-select-option value="public">Public</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Approver">
              <a-select
                      v-decorator="['approver', {
                  rules: [{ required: true, message: 'Please choose the approver' }]
                }]"
                      placeholder="Please choose the approver"
              >
                <a-select-option value="jack">Jack Ma</a-select-option>
                <a-select-option value="tom">Tom Liu</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="DateTime">
              <a-date-picker
                      v-decorator="['dateTime', {
                  rules: [{ required: true, message: 'Please choose the dateTime' }]
                }]"
                      style="width: 100%"
                      :getPopupContainer="trigger => trigger.parentNode"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item label="Description">
              <a-textarea
                      v-decorator="['description', {
                  rules: [{ required: true, message: 'Please enter url description' }]
                }]"
                      :rows="4"
                      placeholder="please enter url description"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div
              :style="{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
        }"
      >
        <div :class="{active:show}">
          <a-button :style="{marginRight: '8px'}" @click="onClose(1)"   >取消 </a-button>
          <a-button @click="onClose(1)" type="primary">确定</a-button>
        </div>
      </div>
    </a-drawer>
  </div>
</template>

<script>
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' },
  }, {
    title: 'Age',
    dataIndex: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
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
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }, {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  }];

  export default {
    name: "publish",
    data() {
      return {
        disabled:true,
        show:true,
        data,
        columns,
        form: this.$form.createForm(this),
        visible: false,
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
    methods:{
      showDrawer( index , item ) {
       if(item==1){
         this.disabled=true
         this.show=true
         this.visible = true
         setTimeout(() => {
           this.form.setFieldsValue({
             name:"999"
           })
         }, 500)
       }else if(item==2){
         this.disabled=false
         this.show=false
         this.visible = true
         setTimeout(() => {
           this.form.setFieldsValue({
             name:"999"
           })
         }, 500)
       }
      },
      onClose(item) {
        if(item==1){
         alert(item)
        }

        this.visible = false
        // this.$form.createForm(this)
        this.form.validateFields((err, values) => {
          console.log(values)
        })
        this.form.resetFields()
      },
    },
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
  .active{display: none}
</style>
