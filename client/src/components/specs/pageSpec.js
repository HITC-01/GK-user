import React from 'react';
import renderer from 'react-test-renderer';
import Page from '../page.jsx';
import 'isomorphic-fetch';

describe('<Page />', () => {
  test('Should render correctly', () => {
    const component = renderer.create(<Page />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
