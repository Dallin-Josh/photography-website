import React, { Component } from 'react';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing'
import Pricing from './components/Pricing/Pricing'

import About from './components/About/About'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Landing}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/pricing' component={Pricing}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
