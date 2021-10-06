<template>
  <div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style='height:99vh'
      router
      >
       
    <el-menu-item index="/index">
         <i class="el-icon-location"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-menu-item index="/stats">
        <i class="el-icon-menu"></i>
        <span slot="title">数据管理</span>
      </el-menu-item>

      <el-submenu index="/wms">
          <template slot="title"> <i class="el-icon-s-promotion"></i>信息管理</template>
          <el-menu-item index="/wms/list"><i class="el-icon-notebook-2"></i>信息列表</el-menu-item>
      </el-submenu>

        <el-submenu index="/user">
          <template slot="title"><i class="el-icon-user-solid"></i>用户管理</template>
          <el-menu-item index="/user/list"><i class="el-icon-pie-chart"></i>用户统计</el-menu-item>
          <el-menu-item index="/user/role"><i class="el-icon-pie-chart"></i>角色统计</el-menu-item>
        </el-submenu>
        
    </el-menu>
  </div>
</template>

<script>
export default {
  name:'Nav',
  methods:{
     handleOpen(key, keyPath) {
        
      },
      handleClose(key, keyPath) {
        
      }
  }

}


</script>

<style>
 

</style>