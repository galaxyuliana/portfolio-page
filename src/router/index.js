import { createRouter, createWebHistory } from "vue-router";
import PersonalInfo from "../views/PersonalInfo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: PersonalInfo,
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
  ],
});

export default router;
