import React, { Component } from 'react';
import './CounterForm.css';
import { Form, Col, Button, Alert } from 'react-bootstrap';
import { post } from '../fetcher';

class CounterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false,
      validated: false,
      title: '',
      count: 0
    };
  }

  componentDidMount() {
    this.props.handleActiveNav(true)
  }

  handleChange = (event) =>{
    this.setState({ 
      [event.target.name]:event.target.value 
    });
  };

  handleSubmit = (event) => {
    const { title, count } = this.state;
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      this.handleRequest({ title, count });
    }
    this.setState({
      validated: form.checkValidity()
    })
  }

  handleRequest = async (data) => {
    const result = await post('/api/v1/counter', data);

    this.setAlert(true);
    this.props.actions.addCounter(result.id, result.title, result.count);
  };

  setAlert = (value) => {
    this.setState({
      alert: value
    })
  }

  render() {
    const { alert, validated, title, count } = this.state;
    return (
      <div className="counters">
        { alert &&
            <Alert variant="success"  onClose={() => this.setAlert(false)} dismissible>
              <Alert.Heading>Counter Successfully Saved!</Alert.Heading>
            </Alert>        
        }
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