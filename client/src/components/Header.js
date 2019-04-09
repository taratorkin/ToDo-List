import React from 'react';
import {Link} from 'react-router-dom';
import img1 from '../style/imgs/hamburger-icon.png';
import '../style/css/header.min.css';
import { connect } from 'react-redux';


class Header extends React.Component {

  renderContext() {

    switch(this.props.auth) {
      case null:
        return;
      case false:
        return (
          [
          <Link key="1" className="d-flex align-items-center" to="/signin"><li>Sign in</li></Link>,
          <Link key="2" className="d-flex align-items-center" to="/signup"><li>Sign up</li></Link>
        ]
        );
      default:
        return (
          [
          <Link key="1" className="d-flex align-items-center" to="/my-lists"><li>My lists</li></Link>,
          <Link key="2" className="d-flex align-items-center" to="/logout"><li>Log out</li></Link>
        ]
        );
    }
  }

  render() {
    return (
    <div id="menu-wrapper">
      <div className="container-fluid" id="mobile-menu">
        <div className="row">
          <div className="col-11 d-flex align-items-center">
            <Link className="d-flex align-items-center" to="#"><i className="material-icons">dehaze</i></Link>
          </div>
        </div>
      </div>

      <div className="container-fluid" id="header-menu">
        <div className="row">
          <div className="col d-flex align-items-center">
            <ul className="navbar d-flex">
              <Link className="d-flex align-items-center" to="/"><li className="brand-name">todo List</li></Link>
              {this.renderContext()}
            </ul>
          </div>
        </div>
      </div>
    </div>
);
}
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
