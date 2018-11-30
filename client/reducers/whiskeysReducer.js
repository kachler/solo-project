import * as types from '../constants/actionTypes';
import axios from 'axios';

const apiUri = 'http://localhost:3000';
// const apiUri = 'http://localhost:8080';

const initialState = {
  showModal: false,
  totalWhiskeys: 0,
  newDistilleryName: '',
  newWhiskeyName: '',
  newNote: '',
  newRating: '',
  newCountry: '',
  newRegion: '',
  whiskeyList: [],
};

const whiskeysReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_WHISKEY: {
      const newState = state;
      const newWhiskey = {
        distilleryName: state.newDistilleryName,
        whiskeyName: state.newWhiskeyName,
        note: state.newNote,
        rating: state.newRating,
        country: state.newCountry,
        region: state.newRegion,
      };

      axios.post(`${apiUri}/add`, newWhiskey)
        .then(({ data }) => {
          console.log(data);
        })
        .catch(console.error);

      newState.whiskeyList = state.whiskeyList.concat(newWhiskey);
      newState.showModal = false;
      newState.newDistilleryName = '';
      newState.newWhiskeyName = '';
      newState.newNote = '';
      newState.newRating = '';
      newState.newCountry = '';
      newState.newRegion = '';
      return newState;
    }
    case types.SET_NEW_DISTILLERY:
      return {
        ...state,
        newDistilleryName: action.payload,
      };
    case types.SET_NEW_NAME:
      return {
        ...state,
        newWhiskeyName: action.payload,
      };
    case types.SET_NEW_NOTE:
      return {
        ...state,
        newNote: action.payload,
      };
    case types.SET_NEW_RATING:
      return {
        ...state,
        newRating: action.payload,
      };
    case types.SET_NEW_COUNTRY:
      return {
        ...state,
        newCountry: action.payload,
      };
    case types.SET_NEW_REGION:
      return {
        ...state,
        newRegion: action.payload,
      };
    case types.LOAD_WHISKIES: {
      console.log(action.payload);
      const newState = { ...state };
      newState.totalWhiskeys = action.payload.length;
      newState.whiskeyList = action.payload;
      return newState;
    }
    case types.DELETE_WHISKEY: {
      const newState = { ...state };
      newState.whiskeyList = newState.whiskeyList.slice();
      axios.delete(`${apiUri}/delete/${newState.whiskeyList[action.payload]._id}`)
        .then(({ data }) => {
          console.log(data);
        })
        .catch(console.error);

      delete newState.whiskeyList[action.payload];
      return newState;
    }
    case types.SET_SHOW_MODAL: {
      console.log(state.showModal);
      const newState = { ...state };
      newState.whiskeyList = newState.whiskeyList.slice();
      newState.showModal = true;
      return newState;
    }  
    default:
      return state;
  }
};


export default whiskeysReducer;
