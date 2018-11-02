/* eslint-env jest */
/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import renderer from 'react-test-renderer';
import ReportPage from '../reportPage.jsx';
import { shallow } from '../../enzyme';

describe('<ReportPage />', () => {
  let props = {};
  beforeEach(() => {
    props = {
      show: true,
      handleClose: jest.fn(),
    };
  });

  test('Should render correctly', () => {
    const component = renderer.create(<ReportPage />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render button, p, div, and section tag', () => {
    const component = shallow(<ReportPage />);

    expect(component.find('button').length).toEqual(1);
    expect(component.find('p').length).toEqual(1);
    expect(component.find('div').length).toEqual(2);
    expect(component.find('section').length).toEqual(1);
  });

  test('Should contain the disclaimer paragraphs', () => {
    const component = shallow(<ReportPage />);

    expect(component.text()).toContain('Reported tracks');
  });

  test('Check each props length', () => {
    const component = shallow(<ReportPage {...props} />);
    const propsArray = Array.from(Object.keys(component.props()));
    expect(propsArray.length).toBe(2);
  });
});
