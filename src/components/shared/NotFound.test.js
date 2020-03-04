import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';


describe('React.Component NotFound', () => {
  it('should render correctly', () => {
    const component = shallow(<NotFound />);
    expect(component).toMatchSnapshot();
  });
});
