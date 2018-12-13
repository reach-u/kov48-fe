import React, {Component} from 'react';
import './App.css';
import {Router, Route} from 'react-router';
import history from './utils/history';
import Header from './components/header';
import Footer from './components/footer';
import LandingPage from './components/landingpage';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import connect from 'react-redux/es/connect/connect';
import LoginPage from './views/login/loginPage';

library.add(faSignOutAlt);

class App extends Component {
  render() {
    const {userData} = this.props;
    return userData ? (
      <Router history={history}>
        <div className="app">
          <Header />
          <main>
            <Route exact path="/" component={LandingPage} />
            <Route path="/view1" render={() => <div>view1</div>} />
          </main>
          <Footer />
        </div>
      </Router>
    ) : (
      <div className="app">
        <main>
          <LoginPage />
        </main>
      </div>
    );
  }
}

export default connect(
  state => ({
    userData: state.appUser.userData,
  }),
  null
)(App);
