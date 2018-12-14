import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container bottom_border">
          <div className="row">
            <div className=" col-sm-4 col-md col-sm-4  col-12 col">
              <h6 className="headin5_amrc col_white_amrc pt2">Kontakt</h6>
              <p><i className="fa fa-location-arrow"></i> Riia 35, Tallinn</p>
              <p><i className="fa fa-phone"></i> +732-67832141 </p>
              <p><i className="fa fa fa-envelope"></i> info@minusündmus.ee </p>
            </div>

            <div className=" col-sm-4 col-md  col-6 col">
              <h6 className="headin5_amrc col_white_amrc pt2">Abi ning viited</h6>
              <ul className="footer_ul_amrc">
                <li><a href="#">Abimaterjalid</a></li>
                <li><a href="#">Viited</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
