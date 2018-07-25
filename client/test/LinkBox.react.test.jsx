import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import enzyme from 'enzyme';
import React from 'react';
import LinkBox from '../LinkBox.jsx';

enzyme.configure({ adapter: new Adapter() });


describe('LinkBox testing suite', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LinkBox name="Robin" />);
  });


  it('should render one message', () => {
    expect(wrapper.find('.LinkBox').exists()).toEqual(true);
  });

  it('should have working links', () => {
    expect(wrapper.find('.LinkBox').children()).toHaveLength(5);
  });
});
