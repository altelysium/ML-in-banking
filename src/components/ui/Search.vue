<script>
export default {
  data() {
    return {
      seacrhValue: "",
    }
  },
}
</script>

<template>
  <div class="search-wrapper">
    <button type="button" class="search-wrapper__button">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M6.2998 0C9.77913 0 12.5995 2.8205 12.5996 6.2998C12.5996 7.76618 12.0989 9.11599 11.2588 10.1865L15.2373 14.165C15.5888 14.5165 15.5888 15.086 15.2373 15.4375C14.9151 15.7596 14.4094 15.787 14.0566 15.5186L13.9648 15.4375L9.95703 11.4307C8.92595 12.1669 7.66334 12.5996 6.2998 12.5996C2.8205 12.5995 0 9.77913 0 6.2998C0.000105653 2.82057 2.82057 0.000105656 6.2998 0ZM6.2998 1.2002C3.48331 1.2003 1.2003 3.48331 1.2002 6.2998C1.2002 9.11639 3.48324 11.4003 6.2998 11.4004C9.11646 11.4004 11.4004 9.11646 11.4004 6.2998C11.4003 3.48324 9.11639 1.2002 6.2998 1.2002Z"
          fill="#8E8E93" />
      </svg>
    </button>
    <input @input="$emit('setSearchValue', seacrhValue)" v-model="seacrhValue" type="text" placeholder="Search" id="search"
      class="search-wrapper__input">
  </div>
</template>

<style scoped>
.search-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  border: 1px #B5B5B5 solid;
  border-radius: 2px;
  background-color: #FFFFFF;
  width: 240px;
  height: 40px;
  box-sizing: border-box;
}

.search-wrapper__button {
  border: none;
  background-color: #FFFFFF;
  padding: 0;
}

.search-wrapper__input {
  padding: 0;
  font: 400 16px/100% "DM Sans";
  border: none;
  width: 100%;
}

.search-wrapper__input:focus {
  outline: none;
}


@media (max-width: 625px) {
  .search-wrapper {
    width: 180px;
    gap: 6px;
    height: 34px;
  }
}
@media (max-width: 425px) {
  .search-wrapper {
    width: 100%;
  }
}
</style>