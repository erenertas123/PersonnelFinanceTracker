<script setup lang="ts">
import { ref, watch } from 'vue';
import * as _ from 'lodash';


const props = defineProps({
  statusSelected: { type: String, required: true, default: 'Select a Status' },
  searchTerm: { type: String, required: true, default: '' },
  tableBodyChanges: { type: Boolean, required: false, default: false }
})

const tableBody = ref([])

watch(() => props.tableBodyChanges, () => {
  tableBody.value = []
  if (!_.isNil(localStorage.getItem('financeStatus'))) {
    const finance = localStorage.getItem('financeStatus');
    const storage = JSON.parse(finance !== null ? finance : '[]')
    storage.forEach((item: any) => {
      tableBody.value.push(item)
    })
  }
})

if (!_.isNil(localStorage.getItem('financeStatus'))) {
  const finance = localStorage.getItem('financeStatus');
  const storage = JSON.parse(finance !== null ? finance : '[]')
  storage.forEach((item: any) => {
    tableBody.value.push(item)
  })
}

const tableHeader = [
  {
    columnName: 'subType',
    title: 'Sub Types',
    isSorted: false,
    sort: 'asc',
  },
  {
    columnName: 'transactionType',
    title: 'Transaction Types',
    isSorted: false,
    sort: 'asc',
  },
  {
    columnName: 'amount',
    title: 'Amount',
    isSorted: false,
    sort: 'asc',
  },
  {
    columnName: 'createDate',
    title: 'Create Date',
    isSorted: false,
    sort: 'asc',
  }
]
const transactionTypes = ref(['Expense', 'Income', 'All'])
const transactionColor = ref(['bg-red-100 text-red-800', 'bg-green-100 text-green-800', ''])

const sortTable = (columnName: string) => {
  const activeHeader = _.findIndex(tableHeader, ['columnName', columnName])
  if (tableHeader[activeHeader].sort === 'asc') {
    tableHeader[activeHeader].sort = 'desc'
  } else {
    tableHeader[activeHeader].sort = 'asc'
  }
  tableBody.value = _.orderBy(tableBody.value, [columnName], [tableHeader[activeHeader].sort])
  tableHeader[activeHeader].isSorted = true
}

const getTransactionColor = (type: string) => {
  const index = transactionTypes.value.indexOf(type)
  return transactionColor.value[index]
}

watch(() => props.statusSelected, () => {
  selectStatusChanged()
})

const selectStatusChanged = () => {
  tableBody.value = []
  const storage = JSON.parse(localStorage.getItem('financeStatus'))
  if (props.statusSelected === 'All') {
    tableBody.value = storage
  }
  storage.forEach((item: any) => {
    if (item.transactionType === props.statusSelected) {
      tableBody.value.push(item)
    }
  });
}

watch(() => props.searchTerm, () => {
  selectSubTypeChanged()
})

const selectSubTypeChanged = () => {
  tableBody.value = []
  const storage = JSON.parse(localStorage.getItem('financeStatus'))
  storage.forEach((item: any) => {
    if (item.subType.toLowerCase().startsWith(props.searchTerm.toLowerCase())) {
      tableBody.value.push(item)
    }
  });
}
</script>

<template>
  <div class="rounded-md border dark:border-zinc-500 text-zinc-900">
    <div class="relative w-full overflow-auto">
      <table class="w-full caption-bottom text-sm">
        <thead class="[&_tr]:border-b dark:border-zinc-500">
          <tr
            class="border-b dark:border-zinc-500 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800">
            <th v-for="header in tableHeader" :key="header.title" :value="header.columnName"
              @click="sortTable(header.columnName)"
              class="h-10 text-left align-middle lg:font-medium font-normal [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
              <button v-if="header.isSorted"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md dark:text-zinc-50 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-4 py-2">
                {{ header.title }}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-arrow-up ml-2 h-4 w-4">
                  <path d="m21 16-4 4-4-4"></path>
                  <path d="M17 20V4"></path>
                  <path d="m3 8 4-4 4 4"></path>
                  <path d="M7 4v16"></path>
                </svg>
              </button>
              <button v-else
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md dark:text-zinc-50 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-4 py-2">
                {{ header.title }}
              </button>
            </th>
          </tr>
        </thead>
        <tbody
          class="[&_tr:last-child]:border-0 dark:border-zinc-500 [&_td:nth-child(4)]:truncate [&_td:nth-child(4)]:max-w-10">
          <tr v-for="body in tableBody" :key="body"
            class="border-b dark:border-zinc-500 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800">
            <td v-for="(prop, value) of body" :key="value"
              class="p-2 align-middle lg:text-sm text-xs text-zinc-900 dark:text-zinc-50 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
              <span v-if="value === 'transactionType'"
                :class="'px-2 py-1 rounded-md text-nowrap lg:font-medium lg:text-sm text-xs ' + getTransactionColor(prop)">
                {{ prop }}
              </span>
              <span v-else class="px-2 py-1 rounded-md text-nowrap lg:font-medium lg:text-sm text-xs">
                {{ prop }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
