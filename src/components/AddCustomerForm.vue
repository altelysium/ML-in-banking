<script>
import BaseButton from './ui/BaseButton.vue';
import Input from './ui/Input.vue';

export default {
  components: {
    Input,
    BaseButton,
  },
  emits: ["deactivateModal"],
  data() {
    return {
      customer: {
        id: null,
        firstName: "",
        lastName: "",
        phone: "",
        address: {
          address: "",
          city: "",
          stateCode: "",
          postalCode: "",
        }
      },
      isError: false,
    }
  },
  methods: {
    setId(value) {
      this.customer.id = value;
    },
    setFirstName(value) {
      this.customer.firstName = value;
    },
    setLastName(value) {
      this.customer.lastName = value
    },
    setPhone(value) {
      this.customer.phone = value
    },
    setCity(value) {
      this.customer.address.city = value
    },
    setAddress(value) {
      this.customer.address.address = value
    },
    setStateCode(value) {
      this.customer.address.stateCode = value
    },
    setBalance(value) {
      this.customer.address.postalCode = value
    },
    submitForm() {
      for (let prop in this.customer) {
        if (!this.customer[prop]) {
          return this.isError = true;
        }
      }
      this.$store.commit("setNewCustomer", this.customer);
      this.$store.dispatch("postCustomer");
      this.deactivateModal();
      this.isError = false;
    },
    deactivateModal() {
      this.$emit("deactivateModal", false);
    }
  }
}
</script>

<template>
  <form class="add-customer-form">
    <Input @send-value="setId" type="text" name="id" placeholder="Enter id" label="ID" :is-modal="true"></Input>
    <Input @send-value="setFirstName" type="text" name="first-name" placeholder="Enter first name" label="First Name"
      :is-modal="true"></Input>
    <Input @send-value="setLastName" type="text" name="last-name" placeholder="Enter last name" label="Last Name"
      :is-modal="true"></Input>
    <Input @send-value="setPhone" type="text" name="phone" placeholder="Enter phone" label="Phone"
      :is-modal="true"></Input>
    <Input @send-value="setCity" type="text" name="city" placeholder="Enter city" label="City" :is-modal="true"></Input>
    <Input @send-value="setAddress" type="text" name="address" placeholder="Enter address" label="Address"
      :is-modal="true"></Input>
    <Input @send-value="setStateCode" type="text" name="state-code" placeholder="Enter state code" label="State Code"
      :is-modal="true"></Input>
    <Input @send-value="setBalance" type="text" name="balance" placeholder="Enter account balance" label="Acc Balance"
      :is-modal="true"></Input>
    <p class="add-customer-form__alert" v-if="isError">Fill all fields to submit!</p>
    <BaseButton button-value="Submit" @click="submitForm" />
  </form>
</template>

<style>
.add-customer-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.add-customer-form__alert {
  color: #B43232;
}
</style>