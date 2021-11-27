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
    path: '/example',
    name: 'Example',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Example.vue')
    },
  },
  {
    path: '/moneywallet',
    name: 'MoneyWallet',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/MoneyWallet.vue')
    },
  },
  {
    path: '/datatransfer',
    name: 'DataTransfer',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/DataTransfer.vue')
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
