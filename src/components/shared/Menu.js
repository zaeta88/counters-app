import React, { Component } from 'react';
import './Menu.css';
import Dashboard from '../Dashboard';
import Counters from '../Counters';
import CounterForm from '../CounterForm';
import NotFound from './NotFound';
import cornershop from '../../assets/img/cornershop.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { get } from '../../fetcher';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: false
    };
    this.handleActiveNav = this.handleActiveNav.bind(this);
    this.handleCountersChange = this.handleCountersChange.bind(this);
    this.handleCountersAdded = this.handleCountersAdded.bind(this);
  }

  componentDidMount() {
    this.loadCounters();
  }

  handleActiveNav = (value) => {
    this.setState({
      activeNav: value
    })
  }

  handleCountersChange = (counters) => {
    this.setState({
      counters
    })
  }

  handleCountersAdded = (counter) => {
    let counters = this.state.counters.push(counter)
    this.setState({
      counters
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
              <a className="navbar-brand" href="/"><span className="green-text">Counters</span> Admin Test.</a>
              <div className="navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className={`nav-item ${!this.state.activeNav && 'active'}`}>
                    <Link className="nav-link" to="/">Dashboard</Link>
                  </li>
                  <li className={`nav-item ${this.state.activeNav && 'active'}`}>
                    <Link className="nav-link" to="/counters">Counters</Link>
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
                    counters = {this.state.counters}
                    handleActiveNav = { this.handleActiveNav }
                    handleCountersChange = { this.handleCountersChange }
                  />
                </Route>
                <Route path="/counter/new">
                  <CounterForm 
                    actions = {this.props.actions}
                    handleCountersAdded = { this.handleCountersAdded }
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
            <p>Powered by <a className="font-weight-bold" href="https://cornershopapp.com/es-cl">Cornershop</a> 
            <img src={cornershop}></img></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;