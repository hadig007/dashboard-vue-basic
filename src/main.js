import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


// appstore for jwt

// import user from  './helpers/user'

const app = createApp(App)
app.use(router)
// app.use(user)

app.mount('#app')
