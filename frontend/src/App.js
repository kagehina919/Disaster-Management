import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import dashboard from './components/dashboard';
import admin from './components/admin';


class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
        <Route path='/dashboard' component={dashboard}/>
        <Route path='/admin' component={admin}/>
    </Switch>
    );
  }
}

export default App;
