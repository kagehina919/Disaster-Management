import React, { Component } from 'react';

class dashboard extends Component {
    render() {
        return(
            <div class="row">
            <div class="col"></div>
            <div class="col-6">
                <Jumbotron >
                <Container >
                <h1>Disaster Notifier</h1>
                <h3>Dashboard</h3>
                <p>Welcome !!</p>
                <p>You have subscribed to the following regions</p>
                </Container>
                </Jumbotron>
            </div>
            <div class="col"></div>
            </div>
        );
    }
}
export default dashboard;