<template>
  <div class="bread">
<el-breadcrumb separator="/">
  <el-breadcrumb-item v-for='v in lists' :key='v.path'>
    <router-link :to='v.path'>{{v.meta.title}}</router-link>
     </el-breadcrumb-item>
  
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
    $route(to){
            this.lists=to.matched
    }
  }
}
</script>

<style>



</style>