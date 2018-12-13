import React, {Component} from 'react';
import './App.css';
import {Router, Route} from 'react-router';
import history from './utils/history';
import Header from './components/header';
import Footer from './components/footer';
import LandingPage from './components/landingpage';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faSignOutAlt, faChild, faMale} from '@fortawesome/free-solid-svg-icons';
import connect from 'react-redux/es/connect/connect';
import LoginPage from './views/login/loginPage';
import Fatherhood from './components/fatherhood';
import {getAuthorizationToken} from './components/authToken';
import {fetchUserInfo} from './store/actions/appUser';
import ToastMessage from './components/toastMessage';
import BenefitsPage from './views/child/benefits';

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
          <main>
            <Route exact path="/" component={LandingPage} />
            <Route path="/view1" render={() => <div>view1</div>} />
            <Route path="/laps/isadus" component={Fatherhood} />
            <Route path="/laps/toetused" component={BenefitsPage} />
          </main>
          <Footer />
        </div>
      </Router>
    ) : (
      <div className="app">
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
