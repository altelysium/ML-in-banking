<script>
import TransactionsListElement from '../components/TransactionsListElement.vue';

export default {
  components: {
    TransactionsListElement,
  },
  data() {
    return {
      
    }
  },
  computed: {
    transactionsData() {
      return this.$store.getters.transactionsData;
    }
  },
  mounted() {
    try {
      this.$store.dispatch("fetchTransactionsData");
    } catch (err) {
      console.log(err);
    }
  },
}
</script>

<template>
  <section class="transactions-page">
    <aside class="transactions-sidebar">
      <ul class="transactions-list" v-for="customer in transactionsData">
        <TransactionsListElement :data="customer" />
      </ul>
    </aside>
    <div class="transactions-window">
      <h2 class="router-content__title">Fraudulent activity alert</h2>
    </div>

  </section>
</template>

<style>
.transactions-page {
  width: 100%;
  display: flex;
  height: calc(100vh - 80px);
  overflow-y: auto;
}

.transactions-sidebar {
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 4px;
}

.transactions-window {
  padding: 24px;
  background-color: #E9EFF2;
  flex-grow: 2;
}
</style>