<script>
import AddCustomerForm from '../components/AddCustomerForm.vue';
import CustomerDetails from '../components/CustomerDetails.vue';
import CustomersSheet from '../components/customersComponents/CustomersSheet.vue';
import BaseButton from '../components/ui/BaseButton.vue';
import LimitDropdown from '../components/ui/LimitDropdown.vue';
import Modal from '../components/ui/Modal.vue';
import Pagination from '../components/ui/Pagination.vue';
import Search from '../components/ui/Search.vue';

export default {
  components: {
    CustomersSheet,
    Pagination,
    LimitDropdown,
    Modal,
    AddCustomerForm,
    CustomerDetails,
    Search,
    BaseButton,
  },
  emits: [],
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
          accessorKey: "address",
          header: "Address"
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
      sortingQueryPaths: {
        cid: "id",
        fullName: "firstName",
        city: "address.city",
        stateCode: "address.stateCode",
        phoneNumber: "phone",
        balance: "address.postalCode",
      },
      sortingState: null,
      isModal: false,
      seacrhValue: "",
      selectedCustomer: null,
      isCustomerSelected: false,
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
    itemsCount() {
      return this.$store.getters.totalUsers;
    },
    usersPerPage() {
      return this.$store.state.customersModule.queryParams.limit;
    },
  },
  methods: {
    onSortingChange(state) {
      this.sortingState = state;
      this.$store.commit("setSortingBy", this.sortingQueryPaths[this.sortingState[0]?.id]);
      this.$store.commit("setSortingOrder", this.sortingState[0]?.desc ? "desc" : "asc");
      this.$store.dispatch("fetchCustomersData");
    },
    onSearchValueChange(searchValue) {
      this.searchValue = searchValue;
      this.$store.commit("setSearchQuery", searchValue);
      this.$store.dispatch("fetchCustomersData");
    },
    updateLimit(dropdownValue) {
      this.$store.commit("setLimit", dropdownValue);
      this.$store.dispatch("fetchCustomersData");
    },
    setSelectedCustomer(data) {
      this.selectedCustomer = data;
    },
    activateModal() {
      return this.isModal = !this.isModal;
    },
    deactivateModal(bool) {
      this.isModal = bool;
      this.isCustomerSelected = bool;
    },
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
  <Modal @deactivate-modal="deactivateModal" v-if="isModal"
    :title="isCustomerSelected ? 'Customer Details' : 'Add Customer'">
    <CustomerDetails :data="selectedCustomer" :keys="customerParams" v-if="isCustomerSelected" @deactivate-modal="deactivateModal" />
    <AddCustomerForm @deactivate-modal="deactivateModal" v-else />
  </Modal>
  <section class="customers-page">
    <h2 class="router-content__title">Customer Profile</h2>
    <div class="components-controls">
      <Search @set-search-value="onSearchValueChange" />
      <BaseButton button-value="Add Customer" @click="activateModal" />
    </div>
    <CustomersSheet @get-sorting-state="onSortingChange" @get-selected-customer="setSelectedCustomer"
      @is-row-selected="(bool) => isCustomerSelected = bool" @activate-modal="(bool) => isModal = bool"
      :data="sheetRows" :columns="customerParams" />
    <div class="customers-footer">
      <Pagination :limit="limit" :itemsCount="itemsCount" />
      <LimitDropdown @update-limit="updateLimit" :limit="limit"
        :label="`Showing ${skip + 1} to ${skip + sheetRows.length} of 240 entries`" />
    </div>
  </section>
</template>

<style>
.router-content__title {
  font-size: 20px;
  font-weight: 400;
  padding-left: 24px;
  text-transform: capitalize;
}

.components-controls {
  padding: 8px 48px;
  display: flex;
  justify-content: space-between;
  background-color: #F9F9F9;
  border-top: 1px #B5B5B5 solid;
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