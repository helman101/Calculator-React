import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../Quote/Quote';

it('renders correctly', () => {
  const quotePage = renderer
    .create(<Quote />)
    .toJSON();
  expect(quotePage).toMatchSnapshot();
});
