import React from 'react';
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
          <a key="1" className="d-flex align-items-center" href="/signin"><li>Sign in</li></a>,
          <a key="2" className="d-flex align-items-center" href="/signup"><li>Sign up</li></a>
        ]
        );
      default:
        return (
          [
          <a key="1" className="d-flex align-items-center" href="/my-lists"><li>My lists</li></a>,
          <a key="2" className="d-flex align-items-center" href="/logout"><li>Log out</li></a>
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
            <a className="d-flex align-items-center" href="#"><i className="material-icons">dehaze</i></a>
          </div>
        </div>
      </div>

      <div className="container-fluid" id="header-menu">
        <div className="row">
          <div className="col d-flex align-items-center">
            <ul className="navbar d-flex">
              <a className="d-flex align-items-center" href="/"><li className="brand-name">todo List</li></a>
              {this.renderContext()}
            </ul>
          </div>
        </div>
      </div>
    </div>
);
  /*  let renderAuthorised =
    <div id="menu-wrapper">
      <div className="container-fluid" id="mobile-menu">
        <div className="row">
          <div className="col-11 d-flex align-items-center">
            <a className="d-flex align-items-center" href="#"><i className="material-icons">dehaze</i></a>
          </div>
        </div>
      </div>

      <div className="container-fluid" id="header-menu">
        <div className="row">
          <div className="col d-flex align-items-center">
            <ul className="navbar d-flex">
              <a className="d-flex align-items-center" href="/"><li className="brand-name">todo List</li></a>

            </ul>
          </div>
        </div>
      </div>
    </div> */
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
