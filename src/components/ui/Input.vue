<script>
export default {
  props: {
    type: String,
    name: String,
    placeholder: String,
    label: String,
    style: Object,
    isModal: Boolean,
  },
  data() {
    return {
      value: "",
    }
  }
}
</script>

<template>
  <div class="input-container" :class="{ 'input-container_modal': isModal }" :style="style">
    <label class="input-container__label" :class="{ 'input-container__label_modal': isModal }" :for="name">{{ label }}</label><input @input="$emit('sendValue', value)"
      v-model="value" class="input-container__input" :class="{ 'input-container__input_modal': isModal }" :required="isModal" :type="type"
      :name="name" :placeholder="placeholder">
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.input-container_modal {
  flex-direction: row;
  align-items: center;
  gap: 15px;
}

.input-container__label_modal {
  font-size: 20px;
}

.input-container__input {
  font: 500 20px/28px "DM Sans";
  padding: 0 16px;
  border: 1px #B5B5B5 solid;
  border-radius: 2px;
  background-color: #FFFFFF;
  box-sizing: border-box;
  flex-grow: 2;
}

.input-container__input_modal {
  height: 30px;
}

.input-container__input:focus {
  outline: none;
}
</style>