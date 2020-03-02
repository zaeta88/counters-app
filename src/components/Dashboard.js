import React, { Component } from 'react';
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
          <div id="titlebar">
            <h2 id="title">Dashboard</h2>
          </div>
        </div>
        <div id="wrapper">
          <div id="content">
            <div id="dashboard-default-message">
              <span>
                <span>¡Welcome to the Counters Administrator app!</span>
                <p>Feel free to count as much as you want :)</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;