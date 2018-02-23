import React from 'react';
import img1 from '../style/imgs/hamburger-icon.png';
import '../style/css/header.min.css';


export default class Header extends React.Component {

  render() {
    return(
      <div id="menu-wrapper">
        <div className="container-fluid" id="mobile-menu">
          <div className="row">
            <div className="col-12 d-flex align-items-center">
              <a className="d-flex align-items-center" href="#"><i className="material-icons">dehaze</i></a>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="header-menu">
          <div className="row">
            <div className="col d-flex align-items-center">
              <ul className="navbar d-flex">
                <a className="d-flex align-items-center" href="/"><li className="brand-name">todo List</li></a>
                <a className="d-flex align-items-center" href="/signin"><li>Sign in</li></a>
                <a className="d-flex align-items-center" href="/signup"><li>Sign up</li></a>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
  }

}
