<template>
  <div class="message-wrapper">
    <app-header title="我的消息"></app-header>
    <div class="clear" @click="clear">
      <text class="clear-text">清空</text>   
    </div>
    <list class="messages-list" @loadmore="fetch" loadmoreoffset="10">
      <cell class="message-cell" v-for="(message,index) in messages" :key="message.id" @click="readed(index)">
        <message :message="message" :index="index"></message>
      </cell>  
    </list>
    <app-footer></app-footer>
  </div>
</template>

<style scoped>
  .message-wrapper{
    height:100%;
    background-color: #edf2fa;
  }
  .clear{
    position: absolute;
    right:0;
    top:0;
    height:88px;
  }
  .clear-text{
    width:120px;
    line-height:88px;
    color:#666;
    font-size: 28px;
    text-align:center;
  }
  .messages-list{
    padding-left:30px;
    background-color: #fff;
  }
</style>

<script>
  import AppHeader from '../components/app-header.vue';
  import Message from '../components/message.vue';
  import AppFooter from '../components/app-footer.vue';
  export default {
    components:{AppHeader,Message, AppFooter},
    data (){
      return {
        loading: true,
        messages:[
         {
            "type":0,
            "add_time":"2017-02-21 14:57:13",
            "content":"亲爱的用户：您已成功下单，订单834295967053250560，请您在15分钟内完成支付，否则订单将自动取消。感谢您的支持。",
            "id":11
          },
          {
            "type":1,
            "add_time":"2017-02-22 15:57:13",
            "content":"亲爱的用户：您已成功下单，订单334295967053250560，请您在5分钟内完成支付，否则订单将自动取消。感谢您的支持。",
            "id":12
          },
          {
            "type":0,
            "add_time":"2017-02-23 16:57:13",
            "content":"亲爱的用户：您已成功下单，订单134295967053250560，请您在2分钟内完成支付，否则订单将自动取消。感谢您的支持。",
            "id":13
          },
          {
            "type":0,
            "add_time":"2017-02-21 14:57:13",
            "content":"亲爱的用户：您已成功下单，订单834295967053250560，请您在15分钟内完成支付，否则订单将自动取消。感谢您的支持。",
            "id":14
          },
          {
            "type":1,
            "add_time":"2017-02-22 15:57:13",
            "content":"亲爱的用户：您已成功下单，订单334295967053250560，请您在5分钟内完成支付，否则订单将自动取消。感谢您的支持。",
            "id":15
          },
          {
            "type":0,
            "add_time":"2017-02-23 16:57:13",
            "content":"亲爱的用户：您已成功下单，订单134295967053250560，请您在2分钟内完成支付，否则订单将自动取消。感谢您的支持。",
            "id":16
          },
          {
            "type":0,
            "add_time":"2017-02-21 14:57:13",
            "content":"亲爱的用户：您已成功下单，订单834295967053250560，请您在15分钟内完成支付，否则订单将自动取消。感谢您的支持。",
            "id":17
          },
          {
            "type":1,
            "add_time":"2017-02-22 15:57:13",
            "content":"亲爱的用户：您已成功下单，订单334295967053250560，请您在5分钟内完成支付，否则订单将自动取消。感谢您的支持。",
            "id":18
          },
          {
            "type":1,
            "add_time":"2017-02-23 16:57:13",
            "content":"亲爱的用户：您已成功下单，订单134295967053250560，请您在2分钟内完成支付，否则订单将自动取消。感谢您的支持。",
            "id":19
          }
        ]
      }
    },
    methods:{
      clear(){
        return '111';
      },
      fetch (){
        return '222';
      },
      readed(i){
        this.messages[i].type = 1;
      },
      messageRemove (i){
        console.log('now')
      }
    }
  }
</script>
