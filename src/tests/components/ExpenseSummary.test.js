import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should render ExpenseSummary with one expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={2353729532} />);
  expect(wrapper).toMatchSnapshot();
});