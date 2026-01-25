import { createStore } from "vuex";
import { dashboardModule } from "./modules/dashboardModule";
import { customersModule } from "./modules/customersModule";
import { transactionsModule } from "./modules/transactionsModule";
import { authModule } from "./modules/authModule";

export const store = createStore({
  modules: {
    dashboardModule,
    customersModule,
    transactionsModule,
    authModule,
  },
  state: {
    isAuth: false,
  },
  mutations: {
    setIsAuth(state, bool) {
      state.isAuth = bool;
    }
  }
});
