import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Button } from 'reactstrap';

class admin extends Component {
    render() {
        return(
            <div class="row">
            <div class="col"></div>
            <div class="col-6">
                <Jumbotron >
                <Container >
                <h1>Disaster Notifier</h1>
                <h3>Admin</h3>
                <p>Welcome !!</p>
                <Button outline color="primary" >Send Mail</Button>{' '}
                <Button outline color="success" >Weather News</Button>{' '}
                </Container>
                </Jumbotron>
            </div>
            <div class="col"></div>
            </div>
        );
    }
}

export default admin;