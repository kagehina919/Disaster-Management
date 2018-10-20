import React, { Component } from 'react';
import { Jumbotron, Container, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Button } from 'reactstrap';

class admin extends Component {
    render() {
        return(
            <div class="row">
            <div class="col"></div>
            <div class="col-6">
                <h3>
                    <Breadcrumb>
                        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>Admin</BreadcrumbItem>
                    </Breadcrumb>
                </h3>
                <Jumbotron>
                <Container>
                <h1>Disaster Notifier</h1>
                <p>Welcome !!</p>
                <Button outline color="primary" >Send Mail</Button>{' '}
                <Button outline color="success" href="http://www.imd.gov.in/Welcome%20To%20IMD/Welcome.php" >Weather News</Button>{' '}
                </Container>
                </Jumbotron>
            </div>
            <div class="col"></div>
            </div>
        );
    }
}

export default admin;