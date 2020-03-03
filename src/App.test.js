import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import { shallow } from 'enzyme';
import App from './App';

const mockStore = configureMockStore()

describe('React.Component App', () => {
  it('should render correctly', () => {
    let store = mockStore({});
    const component = shallow(
      <Provider store={store}>
        <App />
      </ Provider>
    )
    expect(component).toMatchSnapshot();
  });
});
