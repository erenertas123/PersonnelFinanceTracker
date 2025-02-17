<script setup lang="ts">
import router from '@/router';


const transactionClicked = () => {
  router.push({
    path: '/transactions'
  });
}

const analyticsClicked = () => {
  router.push({
    path: '/analytics'
  });
}

</script>

<template>
  <section class="container p-2 border border-t-0 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
    <div class="flex items-center mb-5 justify-between">
      <div class="flex flex-col justify-center gap-2">
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-house">
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path
              d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
          <h4 class="md:text-3xl text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Welcome to Personnel Finance Tracker
          </h4>
        </div>
        <div class="flex flex-col justify-center">
          <section class="grid lg:grid-cols-3 grid-cols-1 gap-3 lg:mt-10 mt-5" @click="transactionClicked">
            <div
              class="rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 cursor-pointer">
              <div class="flex items-center space-y-1.5 p-6 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-arrow-left-right m-0">
                  <path d="M8 3 4 7l4 4" />
                  <path d="M4 7h16" />
                  <path d="m16 21 4-4-4-4" />
                  <path d="M20 17H4" />
                </svg>
                <div class="font-semibold tracking-tight text-lg !my-0">Transactions</div>
              </div>
              <div class="p-6 pt-0">
                Create, organize and track your transactions via here.
              </div>
            </div>
          </section>
          <section class="grid lg:grid-cols-3 grid-cols-1 gap-3 lg:mt-10 mt-5" @click="analyticsClicked">
            <div
              class="rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 cursor-pointer">
              <div class="flex items-center space-y-1.5 p-6 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-chart-area">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                  <path
                    d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z" />
                </svg>
                <div class="font-semibold tracking-tight text-lg !my-0">Analytics</div>
              </div>
              <div class="p-6 pt-0">
                Analyze your expense and incomes.
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
