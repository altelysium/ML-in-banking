<script>
export default {
  data() {
    return {
      value: "",
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
    user() {
      return this.$store.state.authModule.user;
    },
  },
  methods: {
    logout(e) {
      if (e.target.value === "logout") {
        this.$store.dispatch("logout");
        this.$router.push("/login");
      }
    }
  }
}
</script>

<template>
  <header class="header">
    <h1 class="header__title">
      Antifraud
    </h1>
    <div class="profile-block">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M6 1.5C6.825 1.5 7.5 2.175 7.5 3C7.5 3.825 6.825 4.5 6 4.5C5.175 4.5 4.5 3.825 4.5 3C4.5 2.175 5.175 1.5 6 1.5ZM6 9C8.025 9 10.35 9.9675 10.5 10.5H1.5C1.6725 9.96 3.9825 9 6 9ZM6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0ZM6 7.5C3.9975 7.5 0 8.505 0 10.5V12H12V10.5C12 8.505 8.0025 7.5 6 7.5Z"
          fill="#1C7FDA" />
      </svg>
      <select class="profile-block-menu" name="profile-menu" id="profile-menu" v-if="isAuth" @change="logout">
        <option class="profile-block-menu__item" :value="user" disabled>{{ user }}</option>
        <option class="profile-block-menu__item" value="logout">Log Out</option>
      </select>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 50px;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}

.header__title {
  color: #2B518F;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
}

.profile-block {
  display: flex;
  align-items: center;
  gap: 4px;
}

.profile-block-menu {
  cursor: pointer;
  border: none;
  background-color: #FFFFFF;
  font: 500 16px/22px "DM Sans";
}

.profile-block-menu:focus {
  outline: none;
}
</style>