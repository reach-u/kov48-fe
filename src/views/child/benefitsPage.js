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
        if (!prevProps.child.idCode && this.props.child.idCode){
            this.props.fetchBenefitsData(this.props.child.idCode)
        }
        if (this.props.benefits.length && !prevState.benefits.length){
            this.setState({benefits:this.props.benefits});
        }
    }

    onChange = (benefit) => {
      benefit.selected=!benefit.selected;
      const benefits = [...this.state.benefits];
      benefits.map(b=>{if (b.type === benefit.type){
          return benefit
      } else return b});
      this.setState({benefits:benefits});
    };

    onSubmit = () => {
        api.benefits.applyForSupport(this.props.child.idCode, this.state.benefits.filter(b=>(b.selected===true && b.status=="Esitamata")))
            .then(this.props.fetchStepsData(51800000000))

    };

    render() {
      const {father,child} = this.props;
      const {benefits, checked} = this.state;
    return (
      <div>
        <div className="form-row">
          <h5>Toetused</h5>
        </div>
        <hr className="featurette-divider" />

        <div>
            <BenefitsSelection benefits={benefits} onChange={this.onChange}/>
        </div>

        <hr />
          { father && <PersonData person={father} label={    <h3>Taotleja andmed</h3>}/>}

        <hr />
          {child && <PersonData person={child} label={
              <h3>Lapse andmed</h3>}/> }


          <h3>Toetus kanda kontole</h3>
          <div>
              <span>Arvelduskonto omaniku nimi</span>
              <Input type='text'/>
              <span>Arvelduskonto number</span>
              <Input type='text'/>
          </div>
        <hr />

        <div />
          <hr/>
          <span>Kõik esitatud andmed on õiged</span>
        <input type={'checkbox'} checked={checked} onChange={()=>this.setState({checked:!checked})}/>
        <div>
          <button>Katkestan</button>
          <button disabled={!checked} onClick={()=>this.onSubmit()}>Esitan</button>
        </div>
      </div>
    );
  }
}
export default connect(
    state => ({
        father: state.appUser.userData,
        child: state.childData.childData,
        benefits: state.benefits.benefits,
    }),
    {fetchBenefitsData, fetchChildData, setToastSuccess, setToastError, fetchStepsData}
)(BenefitsPage);
