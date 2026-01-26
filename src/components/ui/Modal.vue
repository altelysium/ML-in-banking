<script>
import BaseButton from './BaseButton.vue';
import Input from './Input.vue';

export default {
  props: {
    title: String,
  },
  components: {
    Input,
    BaseButton,
  },
  emits: ["closeModal"],
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
      this.deadctivateModal();
      this.isError = false;
    },
    deadctivateModal() {
      this.$emit("closeModal", false);
    }
  }
}
</script>

<template>
  <Teleport to="body">
    <div class="modal-wrapper" @click.self="deadctivateModal">
      <div class="modal">
        <h2 class="modal__title">{{ title }}</h2>
        <form class="add-customer-form">
          <Input @send-value="setId" type="text" name="id" placeholder="Enter id" label="ID" :is-modal="true"></Input>
          <Input @send-value="setFirstName" type="text" name="first-name" placeholder="Enter first name"
            label="First Name" :is-modal="true"></Input>
          <Input @send-value="setLastName" type="text" name="last-name" placeholder="Enter last name" label="Last Name"
            :is-modal="true"></Input>
          <Input @send-value="setPhone" type="text" name="phone" placeholder="Enter phone" label="Phone"
            :is-modal="true"></Input>
          <Input @send-value="setCity" type="text" name="city" placeholder="Enter city" label="City"
            :is-modal="true"></Input>
          <Input @send-value="setAddress" type="text" name="address" placeholder="Enter address" label="Address"
            :is-modal="true"></Input>
          <Input @send-value="setStateCode" type="text" name="state-code" placeholder="Enter state code"
            label="State Code" :is-modal="true"></Input>
          <Input @send-value="setBalance" type="text" name="balance" placeholder="Enter account balance"
            label="Acc Balance" :is-modal="true"></Input>
            <p class="add-customer-form__alert" v-if="isError">Fill all fields to submit!</p>
          <BaseButton button-value="Submit" @click="submitForm" />
        </form>
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
  /* opacity: 0.5; */
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  width: 30%;
  background-color: #FFFFFF;
  padding: 24px;
  border-radius: 4px;
}

.add-customer-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.modal__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
}

.add-customer-form__alert {
  color: #B43232;
}
</style>