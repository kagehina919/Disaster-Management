import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Button } from 'reactstrap';

class Home extends Component {
  render () {
    return (
    <div class="row">
    <div class="col"></div>
    <div class="col-6">
        <Jumbotron >
        <Container >
          <h1>Disaster Notifier</h1>
          <h3>Home</h3>
          <p>Sign-up and Keep Safe !!</p>
          <p>The site notifies you of an impending disaster, in the regions you choose to be notified at.</p>
          <Button outline color="primary" href="/register" >Sign Up</Button>{' '}
          <Button outline color="success" href="/login" >Login</Button>{' '}
          <Button outline color="info">Admin</Button>{' '}
        </Container>
        </Jumbotron>
    </div>
    <div class="col"></div>
    </div>
    );
  }
}

export default Home;
