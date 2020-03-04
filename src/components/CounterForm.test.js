import React from 'react';
import { shallow } from 'enzyme';
import CounterForm from './CounterForm';


describe('React.Component CounterForm', () => {
  it('should render correctly', () => {
    const component = shallow(<CounterForm handleActiveNav = { () => {} } />);
    expect(component).toMatchSnapshot();
  });
});
