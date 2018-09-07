import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Games from '@/components/games/games'
import Mtui from '@/components/mintuitest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/games',
      name: 'games',
      component: Games
    },
    {
      path: '/mtui',
      name: 'Mtui',
      component: Mtui
    }
  ]
})
