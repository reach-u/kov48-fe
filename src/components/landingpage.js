import React, {Component} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-web-tabs';
import Fatherhood from "./fatherhood";
import 'react-web-tabs/dist/react-web-tabs.css';
import connect from "react-redux/es/connect/connect";
import {fetchStepsData} from "../store/actions/availableSteps";

class LandingPage extends Component {

  componentDidMount() {
    //TODO replace hardcoded idcode 51800000000
    this.props.fetchStepsData(51800000000);
  }

  render() {

    let getTranslation = (item, index) => {
      switch (item) {
        case "CONFIRM_FATHER":
          return "Kinnita isadus";
        case "SET_NAME":
          return "Kinnita nimi";
        case "APPLY_KINDERGARTEN":
          return "Valige lasteaiakoht";
        case "APPLY_SUPPORT":
          return "Valige toetused";
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
        case "APPLY_SUPPORT":
          return "Valige toetused";
        case "APPLY_KINDERGARTEN":
          return "Teil on võimalik valida lasteaiakoht.";
        default:
          console.log(item);
          return "Teil on tegemata toiminguid.";
      }
    };
    const {steps} =this.props;

    return (


      <div className="form" style={{display: steps.length > 0 ? "" : "none"}}>

        <div className="form-row">
          {steps.map(asd =>
            <div className="form-group col-md-12"><div className="alert alert-warning fade show">{getWarningMessage(asd)}</div></div>)}

        </div>

        <Tabs defaultTab="tab-0" vertical>
          <TabList>
            {steps.map((item, index) =>
              <Tab key={index} tabFor={"tab-" + index}>{getTranslation(item, index)}</Tab>)}
          </TabList>
          {steps.map((item, index) =>
            <TabPanel key={index} tabId={"tab-" + index}>
              <span style={{display: item === "CONFIRM_FATHER" ? "block" : "none"}}>
                <Fatherhood/>
              </span>
              <span style={{display: item === "SET_NAME" ? "block" : "none"}}>
                set name
              </span>
              <span style={{display: item === "APPLY_GINDERGARTEN" ? "block" : "none"}}>
                lastead
              </span>
              <span style={{display: item === "APPLY_SUPPORT" ? "block" : "none"}}>
                <BenefitsPage/>
              </span>
            </TabPanel>)}
        </Tabs>
      </div>
    )
  }
}

export default connect(
  state => ({
    userData: state.appUser.userData,
    steps: state.availableSteps.steps,
  }),
    {fetchStepsData}
)(LandingPage);

