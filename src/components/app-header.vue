<template>
  <div class="header">
      <div class="back">
        <div class="icon"></div>
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
  .icon{
    margin-top:30px;
    margin-left: 45px;
    width:27px;
    height:27px;
    border-left-width: 3px;
    border-top-width: 3px;
    border-left-style: solid;
    border-top-style: solid;
    border-left-color:#999;
    border-top-color: #999;
    transform: rotate(-45deg);
  }
  .title {
    flex:1;
    color:#333;
    font-size: 32px;
    text-align: center;
  }
</style>
