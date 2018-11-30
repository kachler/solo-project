/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const NewNote = (props) => {
  return (
    <div className="new-note">
      <h2>Add New Whiskey</h2>
      <label>Distillery: </label>
      <input type="text" id="distilleryName" onChange={event => props.setNewDistillery(event.target.value)} />
      <br />
      <label>Name/Age: </label>
      <input type="text" id="whiskeyName" onChange={event => props.setNewName(event.target.value)} />
      <br />
      <label>Note: </label>
      <input type="text" id="tastingNote" onChange={event => props.setNewNote(event.target.value)} />
      <br />
      <label>Rating: </label>
      <input type="number" id="rating" onChange={event => props.setNewRating(event.target.value)} />
      <br />
      <label>Country: </label>
      <input type="text" id="country" onChange={event => props.setNewCountry(event.target.value)} />
      <br />
      <label>Region: </label>
      <input type="text" id="region" onChange={event => props.setNewRegion(event.target.value)} />
      <br />
      <button className="add-whiskey-button" type="submit" onClick={(event) => { props.addWhiskey(event); }}>Add Note</button>
    </div>
  );
};
export default NewNote;


// distilleryName: 'Macallan',
//       whiskeyName: 21,
//       note: 'Classic flavor profile',
//       rating: 3,
//       country: 'Scotland',
//       region: 'Highland',
