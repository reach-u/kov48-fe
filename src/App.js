import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Router} from "react-router";
import history from './utils/history';
import Loader from './components/loader';


class App extends Component {
  render() {
    return (
        <Router history={history}>
            <Loader />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
        </Router>
    );
  }
}

export default App;
