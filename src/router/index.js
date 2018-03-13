import Vue from 'vue'
import Router from 'vue-router'
import * as THREE from 'three'
import World from '@/components/world'
import Home from '@/components/Home'
import HelloWorld from '@/components/HelloWorld'
import new1 from '@/components/new1'
import c1 from '@/components/components_1'
import show from '@/components/show'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: '介绍',
      component: World
    },
    {
      path: '/Home',
      name: '首页',
      component: Home,
      children:[
        {path:'show',component:show}
      ]
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/new',
      name: 'new',
      component: new1
    },
    {
      path:'/c1',
      name:'c1',
      component:c1
    }
  ]
})
