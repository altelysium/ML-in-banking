<script>
export default {
  props: {
    data: Object,
    detailsType: String,
    descriptionColor: Object,
  },
  data() {
    return {}
  },
}
</script>

<template>
  <div class="transaction-block">
    <h3 class="transaction-block__title">{{ detailsType }}</h3>
    <div class="transaction-block-row">
      <p class="transaction-block-row__key">{{ data.firstRow.title }}</p>
      <p class="transaction-block-row__value">
        <slot></slot>
      </p>
    </div>
    <div class="transaction-block-row">
      <p class="transaction-block-row__key" style="">{{ data.secondRow.title }}</p>
      <p class="transaction-block-row__value" :style="descriptionColor">{{ data.secondRow.description }}</p>
    </div>
    <div class="transaction-block-row">
      <p class="transaction-block-row__key">{{ data.thirdRow.title }}</p>
      <p class="transaction-block-row__value" :style="descriptionColor">{{ data.thirdRow.description }}</p>
    </div>
    <div class="transaction-block-row">
      <p class="transaction-block-row__key">{{ data.fourthRow.title }}</p>
      <p class="transaction-block-row__value">{{ data.fourthRow.description }}</p>
    </div>
    <div class="transaction-block-row">
      <p class="transaction-block-row__key">{{ data.fifthRow.title }}</p>
      <p class="transaction-block-row__value">{{ data.fifthRow.description }}</p>
    </div>
  </div>
</template>

<style>
.transaction-block {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #FFFFFF;
  padding: 24px;
  border-radius: 4px;
  border: 1px #E3E4E5 solid;
}

.transaction-block__title {
  border-bottom: 1px #BFC7EB solid;
  padding-bottom: 8px;
  line-height: 21px;
}

.transaction-block-row {
  display: flex;
  gap: 24px;
}

.transaction-block-row__key,
.transaction-block-row__value {
  font: 400 14px/18px "DM Sans";
}

.transaction-block-row__key {
  color: #6C757D;
  text-align: end;
  width: 130px;
}

.transaction-block-row__value {
  font-weight: 700;
}

@media (max-width: 785px) {
.transaction-block-row__key,
.transaction-block-row__value {
  font-size: 12px;
  line-height: 16px;
}
  .transaction-block-row__key {
    width: 90px;
  }
}
</style>