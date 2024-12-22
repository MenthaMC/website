import {createRouter, createWebHistory} from "vue-router";
import main from '@/main.vue'

const routes = [
    { name: 'Main', path: '/', component: main },
    { path: '/:pathMatch(.*)', component: () => import("@/404.vue") },
    { name: 'Search', path: '/search', component: () => import("@/search.vue") },
]

export default createRouter({
    routes,
    history: createWebHistory()
})
