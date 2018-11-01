import React from 'react';
import renderer from 'react-test-renderer';
import UserProfile from '../userProfile.jsx';
import { shallow } from '../../enzyme';


describe('<UserProfile />', () => {
  let props = {};
  
  beforeEach(()=>{
    props = {
      id: 2,
      pro: 'true',
      isFollowing: 'false',
      followers: 69,
      trackCount: 28,
      userName: 'Trevor Ankunding IV',
      profilePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/jjshaw14/128.jpg',
      location: 'Davismouth, Montserrat',
    };
  });
    
  test('Should render correctly if no userData is passed', () => {
    const component = renderer.create(<UserProfile />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });


  test('Should correctly render userdata', () => {
    const component = renderer.create(<UserProfile userData={props} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render following state', () => {
    const component = renderer.create(<UserProfile following={false} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should work with props', () => {
    const component = shallow(<UserProfile {...props} />);
    const propsOut = Array.from(Object.keys(component.props()));
    expect(propsOut.length).toBe(2);
  });
});
