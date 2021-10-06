<template>
  <div>
    
  <el-container>
     
  <el-aside width="200px">
        <Nav></Nav>
  </el-aside>

  <el-container>
    <el-header>
      <bread-crub class="mybread"></bread-crub>
    </el-header>

    <el-main>
      <div class="mycontainer">
      <router-view></router-view>
      </div>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import BreadCrub from './BreadCrub.vue'
import Nav from './Nav.vue'
export default {
  name:'Home',
  components:{
    Nav,
    BreadCrub
  },
  data() {
    return {
      isCollapse: true
    }
  },
}

</script>

<style>

.el-header {
    background-color: #B3C0D1;
    color: #333;
    height: 10vh;
    text-align: center;
    line-height: 10vh;
    position: relative;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 95vh;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 85vh;
  }
  
  body > .el-container {
    margin-bottom: 10vh;
  }
  
  .mybread{
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
  }
  .mycontainer{
    width: 100%;
    height: 25%;
    padding: 0;
    margin: 0;
  }
</style>

