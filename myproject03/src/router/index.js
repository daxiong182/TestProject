import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        redirect: '/login'
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
        meta: { title: "首页" },
        component: () =>
            import ('../views/home/Index.vue'),
        children: [{
                path: '/index', //首页
                name: 'index',
                meta: { title: "" },
                component: () =>
                    import ('../views/home/index/Index.vue')
            },

            {
                path: '/stats', //数据管理stats
                name: 'stats',
                meta: { title: "数据管理" },
                component: () =>
                    import ('../views/home/stats/Index.vue')
            },

            {
                path: '/wms', //信息管理wms
                name: 'wms',
                meta: { title: "信息管理" },
                component: () =>
                    import ('../views/home/wms/Index.vue'),
                children: [{
                    path: '/wms/list', //信息列表
                    name: 'wmsList',
                    meta: { title: "信息列表" },
                    component: () =>
                        import ('../views/home/wms/List.vue')
                }]
            },

            {
                path: '/user', //用户管理user
                name: 'user',
                meta: { title: "用户管理" },
                component: () =>
                    import ('../views/home/user/Index.vue'),
                children: [{
                        path: '/user/list',
                        name: 'wmsList',
                        meta: { title: "用户统计" },
                        component: () =>
                            import ('../views/home/user/List.vue')
                    },
                    {
                        path: '/user/role',
                        name: 'userole',
                        meta: { title: "角色统计" },
                        component: () =>
                            import ('../views/home/user/Role.vue')
                    },
                ]
            },

        ]
    },

]

const router = new VueRouter({
    routes
})

export default router