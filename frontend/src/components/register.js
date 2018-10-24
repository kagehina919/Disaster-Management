import React, { Component } from 'react';
import { Jumbotron, Button, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeRegion = this.onChangeRegion.bind(this);
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

  onChangeEmail(e){
    this.setState({
        form_data : {
          ...this.state.form_data,
        "email": e.target.value
      }
    })
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

  onChangeRegion(e){
    console.log(e);
    this.setState({
        form_data : {
          ...this.state.form_data,
        "region": e.target.value
      }
    })
  }

  onSubmit(e) {
    e.preventDefault();
    fetch('http://0.0.0.0:5000/register', {
      method: 'post',
      body: JSON.stringify(this.state.form_data)
    }).then(function(response) {
      console.log()
      return response.json();
    }).then(function(m){
        console.log(m)
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
        <BreadcrumbItem active>Register</BreadcrumbItem>
      </Breadcrumb>
    </h3>
    <Jumbotron>
      <Form onSubmit={this.onSubmit}> 
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="email" name="email" id="email" placeholder="Enter Email" onChange={this.onChangeEmail} value={this.state.form_data.email}/>
        </FormGroup>
        {''}<br/>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="password" name="password" id="password" placeholder="Enter password" onChange={this.onChangePassword} value={this.state.form_data.password}/>
        </FormGroup>
        {''}<br/>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="username" name="username" id="username" placeholder="Enter username" onChange={this.onChangeUsername} value={this.state.form_data.username}/>
        </FormGroup>
        {''}<br/>
        <FormGroup>
          <Label for="exampleSelect">Select Regions</Label>
          <Input type="select" name="selectMulti" id="select" onChange={this.onChangeRegion} >
            <option>Central</option>
            <option>East</option>
            <option>North</option>
            <option>South</option>
            <option>West</option>
          </Input>
        </FormGroup>
        <div>
          {this.renderRedirect()}
          <Button color="primary" >Submit</Button>
        </div>
      </Form> 
    </Jumbotron>
    </div>
    <div class="col"></div>
  </div>
    );
  }
}

export default Register;
