import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView from '@/views/HomeView.vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/' ,name: 'Home', component: HomeView},
        {path: '/about', name: 'About', component: AboutView}

    ]

})
createApp(App).use(router).use(vuetify).mount('#app')
