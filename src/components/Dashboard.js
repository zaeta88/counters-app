import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dashboard.css';
import i18n from '../i18n';

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
            <h2 className="title">{i18n.t('menu.dashboard')}</h2>
          </div>
        </div>
        <div className="wrapper">
          <div className="dashboard-default-message">
            <span>
              <span>{i18n.t('dashboard.welcome')}</span>
              <p>{i18n.t('dashboard.feelFree')}</p>
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