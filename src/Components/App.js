import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// import logo from './logo.svg';
//{/* <img src={logo} className="App-logo" alt="logo" /> */}
import './App.css';
import DetailList from './DetailList/Detaillist.js';
import CheckList from './CheckList/CheckList';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <header className="App-header">
              <h1 className="App-title">Qualified Deals</h1>
            </header>
            <Route exact path="/" component={DetailList}/>
            <Route path="/checklist" component={CheckList}/>
        </div> 
      </Router>
    );
  }
}

export default App;
