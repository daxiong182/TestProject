<template>
  <div class='about'>
    <h1>数据统计</h1>
     <el-table :data="tableData" style="width: 100%;margin-top:10px" border height='460px' >
      <el-table-column prop="date" label="日期" align='center'></el-table-column>
      <el-table-column prop="name" label="姓名" align='center'></el-table-column>
      <el-table-column prop="address" label="地址" align='center'></el-table-column>
     </el-table>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name:'StatsIndex',
  data() {
    return {
      tableData:[],
    }
  },
  mounted() {
    // this.getTable()
  },
  methods: {

    // getTable(){
    //   axios.get('http://127.0.0.1:3333/tablist').then(res => {
    //     console.log(res)
    //   },err=>{
    //     console.log(err);
    //   })
     // }
  },

}



</script>

<style>




</style>