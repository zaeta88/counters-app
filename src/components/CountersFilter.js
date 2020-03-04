import React, { Component } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import './CountersFilter.css';
import filter from '../assets/img/filter.svg';

class CountersFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  handleChange = (event) =>{
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
            <img src={filter} alt="Filter Icon, Filter counters table."/>
          </button>
          { this.state.visible && 
            <Form.Group as={Row} controlId="validationCount">
              <Col md="6">
                <Form.Control 
                  type="number" 
                  placeholder="Greater Than >" 
                  min='0'
                  name="greater"
                  onChange={this.handleChange}
                />
              </Col>
              <Col md="6">
                <Form.Control 
                  type="number" 
                  placeholder="Less Than <" 
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

export default CountersFilter;