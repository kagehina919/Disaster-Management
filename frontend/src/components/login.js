import React, { Component } from 'react';
import { Alert, Button, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
        form_data: {},
        redirect_dashboard: false
    }
  }
  
  setRedirectDashboard = () => {
    this.setState({
      redirect_dashboard: true,
    })
  }

  renderRedirectDashboard = () => {
    if (this.state.redirect_dashboard) {
      return <Redirect to='/dashboard' />;
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

  renderAlert(){
    if (this.state.alert)
      return <Alert color="danger">{this.state.alert_message}</Alert>
  }

  onSubmit(e) {
    e.preventDefault();
    const self = this;
    fetch('http://0.0.0.0:5000/login', {
      method: 'post',
      body: JSON.stringify(this.state.form_data)
    }).then(function(response) {
      return response.json();
    }).then(function(post_response){
      if(post_response.type == 'success'){
        self.setRedirectDashboard();
      }
      else if(post_response.type == 'failure'){
        self.setState({
          alert: true,
          alert_message: post_response.message
        })
      }
    });
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
          {this.renderAlert()}
          <Form inline onSubmit={this.onSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input type="username" name="username" id="exampleEmail" placeholder="Username" onChange={this.onChangeUsername} value={this.state.form_data.username} />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={this.onChangePassword} value={this.state.form_data.password} />
            </FormGroup>
            <div>
              {this.renderRedirectDashboard()}
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