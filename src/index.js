import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './reducers/store'
import { Provider } from 'react-redux';

let initialState = {
  counters: []
}

const store = configureStore(initialState)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();
