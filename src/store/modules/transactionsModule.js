import { getCustomers } from "../../services/api/getCustomers.service";

export const transactionsModule = {
  state: {
    fetchedData: null,
    selectedTransactionData: null,
    transactionsDataArray: [],
  },
  getters: {
    transactionsData(state) {
      if (state.fetchedData) {
        for (let user of state.fetchedData.users) {
          state.transactionsDataArray.push({
            fullName: `${user.firstName} ${user.lastName}`,
            orderAmount: `$${user.height}`,
            transactionId: Math.ceil(user.weight),
            cardNumber: user.bank.cardNumber,
            accountNumber: user.bank.iban,
            address: user.address.address,
            atmLocation: [user.company.address.coordinates.lng, user.company.address.coordinates.lat],
            bankName: user.company.name,
          });
        }
      }
      return state.transactionsDataArray;
    },
    totalTransactions(state) {
      return state.fetchedData.total;
    }
  },
  mutations: {
    setTransactionsData(state, fetchedData) {
      state.fetchedData = fetchedData;
    },
    setSelectedTransactionData(state, data) {
      state.selectedTransactionData = data;
    },
  },
  actions: {
    async fetchTransactionsData({ commit }, queryParams) {
      try {
        commit(
          "setTransactionsData",
          await getCustomers(queryParams),
        );
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    },
  },
};
