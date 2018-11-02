/* eslint-env jest */
/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import renderer from 'react-test-renderer';
import TrackDescription from '../trackDescription.jsx';
import HashTag from '../hashtag.jsx';
import { shallow } from '../../enzyme';

describe('<TrackDescription />', () => {
  test('Should render correctly', () => {
    const component = renderer.create(<TrackDescription />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should not render the HashTag Component if there are no hashes ', () => {
    const props = {
      description: 'Testing for the track description',
      hashtags: '',
      id: 80,
      userId: 90,
    };
    const component = shallow(<TrackDescription songData={props} />);

    expect(component.find(HashTag).length).toBe(0);
  });

  test('Should render the HashTag Component if there are hashes ', () => {
    const propsWithHash = {
      description: 'Testing for the track description',
      hashtags: 'Helllo',
      id: 80,
      userId: 90,
    };
    const component = shallow(<TrackDescription songData={propsWithHash} />);
    expect(component.find(HashTag).length).toBe(1);
  });

  test('Should change class of show / hide based on state change', () => {
    const component = shallow(<TrackDescription />);
    expect(component.find('.utd-show').length).toBe(1);
    component.setState({ isToggleOn: false });
    expect(component.find('.utd-show').length).toBe(0);
  });
});
