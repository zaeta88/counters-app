import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './Dashboard';
import Counters from './Counters';
import CounterForm from './CounterForm';
import NotFound from './shared/NotFound';
import { get } from '../fetcher';
import cornershop from '../assets/img/cornershop.png';
import './Main.css';
import i18n from '../i18n';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: false
    };
    this.handleActiveNav = this.handleActiveNav.bind(this);
  }

  componentDidMount() {
    this.loadCounters();
  }

  handleActiveNav = (value) => {
    this.setState({
      activeNav: value
    })
  }

  loadCounters = async () => {
    let result = await get('/api/v1/counters')
    this.setState({
      counters: result
    })
  }

  render() {
    return (
      <div className="wrapper-div" id="wrapper">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" href="/"><span className="green-text">{i18n.t('menu.title')}</span> {i18n.t('menu.admin')}</a>
              <div className="navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className={`nav-item ${!this.state.activeNav && 'active'}`}>
                    <Link className="nav-link" to="/">{i18n.t('menu.dashboard')}</Link>
                  </li>
                  <li className={`nav-item ${this.state.activeNav && 'active'}`}>
                    <Link className="nav-link" to="/counters">{i18n.t('menu.title')}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <main id="main">
            <div className="container">
              <Switch>
                <Route path="/counters">
                  <Counters 
                    actions = {this.props.actions}
                    counters = {this.props.counters}
                    handleActiveNav = { this.handleActiveNav }
                  />
                </Route>
                <Route path="/counter/new">
                  <CounterForm 
                    actions = {this.props.actions}
                    handleActiveNav = { this.handleActiveNav }
                  />
                </Route>
                <Route path="/">
                  <Dashboard 
                    handleActiveNav = { this.handleActiveNav }
                  />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </main>
        </Router>
        <div className="footer mt-5 text-right" id="footer">
          <div className="container">
            <p>{i18n.t('footer.powered')} <a className="font-weight-bold" href="https://cornershopapp.com/es-cl">{i18n.t('footer.cornershop')}</a> 
            <img src={cornershop} alt={i18n.t('footer.iconAlt')}></img></p>
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func),
  counters: PropTypes.array
};

export default Main;