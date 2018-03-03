import React from 'react';
import '../style/css/signup.min.css';


export default class Signup extends React.Component {
  render() {
    return(
      <div className="container-fluid" id="signup-page">
        <div className="row">
          <div className="offset-lg-4 offset-sm-3"></div>
          <div className="col-lg-4 col-sm-6 col-12">
            <p className="signup-headline">Create new account</p>
            <form className="signup-form" action="#">
              <label htmlFor="signup-email">email address</label>
              <br/>
              <input className="input-element" type="text" id="signup-email"/>
              <br/>
              <label htmlFor="signup-password">password</label>
              <br/>
              <input className="input-element" type="password" id="signup-password"/>
              <br/>
              <label htmlFor="signup-confirm-password">confirm password</label>
              <br/>
              <input className="input-element" type="password" id="signup-confirm-password"/>
              <br/>
              <button className="button signup-submit input-element" type="submit">submit</button>
            </form>
            <hr/>
            <p>or sign up with this service</p>
            <button className="button signup-google input-element">Google</button>
          </div>
          <div className="offset-lg-4 offset-sm-3"></div>
        </div>
      </div>
    );
  }
}
