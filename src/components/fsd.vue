<template>
  <div>
    <!--<p>{{ msg }}</p>-->
  </div>

</template>
<script>
  export default {
    name: 'fsd',
    props: ['id_id'],
    data() {
      return {
        // msg:'',
        // msg: 'This is demo'
      }
    },
    mounted(){
      console.log(this.$refs.fsd.mm)
    }
  }
</script>
<style scoped>
</style>
