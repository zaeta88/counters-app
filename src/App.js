import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './reducers/actions'
import './App.css';
import Menu from './components/shared/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return ( 
    <Menu
      counters = {this.props.counters}
      actions={this.props.actions}
    /> );
  }
}

function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);