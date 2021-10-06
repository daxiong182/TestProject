<template>
  <div>
    <el-progress :text-inside="true" :stroke-width="22" :percentage="percentages" status="warning" class="myprogress"></el-progress>
    <el-steps :active="active" finish-status="success" class="mysteps">
  <el-step title="步骤 1" ></el-step>
  <el-step title="步骤 2" ></el-step>
  <el-step title="步骤 3" ></el-step>
</el-steps>

<el-button style="margin-top: 12px;" @click="next" class="userButton">下一步</el-button>
  </div>
</template>

<script>
export default {
  name:'UserList',
   data() {
      return {
        active: 0,
        percentages:0,
      };
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
        this.percentages+=100/3
        if(this.percentages>100){
          this.percentages=0
        }
      }
    }
}
</script>

<style>
.mysteps{
  top: 10vh;
  width: 100vh;
  position: relative;
  left: 50%;
  transform: translateY(-50%);
}
.myprogress{
   top: 6vh;
  width: 100vh;
  position: relative;
  left: 50%;
  transform: translateY(-50%);
}
.userButton{
  position: relative;
  top:12vh;
}


</style>
