import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header.js';
import MainPage from './MainPage.js';
import Footer from './Footer.js';
import Signup from './Signup.js';
import Signin from './Signin.js';


const App = () => {
  return(
      <BrowserRouter>
        <div className="root-child">
          <Header />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Footer />
        </div>
      </BrowserRouter>
  );

}

export default App;
