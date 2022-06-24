import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/ProfileInfo.vue"),
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
    {
      path: "/project/:code",
      name: "projectCode",
      component: () => import("../views/ProjectInfo.vue"),
      props: true,
    },
  ],
});

export default router;
