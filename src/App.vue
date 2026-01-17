<script>
import { RouterView } from "vue-router";
import Header from "./layout/Header.vue";
import Sidebar from "./layout/Sidebar.vue";
export default {
  components: {
    Header,
    Sidebar,
    RouterView
  }
}
</script>

<template>
  <Header></Header>
  <main class="main">
    <Sidebar />
    <section class="router-content">
      <RouterView />
    </section>
  </main>
</template>

<style>
div {
  font: 500 16px/16px "DM Sans", sans-serif;
}
.main {
  display: flex;
}

.router-content {
  padding: 24px;
}
</style>
