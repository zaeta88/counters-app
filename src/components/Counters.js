import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counters.css';
import CountersTable from './CountersTable';
import add from '../assets/img/add.svg';
import { Link } from "react-router-dom";
import { del, post } from '../fetcher';
import i18n from '../i18n';

class Counters extends Component {
  componentDidMount() {
    this.props.handleActiveNav(true)
  }

  handleDeleteRequest = async (counter) => {    
    await del('/api/v1/counter', counter);
    this.props.actions.deleteCounter(counter.id);
  }

  handleDelete = (counter) => {
    this.handleDeleteRequest(counter);
  }

  handleIncRequest = async (counter) => {
    await post('/api/v1/counter/inc', counter);
    this.props.actions.incCounter(counter.id);
  }

  handleIncrease = (counter) => {
    this.handleIncRequest(counter);
  }

  handleDecRequest = async (counter) => {
    await post('/api/v1/counter/dec', counter);
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
              <h2 className="title">{i18n.t('menu.title')}</h2>
            </div>
            <div className="titlebar-right col-md-6">
              <div className="action-items row">
                <span className="item">
                  <Link className="right-button btn btn-outline-success" to="/counter/new">
                    <img src={add} alt={i18n.t('counters.addIconAlt')}></img> {i18n.t('counters.add')}
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

Counters.propTypes = {
  handleActiveNav: PropTypes.func,
  handleCountersChange: PropTypes.func,
  actions: PropTypes.objectOf(PropTypes.func),
  counters: PropTypes.array
};

export default Counters;