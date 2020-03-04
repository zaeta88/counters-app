import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.handleActiveNav(false)
  }

  render() {
    return (
      <div className="dashboard">
        <div className="site-section pb-0">
          <div className="titlebar">
            <h2 className="title">Dashboard</h2>
          </div>
        </div>
        <div className="wrapper">
          <div className="dashboard-default-message">
            <span>
              <span>¡Welcome to the Counters Administrator app!</span>
              <p>Feel free to count as much as you want :)</p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  handleActiveNav:  PropTypes.func
};

export default Dashboard;