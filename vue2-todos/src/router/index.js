import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import TodoPage from "@/pages/TodoPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      name: "HomeRoute",
      path: "/",
      component: HomePage,
      meta: {
        title: "首页",
      },
    },
    {
      name: "TodoPage",
      path: "/todos",
      component: TodoPage,
      meta: {
        title: "待办事项",
      },
    },
  ],
});

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
