import { describe, it, expect, test, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import DataTable from '../DataTable.vue'
import * as _ from 'lodash';

describe('DataTable', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(DataTable, {
      props: {
        statusSelected: 'statusSelected',
        searchTerm: 'searchTerm',
        tableBodyChanges: true
      }
    });
  });

  it('renders properly', async () => {
    const imp = await import('../DataTable.vue');
    expect(imp).toBeTruthy();
  });

  test('getTransactionColor for income', () => {
    const instance = wrapper.vm;
    const retValue = (instance as any).getTransactionColor('Income');
    expect(retValue).toBe('bg-green-100 text-green-800');
  });
  test('getTransactionColor for expense', () => {
    const instance = wrapper.vm;
    const retValue = (instance as any).getTransactionColor('Expense');
    expect(retValue).toBe('bg-red-100 text-red-800');
  });

  test('sortTable called', () => {

    const columnName = 'amount';
    (instance as any).sortTable(columnName);
    const tableHeader = (instance as any).tableHeader;
    const activeHeader = _.findIndex((instance as any).tableHeader, ['columnName', columnName]);
    expect(tableHeader[activeHeader].isSorted).toBeTruthy();
    expect(tableHeader[activeHeader].sort).toBe('desc');
    expect(tableHeader[activeHeader].title).toBe('Amount');
  });
});