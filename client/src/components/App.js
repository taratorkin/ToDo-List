import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header.js';
import MainPage from './MainPage.js';
import Footer from './Footer.js';
import Signup from './Signup.js';


const App = () => {
  return(
      <BrowserRouter>
        <div className="root-child">
          <Header />
          <Route exact path="/" component={MainPage} />
          <Footer />
        </div>
      </BrowserRouter>
  );

}

export default App;
