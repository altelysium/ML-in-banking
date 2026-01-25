<script>
import BaseButton from '../components/ui/BaseButton.vue';
export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    getAccessToken() {
      this.$store.dispatch("login", { username: this.username, password: this.password });
    },
  },
  mounted() {
    console.log(this.$store.getters.isAuth)
  }
}
</script>

<template>
  <div class="login-container">
    <form class="login-form" action="">
      <div class="login-input-container">
        <label for="email">E-mail</label><input v-model.lazy="username" class="login-input-container__input" type="email"
          name="email" placeholder="Enter E-mail">
      </div>
      <div class="login-input-container">
        <label for="password">Password</label><input v-model.lazy="password" class="login-input-container__input"
          type="password" placeholder="Enter password" name="password">
      </div>
      <BaseButton buttonValue="Log In" @click="getAccessToken" style="margin-top: 20px"></BaseButton>
    </form>
  </div>
</template>

<style>
.login-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E9EFF2;
}

.login-form {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.login-input-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.login-input-container__input {
  padding: 0 16px;
  border: 1px #B5B5B5 solid;
  border-radius: 2px;
  background-color: #FFFFFF;
  height: 40px;
  box-sizing: border-box;
}

.login-input-container__input:focus {
  outline: none;
}
</style>
