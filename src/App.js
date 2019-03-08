import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Upload from './components/Upload';
import Display from './components/Display';
import Callback from './components/Callback'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {requireAuth} from './utils/AuthService';

class App extends Component {
  render() {
    return (
      <Router /* history={browserHistory} */>
      <div className="App">

        <div className="container">
            <Route path="/" component={Display} />
            <Route path="/upload" component={Upload} onEnter={requireAuth} />
            <Route path="/callback" component={Callback} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
