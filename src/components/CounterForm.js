import React, { Component } from 'react';
import './CounterForm.css';
import { Form, Col, Button } from 'react-bootstrap';

class CounterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      validForm: false,
      title: '',
      count: 0
    };
  }

  handleChange = (event) =>{
    this.setState({ 
      [event.target.name]:event.target.value 
    });
  };

  handleSubmit = (event) => {
    const { title, count, validForm } = this.state;
    const form = event.currentTarget;

    if (form.checkValidity()) {
      this.handleRequest({ title, count });
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({
      validated: form.checkValidity()
    })
  }

  handleRequest = async (data) => {
    const result = await fetch('http://localhost:3001/api/v1/counter', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json()).then((resp) => {
      return resp
    })
    
    this.props.handleCountersChange(result)
    this.props.actions.addCounter(result.id, result.title, result.count);
  };


  render() {
    const { validated, title, count } = this.state;
    return (
      <div className="counters">
        <div className="site-section pb-0">
          <div className="title-bar row">
            <div className="titlebar-left col-md-6">
              <h2 className="title">Add Counter</h2>
            </div>
          </div>
          <div className="content row mt-4">
            <div className="content-wrapper container">
              <div className="col-md-12">
                <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationTitle">
                      <Form.Control 
                        type="text" 
                        placeholder="Title" 
                        name="title" 
                        onChange={this.handleChange} 
                        required 
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a title.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCount">
                      <Form.Control 
                        type="number" 
                        placeholder="Count Value" 
                        min='0'
                        name="count" 
                        onChange={this.handleChange} 
                        required 
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid count.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>

                  <Button 
                    className="btn btn-outline-success mt-2" 
                    type="submit" 
                  >
                    Save it!
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CounterForm;