import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';


describe('React.Component Main', () => {
  it('should render correctly', () => {
    const component = shallow(<Main />);
    expect(component).toMatchSnapshot();
  });
});
