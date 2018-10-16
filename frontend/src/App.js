import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';


class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
    </Switch>
    );
  }
}

export default App;
