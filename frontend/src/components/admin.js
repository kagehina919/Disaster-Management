import React, { Component } from 'react';
import { Alert, Jumbotron, Container, Breadcrumb, BreadcrumbItem, Form, FormGroup, Input, Label } from 'reactstrap';
import { Button } from 'reactstrap';

class admin extends Component {
    constructor(props) {
        super(props);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeRegion = this.onChangeRegion.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            form_data: {}
        }
      }
    
      onChangeSubject(e){
        this.setState({
            form_data : {
              ...this.state.form_data,
            "subject": e.target.value
          }
        })
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
        console.log(e);
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
    
      onSubmit(e){
        e.preventDefault();
        console.log(JSON.stringify(this.state.form_data))
        fetch('http://0.0.0.0:5000/admin', {
          method: 'post',
          body: JSON.stringify(this.state.form_data)
        }).then(function(response) {
            console.log()
            return response.json();
        }).then(function(m){
            console.log(m)
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
                <Form onSubmit={this.onSubmit}>
                <FormGroup>
                        <Label for="exampleText">Please write the required subject here :</Label>
                        <Input type="textarea" name="subject" id="subject" onChange={this.onChangeSubject} value={this.state.form_data.subject} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Please write the required E-mail here :</Label>
                        <Input type="textarea" name="text" id="text" onChange={this.onChangeText} value={this.state.form_data.text} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Select Region</Label>
                        <Input type="select" name="region" id="region" onChange={this.onChangeRegion} >
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