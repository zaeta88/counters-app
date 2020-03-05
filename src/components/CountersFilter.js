import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Col, Row } from 'react-bootstrap';
import './CountersFilter.css';
import filter from '../assets/img/filter.svg';
import i18n from '../i18n';

class CountersFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  handleChange = (event) => {
    if(event.target.name === 'greater') {
      this.props.countersGreaterThan(event.target.value)
    } else {
      this.props.countersLessThan(event.target.value)
    }   
  };

  toggleMenu = () => {
    this.setState({visible: !this.state.visible})
  }

  render() {
    return (
      <div className="sidebar row">
          <button className="btn btn-filters" onClick={this.toggleMenu}>
            <img src={filter} alt={i18n.t('counters.filter.iconAlt')}/>
          </button>
          { this.state.visible && 
            <Form.Group as={Row} controlId="validationCount">
              <Col md="6" xs="6">
                <Form.Control 
                  type="number" 
                  placeholder={i18n.t('counters.filter.greater')} 
                  min='0'
                  name="greater"
                  onChange={this.handleChange}
                />
              </Col>
              <Col md="6" xs="6">
                <Form.Control 
                  type="number" 
                  placeholder={i18n.t('counters.filter.less')} 
                  min='0'
                  name="less"
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
          }
      </div>
    );
  }
}

CountersFilter.propTypes = {
  countersGreaterThan: PropTypes.func,
  countersLessThan: PropTypes.func
};

export default CountersFilter;