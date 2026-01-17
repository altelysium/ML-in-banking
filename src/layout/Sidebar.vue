<script>
import SidebarOption from '../components/SidebarOption.vue';
import { SIDEBAR_OPTIONS } from '../constants/svg';
export default {
  data() {
    return {
      sidebarOptions: SIDEBAR_OPTIONS,
      routes: {
        dashboard: "/",
        customers: "/customers",
        transactions: "/transactions",
      }
    }
  },
  components: {
    SidebarOption,
  }
}
</script>

<template>
  <aside class="sidebar">
    <h3 class="sidebar__title">Fraud Management</h3>
    <nav class="sidebar-navigation">
      <SidebarOption :path=routes[optionName.toLowerCase()] v-for="[optionName, svg] in sidebarOptions">
        <template #icon>
          <div v-html="svg"></div>
        </template>
        <template #option-name>{{ optionName }}</template>
      </SidebarOption>
    </nav>
  </aside>
</template>

<style>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: #1C7FDA;
  padding: 0 25px;
  width: 224px;
  padding-top: 30px;
  height: calc(100vh - 110px);
}

.sidebar__title {
  color: #9BC1FF;
}

.sidebar-navigation {
  display: flex;
  flex-direction: column;
  gap: 13px;
}
</style>