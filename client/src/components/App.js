import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header.js';
import MainPage from './MainPage.js';
import Footer from './Footer.js';
import Signup from './Signup.js';


const App = () => {
  return(
    <div>
      <BrowserRouter>
        <div>
          <Header />
        </div>
      </BrowserRouter>
    </div>
  );

}

export default App;
