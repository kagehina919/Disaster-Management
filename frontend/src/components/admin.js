import React, { Component } from 'react';
import { Jumbotron, Container, Breadcrumb, BreadcrumbItem, Form, FormGroup, Input, Label } from 'reactstrap';
import { Button } from 'reactstrap';

class admin extends Component {
    constructor(props) {
        super(props);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeRegion = this.onChangeRegion.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            form_data: {}
        }
      }

      onChangeText(e){
        this.setState({
            form_data : {
              ...this.state.form_data,
            "text": e.target.value
          }
        })
      }
    
      onChangeRegion(e){
        this.setState({
            form_data : {
              ...this.state.form_data,
            "region": e.target.value
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
        fetch('http://0.0.0.0:5000/admin', {
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
                        <Input type="textarea" name="text" id="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Select Region</Label>
                        <Input type="select" name="region" id="region">
                        <option>Central</option>
                        <option>East</option>
                        <option>North</option>
                        <option>South</option>
                        <option>West</option>
                        </Input>
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