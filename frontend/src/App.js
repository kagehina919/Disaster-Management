import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Button } from 'reactstrap';

class App extends Component {
  render () {
    return (
      <div>
        <Jumbotron >
        <Container >
          <h1>Disaster Notifier</h1>
          <h3>Home</h3>
          <p>Sign-up and Keep Safe !!</p>
          <p>The site notifies you of an impending disaster, in the regions you choose to be notified at.</p>
          <Button outline color="primary">Sign-Up</Button>{' '}
          <Button outline color="success">Login</Button>{' '}
          <Button outline color="info">Admin</Button>{' '}
        </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
