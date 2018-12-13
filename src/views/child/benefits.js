import React, {Component} from 'react';
import {fetchChildData} from '../../store/actions/childData';

import {fetchUserInfo} from '../../store/actions/appUser';
import connect from 'react-redux/es/connect/connect';
import Checkbox from 'react-bootstrap/es/Checkbox';

class BenefitsPage extends Component {
  render() {
    return (
      <div>
        <h1>Toetused</h1>
        <hr />
        <div>
          <h3>Taotlen järgnevaid toetusi</h3>
        </div>
        <hr />
        <h3>Taotleja andmed</h3>
        <hr />

        <h3>Lapse andmed</h3>
        <hr />

        <h3>Toetus kanda kontole</h3>
        <hr />

        <div />
        <Checkbox title={'Kõik esitatud andmed on õiged'} />
        <div>
          <button>Katkestan</button>
          <button>Esitan</button>
        </div>
      </div>
    );
  }
}
export default connect(
  state => (
    {
      userData: state.appUser.userData,
      child: state.childData.childData,
    },
    {fetchUserInfo, fetchChildData}
  )
)(BenefitsPage);
