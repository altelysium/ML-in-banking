<script>
import { defineComponent } from 'vue'
import {
  FlexRender,
  getCoreRowModel,
  useVueTable,
  getSortedRowModel,
} from '@tanstack/vue-table'
import SortingIcon from '../ui/SortingIcon.vue';


export default defineComponent({
  components: {
    FlexRender,
    SortingIcon,
  },
  props: {
    data: Array,
    columns: Array,
  },
  data() {
    return {
      sorting: [],
    }
  },
  computed: {
    table() {
      return useVueTable({
        data: this.data,
        columns: this.columns,
        state: {
          sorting: this.sorting,
        },
        enableSortingRemoval: false,
        store: this.$store,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: (updaterOrValue) => {
          const nextSorting = typeof updaterOrValue === 'function' ? updaterOrValue(this.sorting) : updaterOrValue;
          this.sorting = nextSorting;
          this.$emit('getSortingState', nextSorting)
          return this.sorting;
        },
      })
    },
  },
  methods: {
    toggleSorting(header, event) {
      return header.column.getToggleSortingHandler()?.(event);
    }
  }
})
</script>

<template>
  <div class="customers-sheet-container">
    <table class="customers-sheet">
      <thead class="sheet-header">
        <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id" class="sheet-header-row">
          <th v-for="header in headerGroup.headers" :key="header.id" :colSpan="header.colSpan"
            @click="toggleSorting(header, $event)" class="sheet-header-row-cell">
            <div class="sheet-header-row-cell-wrapper">
              <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header"
                :props="header.getContext()" />
              <SortingIcon v-if="header.column.getIsSorted() === 'desc'" style="transform: rotate(180deg)"
                stroke-width="2" />
              <SortingIcon v-else-if="header.column.getIsSorted() === 'asc'" stroke-width="2" />
              <SortingIcon v-else />
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="sheet-body">
        <tr v-for="(row, index) in table.getRowModel().rows" :key="row.id"
          :class="!((index + 1) % 2) ? 'sheet-body-row' : 'sheet-body-row sheet-body-row_alt'">
          <td v-for="cell in row.getVisibleCells()" :key="cell.id" class="sheet-body-row__cell">
            <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.customers-sheet-container {
  padding: 16px 8px 0 8px;
  background-color: #FFFFFF;
  overflow-y: auto;
  font-weight: 400;
}

.customers-sheet {
  border: 1px solid lightgray;
  border: none;
  table-layout: auto;
  width: 100%;
}

.sheet-header-row-cell-wrapper {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.sheet-header-row-cell {
  user-select: none;
}

.sheet-body {
  overflow-y: auto;
}

.sheet-body-row:hover {
  outline: 1px #1C7FDA solid;
  cursor: pointer;
}

.sheet-body-row_alt {
  background-color: #F9F9F9;
}

.sheet-body-row__cell,
.sheet-header-row-cell-wrapper {
  padding: 12px 16px;
  border: none;
  text-align: left;
}
</style>