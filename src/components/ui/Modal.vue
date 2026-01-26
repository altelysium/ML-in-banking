<script>
import AddCustomerForm from '../AddCustomerForm.vue';

export default {
  props: {
    title: String,
  },
  components: {
    AddCustomerForm,
  },
  emits: ["deactivateModal"],
  data() {
    return {
    }
  },
  methods: {
    deactivateModal() {
      this.$emit("deactivateModal", false);
    }
  }
}
</script>

<template>
  <Teleport to="body">
    <div class="modal-wrapper" @click.self="deactivateModal">
      <div class="modal">
        <h2 class="modal__title">{{ title }}</h2>
        <AddCustomerForm @deactivate-modal="deactivateModal" />
      </div>
    </div>
  </Teleport>

</template>

<style scoped>
.modal-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  width: 30%;
  background-color: #FFFFFF;
  padding: 24px;
  border-radius: 4px;
}

.modal__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
}
</style>