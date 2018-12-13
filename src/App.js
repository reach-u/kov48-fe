import React, {Component} from 'react';
import './App.css';
import {Router, Route} from "react-router";
import history from './utils/history';
import Header from './components/header';
import Footer from './components/footer';
import LandingPage from './components/landingpage';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import connect from "react-redux/es/connect/connect";
import LoginPage from "./views/login/loginPage";
import Fatherhood from "./components/fatherhood";

library.add(faSignOutAlt);

class App extends Component {



  render() {
    const {userData} = this.props;
    return (
        <Router history={history}>
        <div className="app">
          <Header/>
          <main>
            <Route exact path='/' component={LandingPage}/>
            <Route path="/view1" render={() => userData ? <div>view1</div> : <LoginPage/>}/>
            <Route path="/laps/isadus"  component={Fatherhood} />
          </main>
          <Footer/>
        </div>
        </Router>
    );
  }
}

export default connect(
    state => ({
      userData: state.appUser.username,
    }),
    null
)(App)
