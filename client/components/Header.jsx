import React from 'react';

const Header = (props) => {
  // console.log('Total Whiskeys: ', props.totalWhiskeys);
  return (
    <div className="header">
      <img id="neat-logo" src="./images/neat-logo.png" />
      <img id="user-icon" src="./images/user.png" />
      {/* <h1>Header</h1> */}
      {/* <h1>{props.totalWhiskeys}</h1> */}
    </div>
  );
};

export default Header;
