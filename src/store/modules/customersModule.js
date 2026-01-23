import { getCustomers } from "../../services/api/getCustomers.service";

export const customersModule = {
  state: {
    fetchedData: null,
    queryParams: {
      limit: 10,
      skip: 0,
      sortBy: null,
      order: "asc",
      search: "",
    },
  },
  getters: {
    customersData(state) {
      const customersDataArray = [];
      if (state.fetchedData) {
        for (let user of state.fetchedData.users) {
          customersDataArray.push({
            cid: user.id,
            fullName: `${user.firstName} ${user.lastName}`,
            city: user.address.city,
            state: user.address.stateCode,
            address: user.address.address,
            phoneNumber: user.phone,
            balance: user.address.postalCode + ".00",
          });
        }
      }
      return customersDataArray;
    },
  },
  mutations: {
    setLoading(state, bool) {
      state.isLoading = bool;
    },
    setCustomersData(state, fetchedData) {
      state.fetchedData = fetchedData;
    },
    setLimit(state, number) {
      state.queryParams.limit = number;
    },
    setSortingBy(state, string) {
      state.queryParams.sortBy = string;
    },
    setSortingOrder(state, string) {
      state.queryParams.order = string;
    },
  },
  actions: {
    async fetchCustomersData({ state, commit }) {
      try {
        console.log("Query params -", state.queryParams);
        commit("setCustomersData", await getCustomers(state.queryParams));
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    },
  },
};
