<script>
import { SIDEBAR_OPTIONS } from '../constants/sidebarConstants';
export default {
  data() {
    return {
      sidebarOptions: SIDEBAR_OPTIONS,
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
  <aside class="sidebar" :style="isContracted ? 'width: 224px' : 'width: auto'">
    <h3 class="sidebar__title" v-if="isContracted">Fraud Management</h3>
    <nav class="sidebar-navigation">
      <RouterLink :to=routes[title.toLowerCase()] class="sidebar-option" v-for="{ title, svgBody } in sidebarOptions">
        <div v-html="svgBody"></div>
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