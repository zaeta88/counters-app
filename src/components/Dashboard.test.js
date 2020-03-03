/* eslint-disable no-console */
import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';


describe('React.Component Dashboard', () => {
  it('should render correctly', () => {
    const component = shallow(<Dashboard handleActiveNav = { () => {} } />);
    expect(component).toMatchSnapshot();
  });
});
