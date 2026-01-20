import { createStore } from "vuex";
import { dashboardModule } from "./modules/dashboardModule";

export const store = createStore({
  modules: {
    dashboardModule,
  },
});
