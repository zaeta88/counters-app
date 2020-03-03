import React from 'react';
import { shallow } from 'enzyme';
import Counters from './Counters';


describe('React.Component Counters', () => {
  it('should render correctly', () => {
    const component = shallow(<Counters handleActiveNav = { () => {} } />);
    expect(component).toMatchSnapshot();
  });
});
