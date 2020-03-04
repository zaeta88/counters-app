import React from 'react';
import { shallow } from 'enzyme';
import DeletAlert from './DeleteAlert';


describe('React.Component DeletAlert', () => {
  it('should render correctly', () => {
    const component = shallow(<DeletAlert 
      handleDelete = { () => {} } 
      row= { {id: 0, title: 'test'} }
    />);
    expect(component).toMatchSnapshot();
  });
});
