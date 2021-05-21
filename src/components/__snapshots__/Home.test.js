import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home/Home';

it('renders correctly', () => {
  const homePage = renderer
    .create(<Home />)
    .toJSON();
  expect(homePage).toMatchSnapshot();
});