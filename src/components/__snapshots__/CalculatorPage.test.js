import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorPage from '../Calculate-page/CalculatorPage';

it('renders correctly', () => {
  const calculatorPage = renderer
    .create(<CalculatorPage />)
    .toJSON();
  expect(calculatorPage).toMatchSnapshot();
});
