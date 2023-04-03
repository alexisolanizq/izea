import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Vue3Toasity from 'vue3-toastify';
import OhVueIcon from '@/plugins/icons'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'swiper/css';
import 'vue3-toastify/dist/index.css';
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(Vue3Toasity, {autoClose: 5000})
app.use(router)
app.component('v-icon', OhVueIcon)
app.mount('#app')
