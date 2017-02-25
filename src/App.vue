<template>
  <div>
    <messages-view style="flex:1"></messages-view>
  </div>
</template>

<script>
  import MessagesView from './views/MessagesView.vue'
  export default {
    name: 'app',
    components: {
      MessagesView
    }
  }
</script>
