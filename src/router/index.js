import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    // {
    //   path: '/',  表示的是请求路径
    //   name: 'Home',  表示名称 可以不要
    //   component: Home  表示组件  的位置
    //  redirect: "/mian"       表示重定向
    // },

    {
        path: "/",
        redirect: "/main"
    },
    {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/login/index')
    },
    {
        path: '/main',
        name: 'main',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/main/index.vue'),
        children: [
            {
                path: 'index',
                name: 'index',
                component: () => import('../views/index/index.vue')
            }, {
                path: 'supplier',
                name: 'supplier',
                component: () => import('../views/supplier/index.vue')
            },{
                path: 'brand',
                name: 'brand',
                component: () => import('../views/brand/index.vue')
            },{
                path: 'category',
                name: 'category',
                component: () => import('../views/category/index.vue')
            }
        ]
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
