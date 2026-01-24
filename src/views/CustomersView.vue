<script>
import CustomersHeader from '../components/customersComponents/CustomersHeader.vue';
import CustomersSheet from '../components/customersComponents/CustomersSheet.vue';
import LimitDropdown from '../components/ui/LimitDropdown.vue';
import Pagination from '../components/ui/Pagination.vue';

export default {
  components: {
    CustomersHeader,
    CustomersSheet,
    Pagination,
    LimitDropdown,
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
    limit() {
      return this.$store.state.customersModule.queryParams.limit;
    },
    skip() {
      return this.$store.state.customersModule.queryParams.skip;
    },
    // itemsCount() {
    //   return this.$store.getters.totalUsers;
    // },
    // usersPerPage() {
    //   return this.$store.state.customersModule.queryParams.limit;
    // },
  },
  methods: {
    onSortingChange(state) {
      this.sortingState = state;
      this.$store.commit("setSortingBy", this.sortingQueryPaths[this.sortingState[0]?.id]);
      this.$store.commit("setSortingOrder", this.sortingState[0]?.desc ? "desc" : "asc");
      this.$store.dispatch("fetchCustomersData");
    },
    onSearchValueChange(searchValue) {
      this.$store.commit("setSearchQuery", searchValue);
      this.$store.dispatch("fetchCustomersData");
    },
    updateLimit(dropdownValue) {
      this.$store.commit("setLimit", dropdownValue);
      this.$store.dispatch("fetchCustomersData");
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
    <div class="customers-footer">
      <!-- <Pagination :limit="limit" :itemsCount="itemsCount" /> -->
      <LimitDropdown @update-limit="updateLimit" :limit="limit" :label="`Showing ${skip + 1} to ${skip + sheetRows.length} of 240 entries`" />
    </div>
  </section>
</template>

<style scoped>
.router-content__title {
  font-size: 20px;
  font-weight: 400;
  padding-left: 24px;
  text-transform: capitalize;
}

.customers-page {
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  background-color: #E9EFF2;
  flex-grow: 2;
  max-height: 80vh;
}
.customers-footer {
  display: flex;
  justify-content: space-between;
  background-color: #FFFFFF;
  border-top: 1px #C6C6C6 solid;
  padding: 16px 8px 8px 8px;
}
</style>