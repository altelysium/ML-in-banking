<script>
import BaseButton from './ui/BaseButton.vue';

export default { // fix style
  components: {
    BaseButton
  },
  props: {
    isNested: Boolean,
  },
  data() {
    return {}
  },
}
</script>


<template>
  <div class="dashboard-element">
    <div class="dashboard-element__stats">
      <slot name="icon"></slot>
      <p class="dashboard-element__value">
        <slot name="value"></slot>
      </p>
      <h4 class="dashboard-element__title">
        <slot name="title"></slot>
      </h4>
    </div>
    <BaseButton button-value="Analyze" v-if="isNested" />
  </div>
</template>

<style>
.dashboard-element {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px #E3E4E5 solid;
  background-color: #FFFFFF;
  border-radius: 4px;
  padding: 48px;
}

.dashboard-element__stats {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.dashboard-element__title,
.dashboard-element__value {
  font-weight: 400;
}

.dashboard-element__value {
  font-size: 48px;
  line-height: 100%;
}
</style>