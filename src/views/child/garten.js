import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {fetchChildData} from "../../store/actions/childData";
import {setToastError, setToastSuccess} from "../../store/actions/toastMessage";
import {fetchAvailableGartens} from "../../store/actions/garten";
import Map from "../../components/map";


class KinderGarten extends  Component {

  state = {
    gartens: [],
    selectedIx:null,
  };

  componentDidMount() {
    this.props.fetchAvailableGartens();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.gartens.length && !prevState.gartens.length){
      this.setState({gartens:this.props.gartens.map((g,ix)=>{
          g.id=ix;return g;
        })});
    }
  }

  onSubmit = () => {
    const name = (this.state.gartens.find(g=>g.id===this.state.selectedIx)).name;
    this.props.setToastSuccess({message:"Valisite lasteaia "+name}, 'garten');

  };

  selectKg(e) {
    let selectedIx = parseInt(e.currentTarget.dataset.selectedIdx);
    this.setState({selectedIx: selectedIx});
  }

  render(){
    const {gartens} = this.state;
    return(
      <div>

        <div className="form-row">
          <h5>Lasteaiakoha taotlemine</h5>
        </div>
        <hr className="featurette-divider"/>

        <div id={'gartenSelectionContainer'} style={{display:'flex'}}>


          <div id={'gartenSelection'}>
            <h5> Lasteadade valik</h5>
            <hr className="featurette-divider"/>
            {gartens.map(g=> {
              return (
                <button
                  className={"btn btn-outline-secondary kk-selection-item" + (g.id === this.state.selectedIx ? " active" : "")}
                  style={{display:'block'}}
                  data-selected-idx={g.id}
                  onClick={this.selectKg.bind(this)}>
                  <table >
                    <tr>
                      <th>{g.name}</th>
                      <th>{g.distance}</th>
                      <th>{g.capacity}</th>
                      <th>{g.waiting}</th>

                    </tr>
                    <tr>
                      <td>Siia tuleb aadress</td>
                    </tr>
                  </table>
                </button>)

            })}

          </div>
          { !!gartens.length &&
          <div id={'map-wrapper'}  style={{height:"300px", width:"80%" }}>
            <Map data={gartens.map(g=>g.crd)} />
          </div>}

        </div>

        <div id={'buttons'} className="form-row">
          <div className="form-group col-md-6">
            <button className="btn btn-outline-danger" onClick={()=>window.location.reload()}>Loobun</button>
          </div>
          <div className="form-group col-md-6">
            <button className="btn btn-outline-success" onClick={()=>this.onSubmit()}>Kinnitan</button>
          </div>
        </div>
      </div>
    )
  }

}


export default  connect(
  state => ({
    father: state.appUser.userData,
    child: state.childData.childData,
    gartens:state.garten.gartens,
  }),
  {fetchChildData, setToastSuccess, setToastError, fetchAvailableGartens}
)(KinderGarten);