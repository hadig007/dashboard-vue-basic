import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import Dashboard from './components/Dashboard.vue'
import Pos from './components/Pos.vue'
import Orders from './components/Orders.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import NotFound from './components/NotFound.vue'
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', redirect:'home'},
        {path:'/home/', component:Dashboard,children:[
            {path:'dashboard', component:Home},
            {path:'pos', component:Pos},
            {path:'orders', component:Orders},
        ]},
        {path:'/login', component:Login},
        {path:'/sign-up', component: SignUp}, 
        {path:'/:NotFound(.*)', component: NotFound}, 
    ]
});

export default router;