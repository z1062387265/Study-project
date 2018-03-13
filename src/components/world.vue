<template>
  <div>
    <div id="container"></div>
    <components></components>
  </div>
</template>
<script>
  import components from './components_1'
  // import show from './show'
  export default {
    components:{components},
    name: 'home',
    data() {
      return {

      }
    },
    methods:{

    },
    mounted() {

    }
  }
</script>
<style scoped>
  #container{
    overflow: hidden;
    background: url("../../static/img/world/star.jpg") no-repeat;
    background-size: cover;
  }

</style>
