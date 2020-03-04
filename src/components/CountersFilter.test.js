import React from 'react';
import { shallow } from 'enzyme';
import CountersFilter from './CountersFilter';


describe('React.Component CountersFilter', () => {
  it('should render correctly', () => {
    const component = shallow(<CountersFilter />);
    expect(component).toMatchSnapshot();
  });
});
