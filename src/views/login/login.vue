<template>
  <div class="formbox">
  <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
              v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
              placeholder="Username"
      >
        <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
              v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
              type="password"
              placeholder="Password"
      >
        <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>

<!--      <a class="login-form-forgot"  href=""  >忘记密码</a>-->
      <a-button  type="primary"  html-type="submit"  class="login-form-button" >登录</a-button>

  </a-form>
  </div>
</template>

<script>

  export default {
    beforeCreate () {
      this.form = this.$form.createForm(this);
    },
    name: "login",
    data(){
      return{
      }
    },
    methods: {
      handleSubmit (e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            window.sessionStorage.setItem('userName', values.userName)
            //this.$store.state.menu = generator(menuData)
            this.$router.push({path: '/home'})
          }
        });
      },
    },
  }
</script>

<style scoped>
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
  .formbox{width: 300px;margin: 0 auto}

</style>
