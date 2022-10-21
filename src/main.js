import { createApp } from 'vue'
import App from './App.vue'
import 'vue-simple-calendar/dist/style.css'
import '@/assets/css/lib/sample-calender/default.css'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
