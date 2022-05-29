import { createRouter, createWebHistory } from "vue-router";
import ProfileInfo from "../views/ProfileInfo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ProfileInfo,
    },
    {
      path: "/education",
      name: "education",
      component: () => import("../views/EducationInfo.vue"),
    },
    {
      path: "/company",
      name: "company",
      component: () => import("../views/CompanyInfo.vue"),
    },
    {
      path: "/project",
      name: "project",
      component: () => import("../views/ProjectInfo.vue"),
    },
  ],
});

export default router;
