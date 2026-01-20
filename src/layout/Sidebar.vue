<script>
import SidebarOption from '../components/SidebarOption.vue';
import { SIDEBAR_OPTIONS } from '../constants/sidebarConstants';
export default {
  data() {
    console.log(SIDEBAR_OPTIONS)
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
      <SidebarOption :path=routes[title.toLowerCase()] v-for="{title, svgBody} in sidebarOptions">
        <template #icon>
          <div v-html="svgBody"></div>
        </template>
        <template #option-name>{{ title }}</template>
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
  gap: 17px;
}
</style>