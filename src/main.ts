import { createApp } from 'vue'

import './assets/styles/all.scss'

import 'bootstrap/js/dist/collapse'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
