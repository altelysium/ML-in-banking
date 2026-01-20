<script>
import { RouterView } from "vue-router";
import Header from "./layout/Header.vue";
import Sidebar from "./layout/Sidebar.vue";
export default {
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    }
  },
  components: {
    Header,
    Sidebar,
    RouterView,
  }
}
</script>

<template>
  <Header></Header>
  <main class="main">
    <Sidebar />
    <section class="router-content">
      <RouterView/>
    </section>
  </main>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
div {
  font: 500 16px/16px "DM Sans";
}

.main {
  display: flex;
}

.router-content {
  padding: 24px;
  background-color: #E9EFF2;
  flex-grow: 2;
}
</style>
