import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Redirect } from 'react-router-dom';


class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
        form_data: {},
        redirect: false
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/dashboard' />
    }
  }

  onChangePassword(e){
    this.setState({
        form_data : {
          ...this.state.form_data,
        "password": e.target.value
      }
    })
  }

  onChangeUsername(e){
    this.setState({
        form_data : {
          ...this.state.form_data,
        "username": e.target.value
      }
    })
  }

  onSubmit(e) {
    e.preventDefault();
    fetch('http://0.0.0.0:5000/login', {
      method: 'post',
      body: JSON.stringify(this.state.form_data)
    });
    this.setState({
      form_data: {}
    });
    this.setRedirect();
  } 


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
          <Form inline onSubmit={this.onSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input type="username" name="username" id="exampleEmail" placeholder="Username" onChange={this.onChangeUsername} value={this.state.form_data.username} />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={this.onChangePassword} value={this.state.form_data.password} />
            </FormGroup>
            <div>
              {this.renderRedirect()}
              <Button color="success" >Log in</Button>
            </div>
          </Form>
        </div>
        <div class="col"></div>
      </div>
    );
  }
}
export default Login;