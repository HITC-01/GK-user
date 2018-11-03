import React from 'react';
import renderer from 'react-test-renderer';
import Page from '../page.jsx';
import { shallow } from '../../enzyme.js';
import 'isomorphic-fetch';

describe('<Page />', () => {
  test('Should render correctly', () => {
    const component = renderer.create(<Page />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Renders correct state based on passed in values', () => {
    const wrapper = shallow(<Page show={false} isFollowing={true} hello={false} />);
    const instance = wrapper.instance();
    const { state } = instance;
    expect(state.show).toBe(false);
    expect(state.isFollowing).toBe(true);
    expect(state.hello).toBe(undefined);
  });
});
