<template>
  <div class="wms">
    <h1>信息管理</h1>
    <div class="container">
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
  position: relative; 
  }
.container{
  position: absolute;
  top: 300px;
}
</style>