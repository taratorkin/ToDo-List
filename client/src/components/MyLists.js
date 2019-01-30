import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions/listsActions.js';
import '../style/css/mylists.min.css';

class MyLists extends React.Component {

  componentWillMount() {
    this.props.fetchLists();
  }

  openCreateListWindow() {
    this.props.changeMode(null, 'create');
  }

  closeCreateListWindow() {
    this.props.changeMode(null, 'read');
  }

  openEditListWindow() {
    this.props.changeMode(null, 'edit');
  }

  updateInputValue(event) {
    this.props.updateValue(event);
  }

  onClickSaveButton(event) {
    this.props.addList(this.props.lists.inputValue);
    this.props.changeMode(null, 'read');
  }

  renderNewListWindow() {
    let newListWindowStyle = { display: 'none' };
    let createButtonStyle = { display: 'flex'};
    let closeButtonStyle = { display: 'none' };

    if (this.props.lists.listMode === 'create') {
      newListWindowStyle = { display: 'flex' };
      createButtonStyle = { display: 'none'};
      closeButtonStyle = { display: 'flex' };
    } else {
      newListWindowStyle = { display: 'none' };
      createButtonStyle = { display: 'flex'};
      closeButtonStyle = { display: 'none' };
    }

    return(
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <button className="d-flex justify-content-center align-items-center customButton createButton" style={createButtonStyle}
            onClick={this.openCreateListWindow.bind(this)}><i className="material-icons">add</i></button>
          <button className="d-flex justify-content-center align-items-center customButton deleteButton" style={closeButtonStyle}
            onClick={this.closeCreateListWindow.bind(this)}><i className="material-icons">clear</i></button>
        </div>
        <div className="newListWindow d-flex flex-column justify-content-center align-items-center" style={newListWindowStyle}>
          <textarea className="customTextField" value={this.props.lists.inputValue} onChange={event => this.updateInputValue(event)}
            name="text" cols="31" rows="3" maxLength="3000"></textarea>
          <button className="d-flex align-self-center justify-content-center align-items-center  customButton createButton"
            onClick={event => this.onClickSaveButton(event)}>SAVE</button>
        </div>
      </div>
    );
  }

  renderExistingLists() {
    let userLists = this.props.lists.listsArray;

    if (typeof userLists === 'undefined') {
      return (<p>Loading lists</p>)
    } else if (userLists && userLists.length === 0) {
      return (<p>You don't have any lists yet</p>)
    } else {
      const listItems = userLists.map((item, ind) => (
         <textarea key={item._id} className="editField d-flex col-10 offset-1 col-md-3" onClick={(event) => {this.props.changeMode(event, 'edit')}}
           onBlur={(event, id) => {this.props.updateList(event, item._id)}} defaultValue={item.text}></textarea>)
       );

      return(
        <div className="finishedListContainer d-flex flex-wrap">
          {listItems}
        </div>
      );
    }

  }

  render() {
    return (
      <div id="my-lists">
        {this.renderExistingLists()}

        {this.renderNewListWindow()}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { auth: state.auth, lists: state.lists};
}

export default connect(mapStateToProps, actions)(MyLists);
