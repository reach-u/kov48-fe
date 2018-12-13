import React, {Component} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-web-tabs';
import Fatherhood from "./fatherhood";
import 'react-web-tabs/dist/react-web-tabs.css';
import api from "../api";
import connect from "react-redux/es/connect/connect";

class LandingPage extends Component {

  state = {
    availableSteps: [],
  };

  componentDidMount() {
    //let userData = this.props.userData;
    //TODO replace hardcoded idcode
    api.availableSteps
      .get(51800000000)
      .then(response => {
        this.setState({availableSteps: response});
      });
  }

  render() {

    let getTranslation = (item, index) => {
      switch (item) {
        case "CONFIRM_FATHER":
          return "Kinnita isadus";
        case "SET_NAME":
          return "Kinnita nimi";
        default:
          return "Tab " + index;
      }
    };

    let getWarningMessage = (item) => {
      switch (item) {
        case "CONFIRM_FATHER":
          return "Teil on kinnitamata lapse isa.";
        case "SET_NAME":
          return "Teil on võimalik lisada lapse nimi.";
        default:
          return "Teil on tegemata toiminguid.";
      }
    };

    return (

      <div className="form" style={{display: this.state.availableSteps.length > 0 ? "" : "none"}}>

        <div className="form-row">
          {this.state.availableSteps.map(asd =>
            <div className="form-group col-md-12"><div className="alert alert-warning fade show">{getWarningMessage(asd)}</div></div>)}

        </div>

        <Tabs defaultTab="tab-0" vertical>
          <TabList>
            {this.state.availableSteps.map((item, index) =>
              <Tab key={index} tabFor={"tab-" + index}>{getTranslation(item, index)}</Tab>)}
          </TabList>
          {this.state.availableSteps.map((item, index) =>
            <TabPanel key={index} tabId={"tab-" + index}>
              <span style={{display: item === "CONFIRM_FATHER" ? "block" : "none"}}>
                <Fatherhood/>
              </span>
              <span style={{display: item === "SET_NAME" ? "block" : "none"}}>
                set name
              </span>
            </TabPanel>)}
        </Tabs>
      </div>
    )
  }
}

export default connect(
  state => ({
    userData: state.appUser.userData
  })
)(LandingPage);

