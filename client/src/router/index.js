import { createWebHistory, createRouter } from "vue-router";
import About from "@/views/About.vue";
import Blog from "@/views/Blog.vue";
import Article from "@/views/Article.vue";
import Home from "@/views/Home.vue"

const routes = [
  {
    path: "/",
    name: 'Main',
    component: Home
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog/:id",
    name: "Article",
    component: Article
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;