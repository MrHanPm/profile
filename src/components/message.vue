<template>
  <div class="message">
    <div class="icon">
      <image class="icon-message" src="https://s.kcimg.cn/app/icon/weex/message.png"></image>
    </div>
    <div v-if="message.type == 0" class="point"></div>
    <text class="content">{{message.content}}</text> 
    <text class="date">{{message.add_time}}</text>
    <div class="remove" @click="remove">
      <image class="icon-remove" src="https://s.kcimg.cn/app/icon/weex/remove.png"></image>
    </div>
  </div>
</template>
<script>
	export default {
    props: {
      message: {
        type: Object,
        required: true
      },
      index:{
        type: Number,
        required: true  
      }
    },
    methods:{
      remove (){
        this.$emit('remove',this.index);
      }
    }
  }
</script>

<style scoped>
  .message{
    position: relative;
    padding-left:90px;
    padding-top:20px;
    padding-bottom:30px;
    border-bottom-width: 1px;
    border-bottom-style:solid;
    border-bottom-color:#e3eaf7; 
    background-color: #fff; 
  }
	.icon{
    position: absolute;
    left:0;
    top:30px;
    width:60px;
    height:60px;
    color:#fff;
    border-radius: 50%;
    background-color: #89B8F5;
  }
  .icon-message{
    margin-left:15px;
    margin-top:13px;
    width:32px;
    height:32px;
  }
  .point{
    position: absolute;
    left:42px;
    top:26px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border-width:2px;
    border-style:solid;
    border-color:#fff;
    background-color: #DA242A;
  }
  .content{
    font-size: 28px;
    line-height: 46px;
    padding-right: 80px;
    word-break: break-all;
    word-wrap: break-word;
  }
  .date{
    margin-top:20px;
    font-size: 24px;
    line-height:30px;
    color: #8794AD;
  }
  .remove{
    position: absolute;
    width:48px;
    height:48px;
    right:28px;
    bottom:18px;
  }
  .icon-remove{
    margin-left:12px;
    margin-top:12px;
    width:24px;
    height:24px;
  }

</style>