import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue")
    },
    {
      path: "/chelsea",
      name: "chelsea",
      component: () => import("../views/ChelseaView.vue")
    },
    {
      path: "/player/:id",
      name: "player.show",
      component: () => import("../views/PlayerView.vue"),
      props: (route) => ({ id: +route.params.id })
    }
  ]
})

export default router
