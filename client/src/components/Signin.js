import React from 'react';
import '../style/css/signin.min.css';

export default class Signin extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <div className="container-fluid" id="signin-page">
          <div className="row">
            <div className="offset-lg-4 offset-sm-3"></div>
            <div className="col-lg-4 col-sm-6 col-12">
              <p className="signin-headline">Sign in to your account</p>
              <div className="signin-form-wrapper">
                <form method="post" action="/signin/localAuth">
                  <label htmlFor="mail-input">email address</label>
                  <br/>
                  <input className="input-element" id="mail-input" type="text" name="email"/>
                  <br/>
                  <label htmlFor="pass-input">password</label>
                  <br/>
                  <input className="input-element" id="pass-input" type="password" name="password"/>
                  <br/>
                  <button className="button auth-button input-element" type="submit">submit</button>
                  <br/>
                  <div className="restore-link">
                    <a href="#passRestore">Forgot your password?</a>
                  </div>
                </form>
              </div>
              <hr/>
              <p>or sign in with this service</p>
              <button className="button input-element" id="google-auth" type="button">google</button>
            </div>
            <div className="offset-lg-4 offset-sm-3"></div>
          </div>
        </div>
        <div className="container-fluid" id="passRestore">
          <div className="row">
            <div className="offset-lg-4 offset-sm-3"></div>
            <div className="col-lg-4 col-sm-6 col-12">
              <a href="#">
                <i className="material-icons">cancel</i>
              </a>
              <p>Please provide the email you used when signed up for your account.</p>
              <p>We will send you an email with a link to reset your password.</p>
              <form action="#">
                <label htmlFor="restore-email-input"></label>
                <br/>
                <input id="restore-email-input input-element" type="text" placeholder="Enter your email"/>
                <br/>
                <button className="button auth-button input-element" id="restore-button" type="submit">submit</button>
                <br/>
              </form>
            </div>
            <div className="offset-lg-4 offset-sm-3"></div>
          </div>
        </div>
      </div>
    );
  }
}
