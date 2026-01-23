import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import CustomersView from "../views/CustomersView.vue";
import TransactionsView from "../views/TransactionsView.vue";

const routes = [
  { path: "/", component: DashboardView },
  { path: "/customers", component: CustomersView },
  { path: "/transactions", component: TransactionsView },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
