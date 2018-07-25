import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import enzyme from 'enzyme';
import React from 'react';
import Stardate from '../Stardate.jsx';

enzyme.configure({ adapter: new Adapter() });


describe('Stardate testing suite', () => {
  it('should render one Stars Bar', () => {
    const wrapper = shallow(<Stardate
      posted="2018-12-25"
      stars={3}
      message="Here is a review.  The text is long!"
    />);
    expect(wrapper.find('.StarsRow').exists()).toEqual(true);
  });
});
