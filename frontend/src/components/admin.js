import React, { Component } from 'react';
import { Jumbotron, Container, Breadcrumb, BreadcrumbItem, Form, FormGroup, Input, Label } from 'reactstrap';
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
                <Button outline color="success" href="http://www.imd.gov.in/Welcome%20To%20IMD/Welcome.php" >Weather News</Button>{' '}
                <Form>
                    <FormGroup>
                        <Label for="exampleText">Please write the required E-mail here :</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <Button outline color="primary" >Send Mail</Button>{' '}
                </Form>
                </Container>
                </Jumbotron>
            </div>
            <div class="col"></div>
            </div>
        );
    }
}

export default admin;