import React from 'react';
import { connect } from 'react-redux';
import Note from '../components/Note.jsx';
import NewNote from '../components/NewNote.jsx'
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  whiskeyList: store.whiskeys.whiskeyList,
  showModal: store.whiskeys.showModal
});

const mapDispatchToProps = dispatch => ({
  addWhiskey: event => dispatch(actions.addWhiskey(event)),
  deleteWhiskey: event => dispatch(actions.deleteWhiskey(event)),
  setNewDistillery: data => dispatch(actions.setNewDistillery(data)),
  setNewName: data => dispatch(actions.setNewName(data)),
  setNewNote: data => dispatch(actions.setNewNote(data)),
  setNewRating: data => dispatch(actions.setNewRating(data)),
  setNewCountry: data => dispatch(actions.setNewCountry(data)),
  setNewRegion: data => dispatch(actions.setNewRegion(data)),
  setShowModal: data => dispatch(actions.setShowModal(data)),
});

const NotesContainer = (props) => {
  console.log(props);
  const whiskeysArray = [];
  props.whiskeyList.forEach((whiskey, i) => {
    whiskeysArray.push(<Note whiskey={whiskey} key={i} deleteWhiskey={() => props.deleteWhiskey(i)} />);
  });
  if (props.showModal === false) {
    return (
      <div className="notes-container">
        <h1>My Tasting Notes</h1>
        { whiskeysArray }
        <button id="add-button" type="button" onClick={props.setShowModal}>Add</button>
      </div>
    );
  }
  if (props.showModal === true) {
    return (
      <div className="notes-container">
        <h1>My Tasting Notes</h1>
        { whiskeysArray }
        <NewNote 
          addWhiskey={props.addWhiskey}
          setNewDistillery={props.setNewDistillery}
          setNewName={props.setNewName}
          setNewNote={props.setNewNote}
          setNewRating={props.setNewRating}
          setNewCountry={props.setNewCountry}
          setNewRegion={props.setNewRegion}
          showModal={props.showModal}
        />
        <button id="add-button" type="button" onClick={props.setShowModal}>Add</button>
      </div>
    );
  }
  
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);
