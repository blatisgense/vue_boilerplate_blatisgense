import {createRouter, createWebHashHistory, RouteLocationNormalized, Router} from "vue-router";
import {routes} from "@router/routes.ts"

export const router: Router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized)  => {})
