import React, { Component } from 'react';
import './Counters.css';
import CountersTable from './CountersTable';
import add from '../assets/img/add.svg';
import { Link } from "react-router-dom";

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.handleActiveNav(true)
  }
  
  render() {
    const counters = this.props.counters || [];

    return (
      <div className="counters">
        <div className="site-section pb-0">
          <div className="title-bar row">
            <div className="titlebar-left col-md-6">
              <h2 className="title">Counters</h2>
            </div>
            <div className="titlebar-right col-md-6">
              <div className="action-items row">
                <span className="item">
                  <Link className="right-button btn btn-outline-success" to="/counter/new">
                    <img src={add}></img> Add Counter
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="content row mt-4">
            <CountersTable 
              counters = { counters }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Counters;