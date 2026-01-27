<script>
import BaseButton from '../components/ui/BaseButton.vue';
import Input from '../components/ui/Input.vue';
export default {
  components: {
    BaseButton,
    Input,
  },
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    async getAccessToken() {
      await this.$store.dispatch("login", { username: this.username, password: this.password });
      this.$router.push("/customers");
    },
    setUsername(value) {
      this.username = value;
    },
    setPassword(value) {
      this.password = value
    }
  },
  mounted() {
    console.log(this.$store.getters.isAuth)
  }
}
</script>

<template>
  <div class="login-container">
    <form class="login-form" action="">
      <Input @send-value="setUsername" type="text" name="username" placeholder="Enter username" label="Username"></Input>
      <Input @send-value="setPassword" type="password" name="password" placeholder="Enter password" label="Password"></Input>
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

@media (max-width: 450px) {
.login-form {
  width: 80%;
  gap: 15px;
}
}
</style>
