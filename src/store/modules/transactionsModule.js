import { getCustomers } from "../../services/api/getCustomers.service";

export const transactionsModule = {
  state: {
    fetchedData: null,
  },
  getters: {
    transactionsData(state) {
      const transactionsDataArray = [];
      if (state.fetchedData) {
        for (let user of state.fetchedData.users) {
          transactionsDataArray.push({
            fullName: `${user.firstName} ${user.lastName}`,
            orderAmount: user.height,
            transactionId: Math.ceil(user.weight),
            cardNumber: user.bank.cardNumber,
            accountNumber: user.bank.iban,
          });
        }
      }
      return transactionsDataArray;
    },
  },
  mutations: {
    setTransactionsData(state, fetchedData) {
      state.fetchedData = fetchedData;
    },
  },
  actions: {
    async fetchTransactionsData({ commit }) {
      try {
        commit(
          "setTransactionsData",
          await getCustomers(),
        );
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    },
  },
};
