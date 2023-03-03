import { createRouter, createWebHistory } from "vue-router";
import { checkAuth } from "@/helpers";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "main" },
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    meta: { layout: "main" },
    component: () => import("../views/CartView.vue"),
  },
  {
    path: "/catalog",
    name: "catalog",
    meta: { layout: "main" },
    component: () => import("../views/CatalogView.vue"),
  },
  {
    path: "/delivery",
    name: "delivery",
    meta: { layout: "main" },
    component: () => import("../views/DeliveryView.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    meta: { layout: "main" },
    component: () => import("../views/FaqView.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    meta: { layout: "main" },
    component: () => import("../views/BlogView.vue"),
  },
  {
    path: "/contacts",
    name: "contacts",
    meta: { layout: "main" },
    component: () => import("../views/ContactsView.vue"),
  },
  {
    path: "/products",
    name: "products",
    meta: { layout: "main" },
    component: () => import("../views/ProductsView.vue"),
  },
  {
    path: "/products/:slug",
    name: "productsCategory",
    meta: { layout: "main" },
    component: () => import("../views/ProductsView.vue"),
  },
  {
    path: "/product/:id",
    name: "product",
    meta: { layout: "main" },
    component: () => import("../views/ProductView.vue"),
  },
  {
    path: "/article/:slug",
    name: "article",
    meta: { layout: "main" },
    component: () => import("../views/ArticleView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    meta: { layout: "main" },
    component: () => import("../views/ErrorView.vue"),
  },
  {
    path: "/thanks",
    name: "Thanks",
    meta: { layout: "main" },
    component: () => import("../views/ThanksView.vue"),
  },
  // {
  //   path: "/profile",
  //   name: "profile",
  //   meta: { layout: "main" },
  //   component: () => import("../views/ProfileView.vue"),
  // },

  // admin

  {
    path: "/admin",
    name: "adminMain",
    meta: { layout: "admin" },
    component: () => import("../views-admin/AdminMainView.vue"),
  },
  {
    path: "/admin/login",
    name: "adminLogin",
    meta: { layout: "admin-login" },
    component: () => import("../views-admin/AdminLogin.vue"),
  },
  {
    path: "/admin/product/create",
    name: "adminProductCreate",
    meta: { layout: "admin" },
    component: () => import("../views-admin/AdminProductCreate.vue"),
  },
  {
    path: "/admin/product/edit/:id",
    name: "adminProductEdit",
    meta: { layout: "admin" },
    component: () => import("../views-admin/AdminProductEdit.vue"),
  },
  {
    path: "/admin/categories",
    name: "adminCategories",
    meta: { layout: "admin" },
    component: () => import("../views-admin/AdminCategories.vue"),
  },
  {
    path: "/admin/brands",
    name: "adminBrands",
    meta: { layout: "admin" },
    component: () => import("../views-admin/AdminBrands.vue"),
  },
  {
    path: "/admin/delivery",
    name: "adminDelivery",
    meta: { layout: "admin" },
    component: () => import("../views-admin/AdminDelivery.vue"),
  },
  {
    path: "/admin/blog",
    name: "adminBlog",
    meta: { layout: "admin" },
    component: () => import("../views-admin/AdminBlog.vue"),
  },
  {
    path: "/admin/blog/create",
    name: "adminBlogCreate",
    meta: { layout: "admin" },
    component: () => import("../views-admin/AdminBlogCreate.vue"),
  },
  {
    path: "/admin/blog/edit/:id",
    name: "adminBlogEdit",
    meta: { layout: "admin" },
    component: () => import("../views-admin/AdminBlogEdit.vue"),
  },
  {
    path: "/admin/serts",
    name: "adminSerts",
    meta: { layout: "admin" },
    component: () => import("../views-admin/AdminSerts.vue"),
  },
  {
    path: "/admin/faq",
    name: "adminFaq",
    meta: { layout: "admin" },
    component: () => import("../views-admin/AdminFaq.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.layout == "admin") {
    try {
      const check = await checkAuth();
      if (check.data.role == "admin") {
        next();
      } else {
        next({ name: "adminLogin" });
      }
    } catch (error) {
      next({ name: "adminLogin" });
    }
  } else {
    next();
  }
});

export default router;
