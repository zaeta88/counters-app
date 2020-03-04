import React, { Component } from 'react';
import './Counters.css';
import CountersTable from './CountersTable';
import add from '../assets/img/add.svg';
import { Link } from "react-router-dom";
import { del, post } from '../fetcher';

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.handleActiveNav(true)
  }

  handleDeleteRequest = async (counter) => {
    const counters = this.props.counters.filter((o) => { return o.id !== counter.id});
    
    await del('/api/v1/counter', counter);
    this.props.handleCountersChange(counters);
    this.props.actions.deleteCounter(counter.id);
  }

  handleDelete = (counter) => {
    this.handleDeleteRequest(counter);
  }

  handleIncRequest = async (counter) => {
    const result = await post('/api/v1/counter/inc', counter);
    this.props.handleCountersChange(result);
    this.props.actions.incCounter(counter.id);
  }

  handleIncrease = (counter) => {
    this.handleIncRequest(counter);
  }

  handleDecRequest = async (counter) => {
    const result = await post('/api/v1/counter/dec', counter);
    this.props.handleCountersChange(result);
    this.props.actions.decCounter(counter.id);
  }

  handleDecrease = (counter) => {
    if (counter.count > 0) {
      this.handleDecRequest(counter)
    }
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
              handleCountersChange = { this.props.handleCountersChange }
              handleDelete = { this.handleDelete }
              handleIncrease = { this.handleIncrease }
              handleDecrease = { this.handleDecrease }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Counters;