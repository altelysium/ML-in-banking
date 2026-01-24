<script>
import { computed } from 'vue';

export default {
  props: {
    data: Object,
  },
  data() {
    return {
      date: "11/5/2022 3:12 PST",
      shiftId: "#6055"
    }
  },
  computed: {
    fullName() {
      // return `${this.data.firstName} ${this.data.lastName}`
    }
  },
}
</script>

<template>
  <li class="transaction">
    <div class="transaction-user-data">
      <h4 class="transaction-user-data__title">{{ data.fullName }}</h4>
      <p class="transaction-user-data__shift-id">{{ shiftId }}</p>
      <p class="transaction-user-data__date">{{ date }}</p>
    </div>
    <div class="transaction-data">
      <p class="transaction-data__type">Cash In</p>
      <p class="transaction-data__order-amount">{{ "$" + data.orderAmount }}</p>
    </div>
    <p class="transaction__id">{{ data.transactionId }}</p>
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

.transaction-user-data {
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  justify-content: space-between;
}

.transaction-user-data__title,
.transaction-data__order-amount {
  font-weight: 700;
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
}

.transaction-data__type {
  font: 400 12px/100% "DM Sans";
  background-color: #EDEDED;
  color: #974F4F;
  padding: 2px 4px;
  text-align: center;
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
</style>