import React from 'react';
import renderer from 'react-test-renderer';
import UserProfile from '../userProfile.jsx';
import { shallow } from '../../enzyme';


describe('<UserProfile />', () => {
  let props = {};
  let wrapper = {};
  beforeEach(() => {
    props = {
      isFollowing: true,
      handleFollow: jest.fn(),
      userData: {
        id: 2,
        pro: 'true',
        isFollowing: 'false',
        followers: 69,
        trackCount: 28,
        userName: 'Trevor Ankunding IV',
        profilePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/jjshaw14/128.jpg',
        location: 'Davismouth, Montserrat',
      },
      handleModal: jest.fn(() => 'followButton'),
    };
    wrapper = shallow(<UserProfile {...props} />)
  });

  test('Should render correctly if no userData is passed', () => {
    const component = renderer.create(<UserProfile />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render two buttons', () => {
    expect(wrapper.find('button')).toHaveLength(2)
  });
});
