import { getDashboardData } from "../../services/api/getDashboardData.service";

export const dashboardModule = {
  state: {
    isFetched: false,
    dashboardData: null,
  },
  getters: {
    allTransactions(state) {
      return Math.round(state.dashboardData?.total);
    },
    pendingApproval(state) {
      return state.dashboardData?.totalQuantity;
    },
    approvedTransactions(state) {
      return Math.round(state.dashboardData?.discountedTotal);
    },
    rejectedTransactions(state) {
      return Math.round(
        state.dashboardData?.products[0].total -
          state.dashboardData?.products[0].discountedTotal,
      );
    },
  },
  mutations: {
    setFetched(state, bool) {
      state.isFetched = bool;
    },
    setDashboardData(state, fetchedData) {
      state.dashboardData = fetchedData;
    },
  },
  actions: {
    async fetchDashboardData({ commit }) {
      if (!this.state.dashboardModule.isFetched) {
        try {
          commit("setDashboardData", await getDashboardData());
        } catch (err) {
          console.log(`Error: ${err}`);
        } finally {
          commit("setFetched", true);
        }
      }
    },
  },
};
