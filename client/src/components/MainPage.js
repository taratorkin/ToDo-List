import React from 'react';
import '../style/css/mainPage.min.css';
import img1 from '../style/imgs/main-checklist.png';
import img2 from '../style/imgs/main-rightbottom-img.jpg';
import img3 from '../style/imgs/main-righttop-img.jpg';


export default class MainPage extends React.Component {
  render() {
    return(
      <div className="container-fluid" id="main-page-wrapper">
        <div className="row">
          <div className="offset-1"></div>
          <div className="col-md col-sm-10 main-page-description">
            <p className="description-headline d-flex justify-content-center">Monitor your activities</p>
            <p className="d-flex justify-content-center">Todo List is a convenient tool for managing your tasks</p>
            <div className="d-flex justify-content-center">
              <img className="main-page-img" src={img1} width="350em" height="350em" alt="Checklist"/>
            </div>
          </div>
          <div className="offset-1"></div>

          <div className="col-md col-sm-12 main-page-promo">
            <img className="main-page-img" src={img2} width="300em" height="210em" alt="Promo image 1"/>
            <div className="promo-quote-wrap">
              <span className="promo-quote d-flex align-items-center justify-content-center">Don't forget anything</span>
            </div>
            <img className="main-page-img" src={img3} width="300em" height="230em" alt="Promo image 2"/>
            <div className="promo-quote-wrap">
              <span className="promo-quote d-flex align-items-center justify-content-center">Be more effective</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
