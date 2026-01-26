<script>
import BaseButton from './ui/BaseButton.vue';

export default {
  components: {
    BaseButton
  },
  props: {
    data: Object,
    keys: Array,
  },
  data() {
    return {}
  },
  methods: {
    deactivateModal() {
      this.$emit("deactivateModal", false);
    }
  },
}
</script>

<template>
  <div class="customer-details-container">
    <div class="customer-detail" v-for="(value, key, index) in data">
      <p class="customer-detail__name">{{ keys[index].header + ":" }}</p>
      <p class="customer-detail__value">{{ value }}</p>
    </div>
    <BaseButton button-value="Close" @click="deactivateModal" />
  </div>
</template>

<style>
.customer-details-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.customer-detail {
  display: flex;
  gap: 10px;
}
</style>