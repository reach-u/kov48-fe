import React, {Component} from 'react';
import './App.css';
import {Router} from "react-router";
import history from './utils/history';
import Header from './components/header';
import Footer from './components/footer';
import LandingPage from './components/landingpage';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <div className="app">
          <Header />
          <LandingPage />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
