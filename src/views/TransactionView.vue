<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import DataTable from '@/components/DataTable.vue'
import AddTransaction from '../components/AddTransaction.vue'
import ShowBalance from '@/components/ShowBalance.vue'

import { useBalanceStore } from '../stores/balance'
import { ref } from 'vue'
import * as _ from 'lodash'
import moment from 'moment'

const { addBalance, reduceBalance } = useBalanceStore()
const showModal = ref(false)

const transactionTypes = ref(['Expense', 'Income', 'All'])

const statusSelected = ref('Select a Status');
const searchTerm = ref('');

const tableBodyChanges = ref(false)

const closeModal = () => {
  showModal.value = false
}

const transactionDialog = (val: any) => {
  showModal.value = val.showModal
  const item = {
    subType: val.subType,
    transactionType: val.transactionType,
    amount: Number(val.amount),
    createDate: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
  }

  if (val.transactionType === 'Income') {
    addBalance(val.amount)
  } else {
    reduceBalance(val.amount)
  }
  if (_.isNil(localStorage.getItem('financeStatus'))) {
    localStorage.setItem('financeStatus', JSON.stringify([item]))
    return
  }
  const storage = JSON.parse(localStorage.getItem('financeStatus'))
  storage.push(item)
  localStorage.setItem('financeStatus', JSON.stringify(storage))
  tableBodyChanges.value = !tableBodyChanges.value
}

</script>

<template>
  <section class="container p-2 border border-t-0 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
    <NavBar pageName="Transactions" href="/transactions" />
    <section>
      <div class="flex items-center mb-5 justify-between">
        <div class="relative">
          <div class="flex flex-col justify-center gap-2">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-list-todo text-zinc-900 dark:text-zinc-50">
                <rect x="3" y="5" width="6" height="6" rx="1"></rect>
                <path d="m3 17 2 2 4-4"></path>
                <path d="M13 6h8"></path>
                <path d="M13 12h8"></path>
                <path d="M13 18h8"></path>
              </svg>
              <h4 class="md:text-3xl text-xl font-bold text-zinc-900 dark:text-zinc-50">
                Transactions
              </h4>
            </div>
            <span class="md:text-base text-xs text-zinc-600">Manage and organize your transactions</span>
          </div>
        </div>
        <div class="relative">
          <ShowBalance />
        </div>
      </div>
      <button @click="showModal = true"
        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2 my-5">
        Add Transaction
      </button>
      <div class="flex items-center mb-5 justify-between">
        <div class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-search absolute left-2 top-2.5 h-4 w-4 text-zinc-500">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input v-model="searchTerm"
            class="flex h-9 w-full rounded-md border border-zinc-200 bg-transparent text-zinc-900 dark:text-zinc-50 px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-zinc-800 dark:file:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300 pl-8"
            placeholder="Search" value="" />
        </div>
        <div class="relative">
          <select id="statusSelect" v-model="statusSelected"
            class="flex h-9 items-center justify-between whitespace-nowrap rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 dark:border-zinc-800 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-500 dark:focus:ring-zinc-300 w-full text-zinc-900 dark:text-zinc-500">
            <option class="text-zinc-900 dark:text-zinc-500" disabled selected>Select a Status</option>
            <option v-for="transactionType in transactionTypes" :key="transactionType" :value="transactionType"
              class="text-zinc-900 dark:text-zinc-500">
              {{ transactionType }}
            </option>
          </select>
        </div>
      </div>
      <DataTable :search-term="searchTerm" :status-selected="statusSelected" :tableBodyChanges="tableBodyChanges" />
    </section>
  </section>
  <AddTransaction :isShow="showModal" @transactionDialog="transactionDialog" @closeModal="closeModal" />
</template>
