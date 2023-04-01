import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import OhVueIcon from '@/plugins/icons'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('v-icon', OhVueIcon)
app.mount('#app')
