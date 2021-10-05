import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login/Index.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () =>
            import ('../views/home/Index.vue')
    }

]

const router = new VueRouter({
    routes
})

export default router