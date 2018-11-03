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
      handleFollow: jest.fn(() => 'followButton'),
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
      handleModal: jest.fn(() => 'handleModal'),
    };
    wrapper = shallow(<UserProfile {...props} />)
  });

  test('Should render correctly if no userData is passed', () => {
    const component = renderer.create(<UserProfile />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render two buttons', () => {
    expect(wrapper.find('button')).toHaveLength(2);
  });

  test('Should render appropriate text based on props', () => {
    const handleButton = wrapper.find('button').first();
    expect(handleButton.prop('children').toLowerCase()).toEqual('following');
    handleButton.simulate('click');
    expect(props.handleFollow).toHaveBeenCalled();

    wrapper.setProps({ isFollowing: false });
    const handleButton2 = wrapper.find('button').first();
    expect(handleButton2.prop('children').toLowerCase()).toEqual('follow');
  });
});
