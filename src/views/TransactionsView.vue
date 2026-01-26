<script>
import TransactionDetails from '../components/TransactionDetails.vue';
import TransactionsListElement from '../components/TransactionsListElement.vue';
import MapContainer from '../components/MapContainer.vue';

export default {
  components: {
    TransactionsListElement,
    TransactionDetails,
    MapContainer,
  },
  data() {
    return {
      scrollY: 0,
    }
  },
  computed: {
    transactionsData() {
      return this.$store.getters.transactionsData;
    },
    selectedTransactionData() {
      return this.$store.state.transactionsModule.selectedTransactionData;
    },
    queryParams() {
      return this.$store.state.customersModule.queryParams;
    },
    transactionSummary() {
      return {
        firstRow: {
          title: "Payment",
          description: "Visa",
        },
        secondRow: {
          title: "CVV Response",
          description: "CVV2 Match (M)",
        },
        thirdRow: {
          title: "AVS Response",
          description: "Full Match (Y)",
        },
        fourthRow: {
          title: "Number",
          description: `${this.selectedTransactionData?.cardNumber.slice(0, 4)} ${this.selectedTransactionData?.cardNumber.slice(4, 6)}xx xxxx`,
        },
        fifthRow: {
          title: "Bank",
          description: this.selectedTransactionData?.bankName,
        },
      }
    },
    transactionAccount() {
      return {
        firstRow: {
          title: "Number",
          description: this.selectedTransactionData?.accountNumber,
        },
        secondRow: {
          title: "Order Amount",
          description: this.selectedTransactionData?.orderAmount,
        },
        thirdRow: {
          title: "Creation Date",
          description: "11/5/2022 3:12 PST",
        },
        fourthRow: {
          title: "Update Date",
          description: "11/5/2022 3:12 PST",
        },
        fifthRow: {
          title: "Last Order Ext. ID ",
          description: this.selectedTransactionData?.cardNumber.split("").reverse().join(""),
        },
      }
    },
  },
  methods: {
    getSelectedTransaction(data) {
      this.$store.commit("setSelectedTransactionData", data);
    },
    uploadNewTransactions(e) {
      const el = e.target;
      const limit = this.queryParams.limit
      if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
        this.$store.commit("setSkip", limit);
        this.$store.dispatch("fetchTransactionsData", this.queryParams);
      }
    }
  },
  mounted() {
    try {
      this.$store.dispatch("resetQueryParams");
      this.$store.dispatch("fetchTransactionsData");
    } catch (err) {
      console.log(err);
    }
  },
}
</script>

<template>
  <section class="transactions-page">
    <aside class="transactions-sidebar" ref="transactionsList" @scroll="uploadNewTransactions">
      <ul class="transactions-list">
        <TransactionsListElement v-for="customer in transactionsData" @select-transaction="getSelectedTransaction"
          :data="customer" order="3" />
      </ul>
    </aside>
    <div class="transactions-container">
      <h2 class="router-content__title">Fraudulent activity alert</h2>
      <template v-if="selectedTransactionData">
        <TransactionsListElement :data="selectedTransactionData" order="0" class="transaction_details-header" />
        <div class="transaction-details">
          <div class="transaction-wrapper">
            <TransactionDetails detailsType="Summary" :data="transactionSummary" />
            <TransactionDetails detailsType="Account" :data="transactionAccount" />
          </div>
          <div class="transaction-block transaction-block_alt">
            <h3 class="transaction-block__title">ATM</h3>
            <p class="transaction-block__value">{{ selectedTransactionData.address }}</p>
            <MapContainer :coordinates="selectedTransactionData?.atmLocation" />
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
.router-content__title {
  margin: 0;
  padding: 24px 24px 16px 24px;
}

.transactions-page {
  width: 100%;
  display: flex;
  height: calc(100vh - 80px);
  overflow-y: auto;
}

.transactions-sidebar {
  padding-top: 24px;
  overflow-y: auto;
}

.transactions-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.transactions-container {
  background-color: #E9EFF2;
  flex-grow: 2;
}

.transaction_details-header {
  margin: 8px 16px 4px 16px;
}

.transaction-details {
  display: flex;
  padding: 0 16px;
  gap: 4px;
}

.transaction-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.transaction-block_alt {
  flex-grow: 2;
}
</style>