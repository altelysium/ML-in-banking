import { createStore } from "vuex";
import { dashboardModule } from "./modules/dashboardModule";
import { customersModule } from "./modules/customersModule";
import { transactionsModule } from "./modules/transactionsModule";

export const store = createStore({
  modules: {
    dashboardModule,
    customersModule,
    transactionsModule,
  },
});
