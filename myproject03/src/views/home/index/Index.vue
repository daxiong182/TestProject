<template>
  <div style="overflow:hidden;min-width:1200px">
    <!-- 轮播图 -->
      <el-carousel :interval="3000" type="card" height="35vh" indicator-position="outside">
     <el-carousel-item v-for="item in imgLists" :key="item">
      <img :src="item" alt="imgs" style='width:100%;'>
    </el-carousel-item>
  </el-carousel>
  <!-- banner -->
  <el-row type="flex" class="row-bg" justify="center" :gutter='10'>

  <el-col :span="8" v-for="o in imgLists2" :key="o" >
    <el-card :body-style="{ padding: '0px' }">
      <img :src="o" class="image" style='width:100%;height:400px'>
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>

</div>
</template>

<script>
export default {
  name:'HomeIndex',
  data() {
    return {
      imgLists:[
        "./images/1.jpeg",
        "./images/2.jpeg",
        "./images/3.jpeg",
        "./images/4.jpeg",
        "./images/5.jpeg",
        "./images/6.jpeg",
      ],
      imgLists2:[
        "./images/8.jpeg",
        "./images/9.jpeg",
        "./images/7.jpeg",
      ],
       currentDate: new Date()
    }
  },
}

</script>

<style>


.el-carousel__item{
  border-radius:20px;
}

 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
</style>


