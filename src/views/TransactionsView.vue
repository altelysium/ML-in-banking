<script>
import TransactionDetails from '../components/TransactionDetails.vue';
import TransactionsListElement from '../components/TransactionsListElement.vue';
import MapContainer from '../components/MapContainer.vue';
import BaseButton from '../components/ui/BaseButton.vue'

export default {
  components: {
    TransactionsListElement,
    TransactionDetails,
    MapContainer,
    BaseButton,
  },
  data() {
    return {
      scrollY: 0,
      isVisible: false,
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
    windowWidth() {
      return this.$store.state.windowWidth;
    },
  },
  methods: {
    getSelectedTransaction(data) {
      this.$store.commit("setSelectedTransactionData", data);
      if (this.windowWidth < 850) {
        this.isVisible = true;
      }
      console.log(this.isVisible)
    },
    uploadNewTransactions(e) {
      const el = e.target;
      const limit = this.queryParams.limit
      if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
        this.$store.commit("setSkip", limit);
        this.$store.dispatch("fetchTransactionsData", this.queryParams);
      }
    },
    randomize() {
      return Math.random();
    },
    closeWindow() {
      this.isVisible = false;
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
          :data="customer" :randomizer-result="randomize()" order="3" />
      </ul>
    </aside>
    <Teleport to="body" :disabled="windowWidth > 850">
      <div class="transactions-container" v-if="windowWidth > 850 || isVisible">
        <h2 class="router-content__title">Fraudulent activity alert
        </h2>
        <template v-if="selectedTransactionData">
          <TransactionsListElement :data="selectedTransactionData" order="0" class="transaction_details-header"
            :is-header="true" />
          <div class="transaction-details">
            <div class="transaction-wrapper">
              <TransactionDetails detailsType="Summary" :data="transactionSummary"
                :description-color="{ color: '#4CAF50' }"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="20"
                  viewBox="0 0 28 20" fill="none">
                  <path
                    d="M3 0C1.355 0 0 1.355 0 3V17C0 18.645 1.355 20 3 20H25C26.645 20 28 18.645 28 17V3C28 1.355 26.645 0 25 0H3ZM3 2H25C25.565 2 26 2.435 26 3V17C26 17.565 25.565 18 25 18H3C2.435 18 2 17.565 2 17V3C2 2.435 2.435 2 3 2ZM17.406 6.375C15.48 6.375 14.469 7.325 14.469 8.531C14.469 10.714 17.029 10.411 17.029 11.531C17.029 11.724 16.869 12.158 15.809 12.158C14.749 12.158 14.059 11.783 14.059 11.783L13.749 13.223C13.749 13.223 14.404 13.628 15.719 13.628C17.029 13.628 18.873 12.62 18.873 11.158C18.873 9.402 16.31 9.286 16.31 8.503C16.31 8.103 16.65 7.783 17.56 7.783C18.154 7.783 18.81 8.253 18.81 8.253L19.124 6.723C19.124 6.723 18.254 6.378 17.404 6.378L17.406 6.375ZM9.188 6.5L7.5 11.438C7.5 11.438 7.416 11.01 7.375 10.75C6.42 8.61 4.875 7.812 4.875 7.812L6.345 13.406H8.345L11.155 6.5H9.19H9.188ZM11.875 6.5L10.781 13.406H12.627L13.72 6.5H11.875ZM21.813 6.5L18.813 13.406H20.625L21 12.438H23.313L23.5 13.406H25.156L23.75 6.5H21.813ZM2.843 6.53C2.843 6.53 6.44 7.635 7.281 10.344L6.658 7.219C6.658 7.219 6.383 6.529 5.658 6.529H2.844L2.843 6.53ZM22.5 8.5L23.03 11.094H21.53L22.5 8.5Z"
                    fill="#86B4E1" />
                </svg></TransactionDetails>
              <TransactionDetails detailsType="Account" :data="transactionAccount">{{
                transactionAccount.firstRow.description }}</TransactionDetails>
            </div>
            <div class="transaction-block transaction-block_alt">
              <h3 class="transaction-block__title">ATM</h3>
              <p class="transaction-block__value">{{ selectedTransactionData.address }}</p>
              <MapContainer :coordinates="selectedTransactionData?.atmLocation" />
            </div>
          </div>
          <BaseButton button-value="Close" v-if="isVisible" @click="closeWindow" style="margin: 30px 0; width: 200px; align-self: center;" />
        </template>
      </div>
    </Teleport>

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
  box-sizing: border-box;
  height: 100vh;
  overflow-y: auto;
  flex-grow: 2;
}

.transactions-sidebar {
  padding-top: 24px;
  overflow-y: auto;
}

.transactions-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.transactions-container {
  background-color: #E9EFF2;
  overflow-y: auto;
  flex: 1;
}

.transaction-details {
  display: flex;
  flex-wrap: wrap;
  padding: 0 16px;
  gap: 4px;
}

.transaction_details-header {
  margin: 8px 16px 4px 16px;
}

.transaction-wrapper {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 4px;
}


.transaction-block_alt {
  flex: 1;
}

@media (max-width: 1330px) {
  .transaction-block {
    flex: 1;
  }
}

@media (max-width: 1170px) {
  .transactions-page {
    height: calc(100vh - 50px);
  }
}

@media (max-width: 850px) {
  .transactions-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0;
    top: 50px;
    width: 100%;
    height: calc(100% - 50px);
  }
  
  .transaction-block {
    padding: 12px;
  }

  .transactions-sidebar {
    flex-grow: 2;
  }
}
</style>