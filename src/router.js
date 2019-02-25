import Vue from 'vue'
import Router from 'vue-router'
import PostList from './components/PostList'
import Article from './components/Article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        main:PostList
      }
    },
    {
      path: '/topic/:id',
      name:'post_content',
      components: {
        main:Article,
      }
    },
  ]
})
