import { createWebHistory, createRouter } from "vue-router";

import TextList from './components/TextList.vue'
import TextDetail from './components/TextDetail.vue'

const routes = [
  {
    path: "/TextList",
    component: TextList,
  },
  {
    path: "/TextList/detail/:id",
    
    component: TextDetail,
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;