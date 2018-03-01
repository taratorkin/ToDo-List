import React from 'react';
import '../style/css/footer.min.css';


export default class Footer extends React.Component {
  render() {
    return(
      <div className="container-fluid" id="footer">
        <div className="row">
          <div className="col">
            <p>Developed by: Konstantin Taratorkin<br/>Mail:konstantintaratorkin@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
}
