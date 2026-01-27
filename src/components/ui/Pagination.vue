<script>
import SelectIcon from './SelectIcon.vue';

export default {
  props: {
    limit: String,
    itemsCount: Number,
  },
  components: {
    SelectIcon
  },
  data() {
    return {
      currentPageNumber: 1,
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.itemsCount / this.limit);
    },
    pageNumbers() {
      const numbersArray = [];
      let number = 1;
      while (number <= this.pageCount) {
        numbersArray.push(number);
        number++;
      }
      return numbersArray;
    },
    paginationNumbers() {
      let numbersArray = [];
      if (this.pageCount <= 7) {
        return this.pageNumbers;
      }
      else {
        if (this.currentPageNumber <= 4) {
          numbersArray = [1, 2, 3, 4, 5, "...", this.pageCount];
        } else if (this.currentPageNumber >= this.pageCount - 3) {
          numbersArray = [
            1,
            '...',
            this.pageCount - 4,
            this.pageCount - 3,
            this.pageCount - 2,
            this.pageCount - 1,
            this.pageCount
          ]
        } else {
          numbersArray = [
            1,
            '...',
            this.currentPageNumber - 1,
            this.currentPageNumber,
            this.currentPageNumber + 1,
            '...',
            this.pageCount
          ]
        }
      }
      return numbersArray;
    }
  },
  methods: {
    selectPage(e) {
      this.currentPageNumber = Number(e.target.innerText);
      console.log(this.currentPageNumber)
    },
  },
  watch: {
    currentPageNumber() {
      this.$store.commit("setSkip", this.limit * (this.currentPageNumber - 1));
      this.$store.dispatch("fetchCustomersData");
    },
  },
}
</script>

<template>
  <nav class="pagination">
    <button class="pagination__button" type="button" @click="() => currentPageNumber = 1"
      :disabled="currentPageNumber === 1">
      <SelectIcon style="transform: rotate(90deg)" />
    </button>
    <button class="pagination__button" type="button" v-for="pageNumber in paginationNumbers" @click="selectPage"
      :disabled="currentPageNumber === pageNumber">{{ pageNumber }}</button>
    <button class="pagination__button" type="button" @click="() => currentPageNumber = pageCount"
      :disabled="currentPageNumber === pageCount">
      <SelectIcon style="transform: rotate(-90deg)" />
    </button>
  </nav>
</template>

<style scoped>
.pagination {
  display: flex;
  gap: 8px;
}

.pagination__button {
  cursor: pointer;
  height: 40px;
  width: 40px;
  background-color: #FFFFFF;
  border: none;
  font: 400 14px/140% "DM Sans";
}

@media (max-width: 1170px) {
  .pagination__button {
    height: 30px;
    width: 30px;
  }
}

@media (max-width: 500px) {
  .pagination {
    display: flex;
    gap: 6px;
  }

  .pagination__button {
    height: 24px;
    width: 24px;
  }
}
</style>