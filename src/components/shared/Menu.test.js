import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';


describe('React.Component Menu', () => {
  it('should render correctly', () => {
    const component = shallow(<Menu />);
    expect(component).toMatchSnapshot();
  });
});
