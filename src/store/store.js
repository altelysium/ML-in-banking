import { createStore } from "vuex";
import { dashboardModule } from "./modules/dashboardModule";
import { customersModule } from "./modules/customersModule";

export const store = createStore({
  modules: {
    dashboardModule,
    customersModule,
  },
});
