import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Contact from '../components/Contact'
import About from '../components/About'

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
    component:About
  },
    {
      path: '/contact',
      name: 'Contact',
      component:Contact
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
