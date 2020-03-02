import React, { Component } from 'react';
import './App.css';
import Menu from './components/shared/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return ( <Menu/> );
  }
}

export default App;