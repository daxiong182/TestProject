<template>
  <div class="wms">
    <h1>信息管理</h1>
    <div class="wms-container">
<router-view></router-view>
    </div>
   
  </div>
</template>

<script>
export default {

}
</script>

<style>
.wms{
  position: absolute; 
  width:100%;
  }
  /* 二级子容器 */
.wms-container{
  position: absolute;
  height: 200px;
   top: 8vh;
  left: 50%;
  transform: translateX(-50%);
}


</style>