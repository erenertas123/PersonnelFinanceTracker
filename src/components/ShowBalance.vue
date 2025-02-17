<script setup lang="ts">

import { useBalanceStore } from '../stores/balance'

const { getBalance, getIncome, getExpense } = useBalanceStore()

const showBalance = () => {
  return getBalance()
}

const totalIncome = () => {
  return getIncome()
}

const totalExpense = () => {
  return getExpense()
}

</script>
<template>
  <div class="flex items-center justify-between">
    <div class="relative">
      <div class="flex p-2 items-center gap-2 justify-between">
        <h6 class="text-lg font-bold dark:text-white">Balance</h6>
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 20 16">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        </svg>
      </div>
      <div class="flex items-center gap-2 p-2 justify-center md:text-base text-xs dark:text-white">
        {{ showBalance() }}
      </div>
    </div>
    <div class="relative">
      <div class="flex p-2 items-center gap-2 justify-between">
        <h6 class="text-lg font-bold dark:text-white">Total Income</h6>
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 20 16">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        </svg>
      </div>
      <div class="flex items-center gap-2 p-2 justify-center md:text-base text-xs dark:text-white">
        {{ totalIncome() }}
      </div>
    </div>
    <div class="relative">
      <div class="flex p-2 items-center gap-2 justify-between">
        <h6 class="text-lg font-bold dark:text-white">Total Expense</h6>
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 20 16">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        </svg>
      </div>
      <div class="flex items-center gap-2 p-2 justify-center md:text-base text-xs dark:text-white">
        {{ totalExpense() }}
      </div>
    </div>
  </div>
</template>
