<template>
  <div class="bread">
<el-breadcrumb separator="/">
  <el-breadcrumb-item v-for='v in lists' :key='v.path'>{{v.meta.title}}</el-breadcrumb-item>
  
</el-breadcrumb>
  </div>
</template>

<script>
export default {
  name:'BreadCrub',
  data() {
    return {
      lists:[]
    }
  },
  methods: {
    
  },
  mounted() {
    this.lists=this.$route.matched;
  },
  watch:{
    $route(to,from){
      console.log(to);
      this.lists=to.matched
    }
  }
}
</script>

<style>



</style>