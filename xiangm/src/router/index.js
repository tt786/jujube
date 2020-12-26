import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/Login'
import Register from '../views/Register'
import Index from '../views/Index'
import Header from '../views/Header'
import Footer from '../views/Footer'
import Areas from '../views/Areas.vue'
import Me from '../views/Me.vue'
import Knowladge from '../views/Knowladge.vue'
import News from '../views/News.vue'
import Center from '../views/Center.vue'
import Detail from '../views/Detail.vue'
import NewsDetails from '../views/NewDetails.vue'


import NavList from '../components/NavList.vue'
import TitlePic from '../components/TitlePic.vue'
import Map from '../components/Map.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component: Register
    },
    {
      path:'/',
      component: Index
    },
    {
      path:'/header',
      component:Header
    },
    {
      path:'/footer',
      component:Footer
    },
    {
      path:'/me',
      component:Me
    },
    {
      path:'/news',
      component:News
    },
    {
      path:'/knowladge',
      component:Knowladge
    },{
      path:'/center',
      component:Center
    },
    {
      path:'/areas',
      component:Areas
    },
    {
      path:'/navList',
      name:NavList,
      component:NavList
    },
    {
      path:'/titlepic',
      component:TitlePic
    },
    {
      path:'/map',
      component:Map
    },
    {
      path:'/detail/:id',
      component:Detail
    },
    
  ]
})
