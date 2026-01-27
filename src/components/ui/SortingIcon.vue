<script>
export default {
  props: {
    strokeWidth: String
  },
  data() {
    return {}
  },
}
</script>

<template>
  <svg class="sheet-header-row-cell-wrapper__icon" xmlns="http://www.w3.org/2000/svg" width="7" height="4"
    viewBox="0 0 7 4" fill="none">
    <path d="M0.5 0.5L3.5 3.5L6.5 0.5" stroke="#798388" stroke-linecap="round" stroke-linejoin="round"
      :stroke-width=strokeWidth />
  </svg>
</template>

<style>
.sheet-header-row-cell-wrapper__icon {
  transition: 0.15s ease;
}
</style>