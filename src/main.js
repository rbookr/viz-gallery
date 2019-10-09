import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import index from './index.vue'
Vue.use(vueRouter)


import vizGallery from './components/viz-gallery.vue'

Vue.config.productionTip = false

const routes = [
  {
    path:'/',component:index
  },
  { path:'/viz-gallery',component:vizGallery}
]

const router = new vueRouter({routes})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
