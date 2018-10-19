import React, { Component } from 'react';
import { Jumbotron, Container, Breadcrumb, BreadcrumbItem } from 'reactstrap';

class dashboard extends Component {
    render() {
        return(
            <div class="row">
            <div class="col"></div>
            <div class="col-6">
                <h3>
                    <Breadcrumb>
                        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>Dashboard</BreadcrumbItem>
                    </Breadcrumb>
                </h3>
                <Jumbotron>
                <Container>
                <h1>Disaster Notifier</h1>
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