<template>
  <div class="user">
  <h1>用户管理</h1>
  <div class="user-container">
  <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.user{
  position: absolute; 
  width:100%;
  
  }
/* 二级子容器 */
.user-container{
  position: absolute;
  top: 8vh;
}
</style>