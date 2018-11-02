import React from 'react';
import renderer from 'react-test-renderer';
import HashTag from '../hashtag.jsx';
import { shallow, render } from '../../enzyme';


describe('<HashTag />', () => {
  test('Should render correctly', () => {
    const component = renderer.create(<HashTag />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('render correct component prop type', () => {
    const component = shallow(<HashTag hash="testing" />);

    expect(component.find('.up-hash').exists()).toBe(true);
  });

  test('Should render matching element', () => {
    const component = shallow(<HashTag hash="hashing" />);

    expect(component.containsMatchingElement(<div><span className="up-hash">#hashing</span></div>)).toBeTruthy();
  });
});
