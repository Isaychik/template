import './assets/main.css'
import { Icon } from '@iconify/vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('Icon', Icon)

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

app.use(pinia)
app.use(router)

app.mount('#app')
