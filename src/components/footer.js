import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container bottom_border">
          <div className="row">
            <div className=" col-sm-4 col-md col-sm-4  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Kontakt</h5>
              <p className="mb10">Lorem Ipsum is simply dummy text of</p>
              <p><i className="fa fa-location-arrow"></i> Riia 35, Tallinn</p>
              <p><i className="fa fa-phone"></i> +91-9999878398 </p>
              <p><i className="fa fa fa-envelope"></i> info@example.com </p>


            </div>

            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Abi ning viited</h5>
              <ul className="footer_ul_amrc">
                <li><a href="#">Abimaterjalid</a></li>
                <li><a href="#">Shadows & Mirror Reflection</a></li>
                <li><a href="#">Logo Design</a></li>
                <li><a href="#">Vectorization</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
