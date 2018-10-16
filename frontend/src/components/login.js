import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <div class="row">
        <div class="col"></div>
        <div class="col-6">
          <h3>
            <Breadcrumb>
              <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
              <BreadcrumbItem active>Login</BreadcrumbItem>
            </Breadcrumb>
          </h3>
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input type="email" name="email" id="exampleEmail" placeholder="Username" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            <Button color="success">Login</Button>
          </Form>
        </div>
        <div class="col"></div>
      </div>
    );
  }
}
export default Login;