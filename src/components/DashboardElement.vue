<script>
import { icon } from 'leaflet';
import BaseButton from './ui/BaseButton.vue';

export default {
  components: {
    BaseButton,
  },
  props: {
    isNested: Boolean,
    description: String,
    title: String,
    icon: Object,
  },
  data() {
    return {}
  },
}
</script>


<template>
  <div class="dashboard-element">
    <div class="dashboard-element__stats">
      <component :is="icon" />
      <p class="dashboard-element__desc">
        {{ description }}
      </p>
      <h3 class="dashboard-element__title">
        {{ title }}
      </h3>
    </div>
    <BaseButton button-value="Analyze" v-if="isNested" style="margin-top: 28px;" />
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
  padding: 48px 64px;
}

.dashboard-element__stats {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.dashboard-element__title,
.dashboard-element__desc {
  font-weight: 400;
}

.dashboard-element__desc {
  font-size: 48px;
  line-height: 100%;
}

@media (max-width: 1350px) {
  .dashboard-element {
    padding: 40px 64px;
  }

  .dashboard-element__desc {
    font-size: 40px;
    line-height: 100%;
  }

  @media (max-width: 1220px) {
    .dashboard-element {
      padding: 30px 50px;
    }

    .dashboard-element__stats {
      gap: 16px;
    }
  }
}

@media (max-width: 1170px) {
  .dashboard-element {
    flex: 1;
  }
}

@media (max-width: 786px) {
  .dashboard-element {
    padding: 20px 32px;
  }

  .dashboard-element__stats {
    gap: 8px;
  }

  .dashboard-element__desc {
    font-size: 24px;
  }

  .dashboard-element__title {
    font-size: 14px;
  }
}
</style>