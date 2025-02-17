<script setup lang="ts">
import { ref, emit } from 'vue'

const props = defineProps({
  isShow: { type: Boolean, required: true, default: false },
})

const transactionTypes = ref(['Expense', 'Income'])

const expenseTypes = ref(['Food', 'Rent', 'Utility', 'Bills'])
const incomeTypes = ref(['Salary', 'Bonus', 'Check'])

const selectedTransactionType = ref(null)
const selectedSubType = ref(null)

const amount = ref(null)

const emit = defineEmits(['transactionDialog'])

const updateSelection = () => {
  selectedSubType.value = null
}

const createTransaction = () => {
  emit('transactionDialog', {
    amount: amount.value,
    transactionType: selectedTransactionType.value,
    subType: selectedSubType.value,
    showModal: false,
  })
}
</script>

<template>
  <div v-if="props.isShow"
    class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
    <div
      class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-zinc-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-zinc-800 dark:bg-zinc-950 sm:max-w-[425px]">
      <h2 class="text-lg font-semibold leading-none tracking-tight text-zinc-900 dark:text-zinc-50">
        Add Transaction
      </h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400">
        You can add transaction via here. Click save button when you are done.
      </p>
      <div class="grid gap-4 py-4">
        <div>
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-900 dark:text-zinc-50 text-right">
            Transaction Type
          </label>
          <select id="transactionType" v-model="selectedTransactionType" @change="updateSelection"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected disabled>Choose a transaction type</option>
            <option v-for="type in transactionTypes" :key="type" :value="type">
              {{ type }}
            </option>
          </select>
        </div>
        <div>
          <label for="expenseType" v-if="selectedTransactionType === 'Expense'"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-900 dark:text-zinc-50 text-right">
            Expense Type
          </label>
          <select id="expenseType" v-if="selectedTransactionType === 'Expense'" v-model="selectedSubType"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected disabled>Choose an expense type</option>
            <option v-for="expenseType in expenseTypes" :key="expenseType" :value="expenseType">
              {{ expenseType }}
            </option>
          </select>

          <label for="incomeType" v-if="selectedTransactionType === 'Income'"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-900 dark:text-zinc-50 text-right">
            Income Type
          </label>
          <select id="incomeType" v-if="selectedTransactionType === 'Income'" v-model="selectedSubType"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected disabled>Choose an income type</option>
            <option v-for="incomeType in incomeTypes" :key="incomeType" :value="incomeType">
              {{ incomeType }}
            </option>
          </select>
        </div>
        <div v-if="selectedSubType">
          <label for="amount-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
              </svg>
            </div>
            <input type="text" v-model="amount" id="amount-input" aria-describedby="helper-text-explanation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter amount" pattern="^\d{1,}(\.\d{1,2})?$" required />
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <button @click="createTransaction"
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2">
            Create Transaction
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
