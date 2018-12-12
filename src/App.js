import React, {Component} from 'react';
import './App.css';
import {Router} from "react-router";
import history from './utils/history';
import Loader from './components/loader';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Loader/>
          <div className="App">
            <header className="App-header">
            </header>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
