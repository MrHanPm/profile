<template>
  <div class="header">
      <div class="back">
        <div class="icon"></div>
        <text class="back-text">返回</text>
      </div>
      <text class="title">{{title}}</text>
  </div>
</template>

<script>
  export default {
    name:'app-header',
    props:['title']
  }  
</script>

<style scoped>
  .header {
    position: relative;
    height: 88px;
    padding-left:120px;
    padding-right: 120px;
    background-color: #fff;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    border-bottom-width:1px;
    border-bottom-style:solid;
    border-bottom-color:#e3eaf7;
  }
  .back{
    position: absolute;
    left:0;
    top:0;
    width: 120px;
    height:88px;
  }
  .back-text{
    padding-left:36px;
    padding-top:30px;
    font-size: 28px;
    color:#666;
  }
  .title {
    flex:1;
    color:#333;
    font-size: 32px;
    text-align: center;
  }
</style>
