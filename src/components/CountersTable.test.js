import React from 'react';
import { shallow } from 'enzyme';
import CountersTable from './CountersTable';


describe('React.Component CountersTable', () => {
  it('should render correctly', () => {
    const component = shallow(<CountersTable />);
    expect(component).toMatchSnapshot();
  });
});
