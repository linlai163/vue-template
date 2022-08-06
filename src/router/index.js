// src/router/index.js

import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'

const routes = [
    {
        path: '/404',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue')
    },
    {
        path: '/',
        name: 'Index',
        component: () => import(/* webpackChunkName: "about" */ '@/views')
    },
]

const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes
})

export default router
