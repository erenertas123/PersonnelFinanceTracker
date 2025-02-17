# PersonnelFinanceTracker

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
Personal Finance Tracking Application is a platform that allows you to easily manage your income and expenses.

**Application Usage**

- **Adding a New Transaction**
    1. Select the transaction type (**Income** or **Expense**).
    2. Enter the amount.
    3. Choose a category.
    4. Click the "**Save**" button to add the transaction.
- **Viewing, Sorting, and Filtering Transactions**
    - All transactions are listed on the main screen.
    - Use the **Date Filter** to view transactions within a specific date range.
    - Use the **Category Filter** to list transactions for specific categories.
    - You can sort all columns in ascending or descending order.
- **Total Income && Total Expense and Balance**
    - **Total Income:** The total income amount calculated from entered transactions is displayed in the top right corner of the screen.
    - **Total Expense:** The total expense amount calculated from entered expense transactions is shown in the top right corner.
    - **Balance:** The current balance, calculated by subtracting total expenses from total income, can be viewed in the top right corner of the screen.
- **Income & Expense Charts**
    - On the Dashboard page, you can view your income and expenses in graphical form.
    - The charts update automatically based on your transactions.

**Home Page**

  ![image](https://github.com/user-attachments/assets/4f4bedda-b31b-4f5f-9e59-2e617e7d91be)
  As shown on image, users can click through sections to check dashboards or transaction list.

**Transaction List**
 
  ![image](https://github.com/user-attachments/assets/16bd3ac4-f64e-45cd-a12a-d83804440491)
  Through transaction list sections, users can add new transactions, review old ones, filter by title and status. Also users can order it by clicking to table headers.

  At the top right of this page users can see total balance, income and expenses. 
  If users want to add new transaction they can use "**Add Transaction**" button.

**Add Transaction**

  ![image](https://github.com/user-attachments/assets/66bfa40c-b247-4a06-8080-65ec7a59719d)

  When users clicked "**Add Transaction**" this pop-up shown. 

**Analytics**

![image](https://github.com/user-attachments/assets/312681e5-8bbc-4ec1-97af-eef0bfaadba2)

From Analytics page users can check their expenses and incomes with different categories.
