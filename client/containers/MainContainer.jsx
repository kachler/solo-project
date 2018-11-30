import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header.jsx';
import Notes from './NotesContainer.jsx';
import Footer from '../components/Footer.jsx';
import * as actions from '../actions/actions';
import styles from '../style.css';

const mapStateToProps = store => ({
  totalWhiskeys: store.whiskeys.totalWhiskeys
});

const mapDispatchToProps = dispatch => ({
  loadWhiskeys: () => dispatch(actions.loadWhiskeys()),
});

const MainContainer = (props) => {
//   console.log(props);
  return (
    <div className="main-container">
      <Header {...props} />
      <Notes />
      <Footer />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
