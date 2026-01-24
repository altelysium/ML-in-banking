<script>
import BaseButton from '../ui/BaseButton.vue';
import Search from '../ui/Search.vue';

export default {
  components: {
    BaseButton,
    Search,
  },
  data() {
    return {
      searchValue: "",
    }
  },
  watch: {
    searchValue(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.$emit('setSearchValue', newValue);
      }
    }
  }
}
</script>

<template>
  <div class="components-controls">
    <Search @set-search-value="(value) => searchValue = value" />
    <BaseButton buttonValue="Add Customer" />
  </div>
</template>

<style>
.components-controls {
  padding: 8px 48px;
  display: flex;
  justify-content: space-between;
  background-color: #F9F9F9;
  border-top: 1px #B5B5B5 solid;
}
</style>