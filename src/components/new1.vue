<template>
  <div>
    <a>aaaaaaaa</a>
    <el-button v-on:click="greet">你好</el-button>
  </div>
</template>
<script>
export default {
  name: 'eee',
  data() {
    return {
      msg: 'this is a demo'
     }
  },
    methods: {
      greet: function (event) {
        alert(this.msg)
        if(event){
          alert(event.target.tagName)
        }
      }
    }
  }
</script>
<style>
</style>
