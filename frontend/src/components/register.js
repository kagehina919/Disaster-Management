import React, { Component } from 'react';
import { Jumbotron, Button, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Register extends Component {
  render() {
    return (
    <div class="row">
    <div class="col"></div>
    <div class="col-6">
    <h3>
    <Breadcrumb>
        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Register</BreadcrumbItem>
      </Breadcrumb>
    </h3>
    <Jumbotron>
      <Form>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="password" name="password" id="examplePassword" placeholder="Enter password" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="username" name="username" id="exampleUsername" placeholder="Enter username" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select Region</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Central</option>
            <option>East</option>
            <option>North</option>
            <option>South</option>
            <option>West</option>
          </Input>
        </FormGroup>
        <Button color="primary" >Submit</Button>
      </Form> 
    </Jumbotron>
    </div>
    <div class="col"></div>
  </div>
    );
  }
}

export default Register;
