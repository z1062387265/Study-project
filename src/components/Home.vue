<template>
    <section class="content-wrapper">
      <header class="navbar navbar-white">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                  aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="fa fa-navicon" style="color: #fff;">Click！</span>
          </button>
          <a class="navbar-brand" href="#">
            <!--MY LOGO-->
            <img src="../../static/img/logo.png" alt="underground-sign">
          </a>
        </div>
        <!--<div id="navbar" class="collapse navbar-collapse">-->
        <!--<ul class="nav navbar-nav navbar-right">-->
        <!--<li class="active"><a href="#">首页</a></li>-->
        <!--<li><a href="#">我的文档</a></li>-->
        <!--</ul>-->
        <!--</div>-->
      </header>
      <div id="main">
        <div class="hero-overlay">
          <div class="main_vh">
            <div class="main_center">
              <div class="center">
                <h1>Welcome To My Blog Home</h1>
                <a href="main.html" class="btn btn-click sim-button button8">
                  Click to visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
  export default {
    name:'Home',
    data(){
      return{
        isCollapse: false
      }
    },
    methods:{

    }
  }
</script>
<style scoped>
  .user_img{
    width: 100px;
    border-radius:50% 50%;
    padding: 8px;
  }
  .sider-wapper{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 230px;
    height: 100%;
    background-color:#545c64
  }
  .sider-wapper .el-menu{
    width: 100%;
    border: 0;
  }
</style>
