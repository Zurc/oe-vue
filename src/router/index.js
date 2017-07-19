import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Entities from '@/components/Entity/Entities'
import CreateEntity from '@/components/Entity/CreateEntity'
import Services from '@/components/Services/Services'
import Plots from '@/components/Plots/Plots'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/entities',
      name: 'Entities',
      component: Entities
    },
    {
      path: '/entity/new',
      name: 'CreateEntity',
      component: CreateEntity
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/plots',
      name: 'Plots',
      component: Plots
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})
