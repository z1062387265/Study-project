<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" class="grid-content bg-purple" style="background: #409eff">

      </el-col>
      <el-col :span="6" class="grid-content bg-purple" style="background: #409eff">

      </el-col>
      <el-col :span="6" class="grid-content bg-purple" style="background: #409eff">

      </el-col>
      <el-col :span="6" class="grid-content bg-purple" style="background: #409eff">

      </el-col>
    </el-row>
    <router-link to="/hello/show" tag="el-button" class="el-button--success">123</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Fsd from './fsd'
import new1 from './new1'
export default {
  components: {Fsd, new1},
  name: 'HelloWorld',
  data () {
    return {
      msg: 'This is demo',
      id: 1,
      mm: 'haha',
      see: true,
      xx: [
        { text: 'Vue' },
        { text: 'Angular' },
        { text: 'JavaScript' },
        {text1: '江湖大梦'}
      ]
    }
  },
  // mounted () {
  //   this.reverseMessage()
  // },
  methods: {
    alert () {
      alert('ok!')
    },
    reverseMessage: function () {
      this.msg = this.msg.split('').reverse().join('')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
