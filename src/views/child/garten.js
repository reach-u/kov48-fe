import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {fetchChildData} from "../../store/actions/childData";
import {setToastError, setToastSuccess} from "../../store/actions/toastMessage";
import {fetchAvailableGartens} from "../../store/actions/garten";


class KinderGarten extends  Component {

    componentDidMount() {
        this.props.fetchAvailableGartens();
    }


    render(){
        const {gartens} = this.props;
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
                            <button style={{display:'block'}}>
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
                    <div id={'gartenMap'} style={{height:"300px", width:"80%", backgroundColor: 'yellow', }}>


                    </div>

                </div>

                <div id={'buttons'}>

                   <button>Loobun</button>
                   <button>Kinnitan</button>


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