<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import * as _ from 'lodash';

const storage = localStorage.getItem('financeStatus')

const optionList: any = [];
const series: any = [];


if (!_.isNil(storage)) {
  const localData = JSON.parse(storage)
  optionList.push(
    {
      title: {
        text: 'Transactions via Date',
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          fontFamily: 'ui-sans-serif',
          color: '#ffffff'
        },
      },
      chart: {
        id: 'Transactions via Date',
      },
      xaxis: {
        categories: localData!.map((item: any) => item.createDate)
      }
    },
    {
      title: {
        text: 'Expense via Date',
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          fontFamily: 'ui-sans-serif',
          color: '#ffffff'
        },
      },
      chart: {
        id: 'Expense via Date',
      },
      xaxis: {
        categories: localData!.map((item: any) => item.createDate)
      }
    },
    {
      title: {
        text: 'Incoming via Date',
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          fontFamily: 'ui-sans-serif',
          color: '#ffffff'
        },
      },
      chart: {
        id: 'Incoming via Date',
      },
      xaxis: {
        categories: localData!.map((item: any) => item.createDate)
      }
    },
    {
      title: {
        text: 'Total Transactions',
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          fontFamily: 'ui-sans-serif',
          color: '#ffffff'
        },
      },
      chart: {
        type: 'pie',
      },
      labels: ['Expense', 'Income'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  );
  series.push(
    [
      {
        name: 'transactions',
        data: localData!.map((item: any) => item.amount)
      }
    ],
    [
      {
        name: 'expense',
        data: localData!.filter((x: any) => x.transactionType === 'Expense').map((item: any) => item.amount)
      }
    ],
    [
      {
        name: 'income',
        data: localData!.filter((x: any) => x.transactionType === 'Income').map((item: any) => item.amount)
      }
    ],
    [
      {
        name: 'transactions',
        data: [
          localData!.filter(x => x.transactionType === 'Expense').reduce((sum, item) => sum + item.amount, 0),
          localData!.filter(x => x.transactionType === 'Income').reduce((sum, item) => sum + item.amount, 0)
        ]
      }
    ],
  );
}
</script>
<template>
  <NavBar pageName="Analytics" href="/analytics" />
  <section>
    <div class="flex items-center mb-5 justify-between">
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
            Analytics
          </h4>
        </div>
        <span class="md:text-base text-xs text-zinc-600">Track your transactions via here.</span>
      </div>
    </div>
    <div class="flex items-center mb-5 justify-between">
      <div class="grid items-center gap-5 grid-cols-2">
        <apexchart v-for="(option, index) in optionList" width="500" type="bar" :options="option"
          :series="series[index]">
        </apexchart>
      </div>
    </div>
  </section>
</template>
