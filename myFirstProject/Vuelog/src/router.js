import { createWebHistory, createRouter } from "vue-router";
import TextList from "./components/TextList.vue";
import TextDetail from "./components/TextDetail.vue";
import NavBar from "./components/NavBar.vue";

const routes = [
  {
    path: "/TextList",
    component: TextList,
  },
  {
    path: "/TextList/Detail/:id",
    component: TextDetail,
  },
  {
    path: "/TextList",
    component: NavBar,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
