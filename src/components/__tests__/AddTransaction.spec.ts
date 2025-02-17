import { describe, it, expect, test, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import AddTransaction from '../AddTransaction.vue'
import * as _ from 'lodash';

describe('AddTransaction', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(AddTransaction, {
      props: {
        isShow: true
      }
    });
  });

  it('renders properly', async () => {
    const imp = await import('../AddTransaction.vue');
    expect(imp).toBeTruthy();
  });

  test('updateSelection called', () => {
    const instance = wrapper.vm;
    (instance as any).updateSelection();
    const selectedSubType = (instance as any).selectedSubType
    expect(selectedSubType).toBe(null);
  });

  test('createTransaction called', () => {
    const instance = wrapper.vm;
    (instance as any).createTransaction();
    const emitted = wrapper.emitted();
    expect(emitted['transactionDialog'].length).toBe(1);
    expect(emitted['transactionDialog'][0]).toStrictEqual([{
      amount: null,
      transactionType: null,
      subType: null,
      showModal: false
    }]);
  });

});