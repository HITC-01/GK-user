import React from 'react';
import renderer from 'react-test-renderer';
import ReportPage from '../ReportPage.jsx';

describe('<ReportPage />', () => {
  test('Should render correctly', () => {
    const component = renderer.create(<ReportPage />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
