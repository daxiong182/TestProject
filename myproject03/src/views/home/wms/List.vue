<template>

  <div class='message-list'>

    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span class="cardName">列表展示</span>
    <el-button style=" position: absolute;right:10px;top:5px" type="text" @click='submit'>数据添加</el-button>
  </div>
  <el-collapse v-model="activeNames" @change="handleChange" accordion>

  <el-collapse-item v-for='v in items' :key='v.id' :title="v.title" :name="v.id">
    <div v-for='(c,i) in v.content' :key='i'>{{c}}</div>
  </el-collapse-item>
 
</el-collapse>

</el-card>
<!-- 弹框 -->
<!-- <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="50%"
  class="mydialog"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog> -->

  </div>
</template>

<script>
export default {
  data() {
      return {
        activeNames: ['1'],
         items:[
          {
            id:"1",
            title:'一致性 Consistency',
            content:[
              "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；",
              "在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。"
            ]
          },
          {
            id:"2",
            title:'反馈 Feedback',
            content:[
              "控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；",
              "页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。"
            ]
          },
          {
            id:"3",
            title:'效率 Efficiency',
            content:[
              "简化流程：设计简洁直观的操作流程；",
              "清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；",
              "帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。"
            ]
          },
          {
            id:"4",
            title:'可控 Controllability',
            content:[
              "用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；",
              "结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。"
            ]
          },
        ]
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      
       submit(){
          this.$confirm('确定添加文件?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let _id=this.items.length>0?Math.max(...this.items.map(v=>v.id))+1:1;
          this.items.push({
            id:_id,
            title:`这是新添加的数据 == ${_id}`,
            content:['这是新添加的数据']
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });

       }
    }
}
</script>

<style>
.message-list{
  position: relative;

}
.box-card {
    width: 100vh;
    position: relative;
    
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  
  .cardName{
    position: absolute;
    left: 18px;
    top:8px
  }
  .v-modal{
    z-index: -1 !important;
  }

  .mydialog{
    position: absolute;
    
  }
</style>

