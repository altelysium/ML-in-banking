<script>
export default {
  props: {
    limit: String,
    label: String,
  },
  data() {
    return {
      selectedValue: this.limit,
    }
  },
}
</script>

<template>
  <div class="limit-container">
    <label for="limit-container" class="limit-container__label">{{ label }}</label>
    <select v-model="selectedValue" @change="$emit('updateLimit', selectedValue.slice(0,2))" name="limit-container"
      id="limit-container" class="limit-container__dropdown">
      <option value="10">10 entries per page</option>
      <option value="20">20 entries per page</option>
      <option value="30">30 entries per page</option>
    </select>
  </div>
</template>

<style scoped>
.limit-container {
  font: 400 14px/140% "DM Sans";
  display: flex;
  align-items: center;
  gap: 24px;
}

.limit-container__label {
  color: #767676;
}

.limit-container__dropdown {
  cursor: pointer;
  font: inherit;
  line-height: 100%;
  padding: 8px 16px;
  background-color: #F9F9F9;
  border: none;
  border-radius: 2px;
}
.limit-container__dropdown:focus {
  outline: none;
}

@media (max-width: 500px) {
  .limit-container {
    flex-direction: column;
    gap: 6px;
  }
  .limit-container__dropdown {
    width: 100%;
  }
}
</style>