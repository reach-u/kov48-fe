import React, {Component} from 'react';
import {fetchChildData} from '../../store/actions/childData';
import connect from 'react-redux/es/connect/connect';
import Checkbox from 'react-bootstrap/es/Checkbox';
import PersonData from "../../components/personData";
import {setToastError, setToastSuccess} from "../../store/actions/toastMessage";
import {Input} from "reactstrap";

class BenefitsPage extends Component {

    componentDidMount() {
        this.props.fetchChildData()
    }

    render() {
      const {father,child} = this.props;
    return (
      <div>
        <h1>Toetused</h1>
        <hr />
        <div>
          <h3>Taotlen järgnevaid toetusi</h3>
        </div>
        <hr />

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
        <Checkbox title={'Kõik esitatud andmed on õiged'}  />
        <div>
          <button>Katkestan</button>
          <button>Esitan</button>
        </div>
      </div>
    );
  }
}
export default connect(
    state => ({
        father: state.appUser.userData,
        child: state.childData.childData,
    }),
    {fetchChildData, setToastSuccess, setToastError}
)(BenefitsPage);
