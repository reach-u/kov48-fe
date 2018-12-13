import React, {Component} from 'react';
import './App.css';
import './Login.css';
import {Route, Router} from 'react-router';
import history from './utils/history';
import Header from './components/header';
import Footer from './components/footer';
import LandingPage from './components/landingpage';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faChild, faMale, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import connect from 'react-redux/es/connect/connect';
import LoginPage from './views/login/loginPage';
import Fatherhood from './components/fatherhood';
import {getAuthorizationToken} from './components/authToken';
import {fetchUserInfo} from './store/actions/appUser';
import ToastMessage from './components/toastMessage';
import BenefitsPage from './views/child/benefitsPage';

library.add(faSignOutAlt);
library.add(faChild);
library.add(faMale);

class App extends Component {
  componentDidMount() {
    if (getAuthorizationToken()) {
      this.props.fetchUserInfo();
    }
  }

  render() {
    const authToken = getAuthorizationToken();
    return authToken ? (
      <Router history={history}>
        <div className="app">
          <Header />
          <ToastMessage />
          <main style={{flex: "1 1 auto"}}>
            <Route exact path="/" component={LandingPage} />
            <Route path="/laps/isadus" component={Fatherhood} />
            <Route path="/laps/toetused" component={BenefitsPage} />
          </main>
          <Footer />
        </div>
      </Router>
    ) : (
      <div className="app loginpage">
        <main>
          <ToastMessage />
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
  {fetchUserInfo}
)(App);
