<template>
  <div class='home-index'>
    
  <el-container>
     
  <el-aside width="200px" >
        <Nav></Nav>
  </el-aside>

  <el-container>
    <el-header class="myheader">
      <bread-crub class="mybread"></bread-crub>
    </el-header>

    <el-main class="mymain">

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
    height: 10vh;
    position: relative;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 100vh;
  }
  
  .home-index .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 90vh;
     }
  
  body > .el-container {
    margin-bottom: 10vh;
  }
 
  .el-header.myheader{
    background: url('../../../public/dht.jpeg');
    opacity: .6;
    border-radius: 5px;
    background-size: cover;
    
  }
  .mybread{
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
  }
  /* 主容器 相对定位 */
  .mymain{
    position:relative;
    
    
  }
/* 一级子容器 */
  .mycontainer{
    
   
  }
</style>

