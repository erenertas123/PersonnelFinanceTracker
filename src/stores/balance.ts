import { ref } from 'vue'
import { defineStore } from 'pinia'
import * as _ from 'lodash'

export const useBalanceStore = defineStore('balance', () => {
  let balance: number = 0

  const addBalance = (amount: number) => {
    balance = Number(balance) + Number(amount)
  }
  const reduceBalance = (amount: number) => {
    balance -= amount
  }

  const getIncome = () => {
    if (!_.isNil(localStorage.getItem('financeStatus'))) {
      const storage = JSON.parse(localStorage.getItem('financeStatus'))
      let income = 0
      storage.forEach((item: any) => {
        if (item.transactionType === 'Income') {
          income += Number(item.amount)
        }
      })
      return income
    } else {
      return 0
    }
  }

  const getExpense = () => {
    if (!_.isNil(localStorage.getItem('financeStatus'))) {
      const storage = JSON.parse(localStorage.getItem('financeStatus'))
      let income = 0
      storage.forEach((item: any) => {
        if (item.transactionType === 'Expense') {
          income += Number(item.amount)
        }
      })
      return income
    } else {
      return 0
    }
  }

  const getBalance = () => {
    if (!_.isNil(localStorage.getItem('financeStatus'))) {
      const storage = JSON.parse(localStorage.getItem('financeStatus'))
      let localBalance = 0
      storage.forEach((item: any) => {
        if (item.transactionType === 'Income') {
          localBalance += Number(item.amount)
        } else {
          localBalance -= Number(item.amount)
        }
      })
      balance = localBalance
      return balance
    } else {
      return balance
    }
  }

  return { addBalance, reduceBalance, getBalance, getIncome, getExpense }
})
