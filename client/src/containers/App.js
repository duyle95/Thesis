import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Signin from './Auth/Signin';
import Signup from './Auth/Signup';

import Dashboard from './Survey/Dashboard';

import Header from './Header';
import Landing from '../components/Landing';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header></Header>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/surveys" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
