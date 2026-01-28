import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import CustomersView from "../views/CustomersView.vue";
import TransactionsView from "../views/TransactionsView.vue";
import LoginView from "../views/LoginView.vue";
import { store } from "../store/store";

const routes = [
  {
    path: "/",
    component: DashboardView,
    name: "Dashboard",
    meta: { requiresAuth: true },
  },
  {
    path: "/customers",
    component: CustomersView,
    name: "Customers",
    meta: { requiresAuth: true },
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: TransactionsView,
    meta: { requiresAuth: true },
  },
  { path: "/login", name: "Login", component: LoginView },
];
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach(async (to, from) => {
  if (!store.getters.isAuth && to.name !== "Login") {
    return { name: "Login" };
  }
  if (store.getters.isAuth && to.name === "Login") {
    return from;
  }
});
