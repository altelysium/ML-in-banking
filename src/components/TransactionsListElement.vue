<script>
import { computed } from 'vue';

export default {
  props: {
    data: Object,
    order: String,
    isHeader: Boolean,
    randomizerResult: Number,
  },
  data() {
    return {
      date: "11/5/2022 3:12 PST",
      shiftId: "#6055",
    }
  },
}
</script>

<template>
  <li :class="isHeader ? 'transaction transaction_header' : 'transaction'" @click="$emit('selectTransaction', data)">
    <div class="transaction-user-data">
      <h4 class="transaction-user-data__title">{{ data.fullName }}</h4>
      <p class="transaction-user-data__shift-id">{{ shiftId }}</p>
      <p class="transaction-user-data__date">{{ date }}</p>
    </div>
    <div class="transaction-data">
      <p
        :class="randomizerResult > 0.5 ? 'transaction-data__type' : 'transaction-data__type transaction-data__type_alt'">
        {{ randomizerResult > 0.5 ? "Cash In" : "Cash Out" }}</p>
      <p
        :class="isHeader ? 'transaction-data__order-amount transaction-data__order-amount_header' : 'transaction-data__order-amount'">
        {{ data.orderAmount }}</p>
    </div>
    <p :class="randomizerResult > 0.5 ? 'transaction__id' : 'transaction__id transaction__id_alt'"
      :style="{ order: order }">{{ data.transactionId }}</p>
  </li>
</template>

<style>
.transaction {
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  background-color: #F9F9F9;
  cursor: pointer;
}

.transaction_header {
  padding: 16px;
}

.transaction-user-data {
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  justify-content: space-between;
  order: 1;
}

.transaction-user-data__title {
  white-space: nowrap;
}

.transaction-user-data__title,
.transaction-data__order-amount {
  font-weight: 700;
}

.transaction-data__order-amount_header {
  font-size: 24px;
}

.transaction-user-data__shift-id {
  color: #A5A5A5;
}

.transaction-user-data__date {
  color: #6C757D;
}

.transaction-user-data__shift-id,
.transaction-user-data__date {
  font: 400 14px/100% "DM Sans";
}

.transaction-data {
  display: flex;
  flex-direction: column;
  gap: 21px;
  order: 1;
  align-items: end;
}

.transaction-data__type {
  font: 400 12px/100% "DM Sans";
  background-color: #EDEDED;
  color: #A3A3A3;
  padding: 2px 4px;
  text-align: center;
  width: 60px;
}

.transaction-data__type_alt {
  color: #974F4F;
}

.transaction-data__order-amount {
  color: #6C757D;
}

.transaction__id {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 65px;
  background-color: #FFB648;
  color: #FFFFFF;
  border-radius: 2px;
}

.transaction__id {
  background-color: #E3F0C0;
  color: #4CAF50;
}
</style>