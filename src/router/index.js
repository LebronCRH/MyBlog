import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainLayout from '@/layouts/mainlayout'
import Home from '@/pages/Home/index'
import MarkDown from '@/pages/Markdown/CreateArticle'
import BlogDetails from '@/pages/Blog/blogdetails'
import BlogIndex from '@/pages/Blog/blogIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainLayout,
      children:[
        {
          path:'',
          component: Home,
        },
        {
          path:'/detail',
          component: BlogDetails,
        },
        {
          path:'/blogIndex',
          component: BlogIndex,
        }
      ]
    },
    {
      path:'/markdown',
      component: MarkDown,
    }
  ]
})
