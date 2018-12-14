import React, {Component} from 'react';
import {fetchChildData} from '../../store/actions/childData';
import connect from 'react-redux/es/connect/connect';
import PersonData from "../../components/personData";
import {setToastError, setToastSuccess} from "../../store/actions/toastMessage";
import {Input} from "reactstrap";
import {fetchBenefitsData} from "../../store/actions/benefitsAvailable";
import BenefitsSelection from "./benefitsSelection";
import api from '../../api';
import {fetchStepsData} from "../../store/actions/availableSteps";


class BenefitsPage extends Component {

    state = {
        benefits:[],
        checked:false,
    };

  componentDidMount() {
    this.props.fetchChildData();
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!prevProps.child.idCode && this.props.child.idCode) {
      this.props.fetchBenefitsData(this.props.child.idCode)
    }
    if (this.props.benefits.length && !prevState.benefits.length) {
      this.setState({benefits: this.props.benefits});
    }
  }

  onChange = (benefit) => {
    benefit.selected = !benefit.selected;
    const benefits = [...this.state.benefits];
    benefits.map(b => {
      if (b.type === benefit.type) {
        return benefit
      } else return b
    });
    this.setState({benefits: benefits});
  };

    onSubmit = () => {
        api.benefits.applyForSupport(this.props.child.idCode, this.state.benefits.filter(b=>(b.selected===true && b.status=="Esitamata")))
            .then(response =>{this.setState({benefits:response});this.props.fetchBenefitsData(51800000000)})
    };

  render() {
    const {father, child} = this.props;
    const {benefits, checked} = this.state;
    return (
      <div>
        <div className="form-row">
          <h5>Toetused</h5>
        </div>

        <hr className="featurette-divider"/>

        <div>
          <BenefitsSelection benefits={benefits} onChange={this.onChange}/>
        </div>

        {father && <PersonData person={father} label={<h5>Taotleja andmed</h5>}/>}

        {child && <PersonData person={child}
                              label={ <h5>Lapse andmed</h5>}/>}


        <div className="form-row">
          <h5>Toetus kanda kontole</h5>
        </div>

        <hr className="featurette-divider"/>

        <div className="form-row">
          <div className="form-group col-md-6 text-align-right">Arvelduskonto omaniku nimi</div>
          <div className="form-group col-md-3 text-align-left">
            <Input type='text'/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6 text-align-right">Arvelduskonto number</div>
          <div className="form-group col-md-3 text-align-left">
            <Input type='text'/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6 text-align-right">
            <span>Kõik esitatud andmed on õiged</span>
          </div>
          <div className="form-group col-md-6 text-align-left">
            <label className="container">
              <input checked={checked}
                onChange={() => this.setState({checked: !checked})}
                type="checkbox" />
              <span className="checkmark"/>
            </label>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6 ">
            <button className="btn btn-outline-danger" onClick={()=>window.location.reload()}>Katkestan</button>
          </div>
          <div className="form-group col-md-6 ">
            <button className="btn btn-outline-success" style={{marginLeft: "10px"}} disabled={!checked} onClick={() => this.onSubmit()}>Esitan</button>
          </div>
        </div>

      </div>
    );
  }
}

export default connect(
    state => ({
        father: state.appUser.userData,
        child: state.childData.childData,
        benefits: state.benefits,
    }),
    {fetchBenefitsData, fetchChildData, setToastSuccess, setToastError}
)(BenefitsPage);
