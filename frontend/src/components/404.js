import React from 'react';
import { Jumbotron } from 'reactstrap';

class Page404 extends React.Component{
    render(){
        return(
            <div>
                <Jumbotron>
                OOOOPS?! Nothing exists here. Go back to <a href='/'>Home</a>.
                </Jumbotron>
            </div>
        )
    }
}

export default Page404;