<script>
export default {
  data() {
    return {
    }
  },
  props: {
    path: String
  }
}
</script>

<template>
  <RouterLink :to=path class="sidebar-option">
    <slot name="icon"></slot>
    <slot name="option-name"></slot>
  </RouterLink>
</template>

<style>
.sidebar-option {
  display: flex;
  gap: 10px;
  color: #FFFFFF;
  padding: 4px 0 4px 8px;
  text-decoration: none;
}
</style>