<script>
import CustomerIcon from './icons/CustomerIcon.vue';
import DashboardIcon from './icons/DashboardIcon.vue';
import TransaferAltIcon from './icons/TransaferAltIcon.vue';
export default {
  components: {
    CustomerIcon,
    DashboardIcon,
    TransaferAltIcon
  },
  data() {
    return {
      routes: {
        dashboard: "/",
        customers: "/customers",
        transactions: "/transactions",
      },
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    isContracted() {
      return this.windowWidth > 768 && this.$route.path != '/transactions';
    },
    isAuth() {
      return this.$store.getters.isAuth;
    },
    sidebarOptions() {
      return {
        dashboard: {
          title: "Dashboard",
          icon: DashboardIcon,
        },
        customers: {
          title: "Customers",
          icon: CustomerIcon,
        },
        transactions: {
          title: "Transactions",
          icon: TransaferAltIcon,
        },
      }
    }
  },
  methods: {
    updateWidth() {
      this.$store.commit("setWindowWidth", window.innerWidth);
      this.windowWidth = window.innerWidth;
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateWidth);
  },
  unmounted() {
    window.removeEventListener('resize', this.updateWidth);
  }
}
</script>

<template>
  <aside v-if="isAuth" class="sidebar" :style="isContracted ? 'width: 224px' : 'width: auto'">
    <h3 class="sidebar__title" v-if="isContracted">Fraud Management</h3>
    <nav class="sidebar-navigation">
      <RouterLink :to=routes[title.toLowerCase()] class="sidebar-option" v-for="{ title, icon } in sidebarOptions">
        <component :is="icon" />
        <p class="sidebar-navigation" v-if="isContracted">{{ title }}</p>
      </RouterLink>
    </nav>
  </aside>
</template>

<style>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: #1C7FDA;
  padding: 32px 24px 0 24px;
  height: calc(100vh - 80px);
  width: 224px;
  box-sizing: border-box;
  flex-shrink: 0;
}

.sidebar__title {
  color: #9BC1FF;
}

.sidebar-navigation {
  display: flex;
  flex-direction: column;
  gap: 17px;
}

.sidebar-option {
  display: flex;
  gap: 10px;
  color: #FFFFFF;
  padding: 4px 8px 4px 8px;
  text-decoration: none;
}

@media (max-width: 1170px) {
  .sidebar {
    height: calc(100vh - 50px);
  }
}

@media (max-width: 460px) {
  .sidebar {
    padding: 32px 9px 0 9px;
  }
}
</style>