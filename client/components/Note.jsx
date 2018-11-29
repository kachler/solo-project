import React from 'react';

const Note = (props) => {
//   console.log(props.whiskey);
  return (
    <div className="note">
      <h2>{props.whiskey.distilleryName + ' ' + props.whiskey.whiskeyName} </h2>
      <p>Tasting Note: {props.whiskey.note}</p>
      <p>Rating: {props.whiskey.rating}</p>
      <p>Country: {props.whiskey.country}</p>
      <p>Region: {props.whiskey.region}</p>
    </div>
  );
};

export default Note;
