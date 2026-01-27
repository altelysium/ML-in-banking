<script>
export default {
  props: {
    buttonValue: String,
  },
  data() {
    return {}
  },
}
</script>

<template>
  <button type="button" class="button">{{ buttonValue }}</button>
</template>

<style>
.button {
  padding: 12px 20px;
  background-color: #FFFFFF;
  color: #4E80D1;
  border: 1px #86B4E1 solid;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 500;
}

.button:hover {
  cursor: pointer;
  background-color: #4E80D1;
  color: #FFFFFF;
  transition: 0.5s;
}
@media (max-width: 625px) {
  .button {
    padding: 8px 14px;
  }
}
</style>