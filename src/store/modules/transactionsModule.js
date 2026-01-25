import { getCustomers } from "../../services/api/getCustomers.service";

export const transactionsModule = {
  state: {
    fetchedData: null,
    selectedTransactionData: null,
  },
  getters: {
    transactionsData(state) {
      const transactionsDataArray = [];
      if (state.fetchedData) {
        for (let user of state.fetchedData.users) {
          transactionsDataArray.push({
            fullName: `${user.firstName} ${user.lastName}`,
            orderAmount: `$${user.height}`,
            transactionId: Math.ceil(user.weight),
            cardNumber: user.bank.cardNumber,
            accountNumber: user.bank.iban,
            address: user.address.address,
            atmLocation: [user.address.coordinates.lng, user.address.coordinates.lat],
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
    setSelectedTransactionData(state, data) {
      state.selectedTransactionData = data;
    }
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
