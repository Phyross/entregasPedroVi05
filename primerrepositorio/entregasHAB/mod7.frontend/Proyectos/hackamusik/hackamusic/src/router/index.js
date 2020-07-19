import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/toptracks',
    name: 'TopTracks',
    component: () => import(/* webpackChunkName: "about" */ '../views/TopTracks.vue')
  },
  {
    path: '/topartists',
    name: 'TopArtists',
   component: () => import(/* webpackChunkName: "about" */ '../views/TopArtists.vue')
  },
  {
    path: '*',
    name: 'Error',
   component: () => import(/* webpackChunkName: "about" */ '../views/Error.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
