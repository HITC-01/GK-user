import React from 'react';
import renderer from 'react-test-renderer';
import TrackDescription from '../trackDescription.jsx';
import HashTag from '../hashtag.jsx';

describe('<TrackDescription />', () => {
  test('Should render correctly', () => {
    const component = renderer.create(<TrackDescription />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render correctly', () => {
    const component = renderer.create(<TrackDescription />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
