import React from 'react';

const Note = (props) => {
  console.log(props.whiskey);
  return (
    <div className="note">
      <label className="whisky-name">{props.whiskey.distilleryName + ' ' + props.whiskey.whiskeyName} </label>
      <span><h3>Tasting Note: </h3> <p>{props.whiskey.note}</p></span>
      <span><h3>Rating: </h3> <p>{props.whiskey.rating}</p></span>
      <span><h3>Country: </h3> <p>{props.whiskey.country}</p></span>
      <span><h3>Region: </h3> <p>{props.whiskey.region}</p></span>
      <button id="delete-button" onClick={props.deleteWhiskey}>Delete</button>
    </div>
  );
};

export default Note;
