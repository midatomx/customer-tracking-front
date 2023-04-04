import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { createRouter, createWebHashHistory } from 'vue-router'
import About from '@/components/About'
import ProspectNew from '@/components/prospects/ProspectNew'
import CartypeNew from '@/components/cartypes/CartypeNew'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import ProspectsHome from '@/components/prospects/ProspectsHome'
import CartypeHome from '@/components/cartypes/CartypeHome'

// components
// const Home = { template: '<h1>Home</h1>' }
// const About = { template: '<h1>About</h1>' }

// routes
const routes = [
  { path: '/', component: ProspectsHome, name: 'home' },
  { path: '/carthome', component: CartypeHome, name: 'carthome' },
  { path: '/n-about/:aboutId', component: About, name: 'about' },
  { path: '/cartype', component: CartypeNew, name: 'cartype' },
  { path: '/prospect', component: ProspectNew, name: 'prospect' }
]

// route object from vue router
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
