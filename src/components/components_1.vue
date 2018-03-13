<template>
  <div :class="{ login_name:is_name }">
    <div class="input_name">{{ name }}</div>
  </div>
</template>
<script>
  import Three from '../../static/js/world'
  export default{
    name: 'components_1',
    data() {
      return {
        name:'我叫Jack',
        index:0,
        is_name:false
      }
    },
    methods:{

    },
    mounted() {
      Three.admin();
      let _this = this;
      this.is_name = true;
      let int = setInterval(function(){
        _this.index++;
        switch (_this.index){
          case 1:
            _this.name = '我来自江西抚州，嗯...大概在这个位置';
            break;
          case 2:
            _this.name = '目前在深圳工作，小前端一枚';
            break;
          case 3:
            _this.name = '喜欢学习前端新技术，欢迎各路大佬指教';
            break;
          case 5:
            _this.name = '';
            _this.$router.push('home')
            break;
          default:
            _this.name = '';
            break;
        }
      },4200)
    }
  }
</script>
<style scoped>
  .input_name{
    color: #fff;
  }
  @-webkit-keyframes type{
    from { width: 0;}
  }

  @keyframes type{
    from { width: 0;}
  }
  .login_name{
    width: 500px;
    font-size: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transition: 1.5s;
    transform: translate(-50%,-50%);
    overflow:hidden;
    white-space:nowrap;
    -webkit-animation: type 4.2s steps(50, start) infinite;
    animation: type 4.2s steps(50, start) infinite;
  }
</style>
