import React, { Component } from 'react';
import './Counters.css';
import CountersTable from './CountersTable';
import add from '../assets/img/add.svg';

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
    const counters = [
      {id: "1", title: "steve", count: 2},{id: "2", title: "bob", count: 1},
      {id: "3", title: "stella", count: 2},{id: "4", title: "andrea", count: 1},
      {id: "5", title: "rafael", count: 1},{id: "6", title: "allison", count: 2},
      {id: "7", title: "sabrina", count: 1},{id: "8", title: "douglas", count: 2},
      {id: "9", title: "phillip", count: 1},{id: "10", title: "steff", count: 2},
      {id: "11", title: "cata", count: 1},{id: "12", title: "robert", count: 2},
      {id: "13", title: "angel", count: 2},{id: "14", title: "santi", count: 1}
    ];

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
                  <a className="right-button btn btn-outline-success" href="/counters/new">
                    <img src={add}></img> Add Counter
                  </a>
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