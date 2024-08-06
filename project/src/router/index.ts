import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import chosenCharacter from '@/views/chosenCharacter.vue'
import Episodes from '@/views/Episodes.vue'
import chosenEpisode from '@/views/chosenEpisode.vue'
import chosenLocations from '@/views/chosenLocations.vue'
import Locations from '@/views/Locations.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView, 
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
  path: '/character/',
  name: 'character',
  component: chosenCharacter , 
  },
  {
  path: '/episodes',
  name: 'episodes',
  component: Episodes,
  },
 {
  path: '/chosenEpisode',
  name: 'chosenEpisode',
  component: chosenEpisode,
  },
  {
    path: '/locations',
    name: 'locations',
    component: Locations,
    },
    {
      path: '/chosenLocations',
      name: 'chosenLocations',
      component: chosenLocations,
      },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
