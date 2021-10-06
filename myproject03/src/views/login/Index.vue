
<template>
  <div class="body">
    <div class="container">
    <el-row type="flex" class="row-bg" justify="center">
  <el-col :span="5">
       <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm" style='color:#fff;'>

  <el-form-item label="姓名" prop="name" >
    <el-input v-model="ruleForm.name" style="width:300px;"></el-input>
  </el-form-item>

  <el-form-item label="密码" prop="password" >
    <el-input v-model="ruleForm.password" type='password' style="width:300px;"></el-input>
  </el-form-item>

   <el-form-item>
    <el-button type="primary" round @click="submitForm('ruleForm')" id='mybtn'>登录</el-button>
    <!-- <el-button @click="resetForm('ruleForm')" size="small">重置</el-button> -->
  </el-form-item>

    </el-form>
  </el-col>
  </el-row>
  </div>
  </div>
</template>


<script>
export default {
  name:'Login',
  data() {
    return {
      ruleForm:{
        name:'',
        password:''
      },
      rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
          ],
      }
    }
  },
  
  methods:{
    //重置表单
    // resetForm(formName) {
    //     this.$refs[formName].resetFields();
    //   },
   //提交表单 跳转
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push('home')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
     },
  }

}
</script>

<style >



.body{
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: url('../../../public/2.jpeg');
  background-size: cover;
}
.container{
  margin: 0 auto;
  margin-top: 30vh;
  margin-left: -10vw;

}
.el-form-item__label{
  color: #fff;
  margin-left: 0px;
}
#mybtn{
  background: rgb(86, 126, 141);
}
.el-input__inner{
    background: #7aa0af;
    color: #fff;
    border: 1px solid #7ab0af;
}


</style>