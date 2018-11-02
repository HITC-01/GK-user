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
    const wrapper = shallow(<Page show={false} isFollowing={true} hello={false}/>);

    expect(wrapper.instance().state.show).toBe(false);
    expect(wrapper.instance().state.isFollowing).toBe(true);
    expect(wrapper.instance().state.hello).toBe(undefined);
  });
});
