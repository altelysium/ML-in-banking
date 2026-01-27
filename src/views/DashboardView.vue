<script>
import DashboardElement from '../components/DashboardElement.vue';
import { DASHBOARD_SVG } from '../constants/dashboardConstants';

export default {
  components: {
    DashboardElement,
  },
  data() {
    return {
      dasboardIcons: DASHBOARD_SVG,
    }
  },
  computed: {
    isFetched() {
      return this.$store.state.dashboardModule.isFetched;
    },
    dashboardElementsData() {
      return {
        processedTransactions: {
          title: "Processed Transactions",
          value: this.$store.getters.allTransactions,
          icon: this.dasboardIcons.processedTransactions.svgBody,
        },
        allTransactions: {
          title: "All Transactions",
          value: this.$store.getters.allTransactions,
          icon: this.dasboardIcons.allTransactions.svgBody,
        },
        approvalRate: {
          title: "Approval Rate",
          value: ((this.$store.getters.approvedTransactions / this.$store.getters.allTransactions) *
            100
          ).toFixed(1) + "%",
          icon: this.dasboardIcons.approvalRate.svgBody,
        },
        pendingApproval: {
          title: "Pending Approval",
          value: this.$store.getters.pendingApproval,
          icon: this.dasboardIcons.pendingApproval.svgBody,
        },
        approvedTransactions: {
          title: "Approved Transactions",
          value: this.$store.getters.approvedTransactions,
          icon: this.dasboardIcons.approvedTransactions.svgBody,
        },
        rejectedTransactions: {
          title: "Rejected Transactions",
          value: this.$store.getters.rejectedTransactions,
          icon: this.dasboardIcons.rejectedTransactions.svgBody,
          isButtonNested: true,
        },
        postponedApproval: {
          title: "Postponed Approval",
          value: this.$store.getters.allTransactions - this.$store.getters.approvedTransactions - this.$store.getters.rejectedTransactions,
          icon: this.dasboardIcons.postponedApproval.svgBody,
          isButtonNested: true,
        }
      }
    },
  },
  mounted() {
    try {
      this.$store.dispatch("fetchDashboardData");
    } catch (err) {
      console.log(err);
    }
  }
}
</script>

<template>
  <section class="dashboard-page">
    <h2 class="router-content__title">Fraud Management Dashboard</h2>
    <div class="dashboard">
      <DashboardElement v-for="({ title, value, icon, isButtonNested }, key) in dashboardElementsData"
        :style="{ gridArea: key }" :isNested="isButtonNested" :description="String(value)" :title="title">
        <div v-html="icon"></div>
      </DashboardElement>
    </div>
  </section>
</template>

<style scoped>
.dashboard-page {
  padding: 24px;
  background-color: #E9EFF2;
  flex-grow: 2;
  height: calc(100vh - 128px);
  overflow-y: auto;
}

.dashboard {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 8px;
  grid-template-areas:
    "processedTransactions allTransactions approvalRate pendingApproval"
    "processedTransactions approvedTransactions rejectedTransactions postponedApproval"
    "processedTransactions approvedTransactions rejectedTransactions postponedApproval";
  box-sizing: border-box;
}

@media (max-width: 1170px) {
  .dashboard-page {
    height: calc(100vh - 100px);
  }

  .dashboard {
    display: flex;
    flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  .dashboard-page {
    padding: 16px;
    height: calc(100vh - 82px);
  }
}
</style>