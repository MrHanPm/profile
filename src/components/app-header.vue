<template>
  <div class="header">
      <div class="back" @click="jump('/')">
        <text class="back-text">返回</text>
      </div>
      <text class="title">我的消息</text>
      <div class="clear" @click="clear">
        <text>清空</text>   
      </div>
  </div>
</template>

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
    
  }
  .back{
    position: absolute;
    left:0;
    top:0;
    width: 120px;
  }
  .back-text{
    line-height: 88px;
    text-align: center;
    font-family: "Microsoft YaHei"
  }
  .title {
    flex:1;
    line-height: 88px;
    color:#333;
    text-align: center;
    font-family: "Microsoft YaHei"
  }
</style>
