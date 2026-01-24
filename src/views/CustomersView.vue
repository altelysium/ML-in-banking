<script>
import CustomersHeader from '../components/customersComponents/CustomersHeader.vue';
import CustomersSheet from '../components/customersComponents/CustomersSheet.vue';

export default {
  components: {
    CustomersHeader,
    CustomersSheet,
  },
  data() {
    return {
      customerParams: [
        {
          accessorKey: "cid",
          header: "CID"
        },
        {
          accessorKey: "fullName",
          header: "Full Name"
        },
        {
          accessorKey: "city",
          header: "City"
        },
        {
          accessorKey: "state",
          header: "State"
        },
        {
          accessorKey: "phoneNumber",
          header: "Phone Number"
        },
        {
          accessorKey: "balance",
          header: "Acc Balance"
        },
      ],
      sortingState: null,
      sortingQueryPaths: {
        cid: "id",
        fullName: "firstName",
        city: "address.city",
        stateCode: "address.stateCode",
        phoneNumber: "phone",
        balance: "address.postalCode",
      }
    }
  },
  computed: {
    sheetRows() {
      return this.$store.getters.customersData;
    },
  },
  methods: {
    onSortingChange(state) {
      console.log(state)
      this.sortingState = state;
      this.$store.commit("setSortingBy", this.sortingQueryPaths[this.sortingState[0]?.id]);
      this.$store.commit("setSortingOrder", this.sortingState[0]?.desc ? "desc" : "asc");
      this.$store.dispatch("fetchCustomersData");
    },
    onSearchValueChange(searchValue) {
      this.$store.commit("setSearchQuery", searchValue);
      this.$store.dispatch("fetchSearchedACustomersData");
    }
  },
  mounted() {
    try {
      this.$store.dispatch("fetchCustomersData");
    } catch (err) {
      console.log(err);
    }
  },
}
</script>

<template>
  <section class="customers-page">
    <h2 class="router-content__title">Customer Profile</h2>
    <CustomersHeader @set-search-value="onSearchValueChange" />
    <CustomersSheet @get-sorting-state="onSortingChange" :data="sheetRows" :columns="customerParams" />
  </section>
</template>

<style scoped>
.router-content__title {
  color: #4E80D1;
  font-size: 20px;
  font-weight: 400;
  padding-left: 24px;
  margin-bottom: 24px;
}

.customers-page {
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  background-color: #E9EFF2;
  flex-grow: 2;
  max-height: 80vh;
}
</style>