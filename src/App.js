import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './reducers/actions'
import './App.css';
import Main from './components/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return ( 
    <Main
      counters = {this.props.counters}
      actions={this.props.actions}
    /> );
  }
}

function mapStateToProps(state) {
  return {
    counters: state.counters
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);