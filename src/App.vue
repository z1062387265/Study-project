<template>
      <div id="app">
        <router-view/>
      </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return{
        input_search:''
      }
    },
    methods: {

    },
    mounted(){

    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    outline: none;
  }
  body{
    overflow: hidden;
    height: 100%;
  }

  a {
    text-decoration: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
  .logo {
    width: 46px;
    float: left;
    margin: 7px 10px 0;
    text-align: center;
    display: block;
  }
  .el-input_icon{
    height: 100%;
    line-height: 40px;
    width: 25px;
  }
  .menu_search{
    margin: 10px 0 0;
  }
  .button_login{
    margin: 10px 0 0;
    background: rgba(0,0,0,0);
    color: #fff;
  }
</style>
