<script>
export default {
  props: {
    message: String,
  },
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    showAlert() {
      this.isVisible = true;
      setTimeout(() => this.isVisible = false, 2000)
    },
  }
}
</script>

<template>
  <Teleport to="body">
    <div class="alert" v-if="isVisible">
      <p class="alert__message">{{ message }}</p>
    </div>
  </Teleport>

</template>

<style>
.alert {
  position: absolute;
  left: calc(100vw / 2 - 150px);
  top: calc(100vh / 2 - 75px);
  padding: 24px;
  border-radius: 4px;
  background-color: #1C7FDA;
}

.alert__message {
  font: 500 20px/24px "DM Sans";
  color: #FFFFFF;
}
</style>