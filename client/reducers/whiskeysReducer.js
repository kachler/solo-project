import * as types from '../constants/actionTypes';
import axios from 'axios';

const apiUri = 'http://localhost:3000';
// const apiUri = 'http://localhost:8080';

const initialState = {
  totalWhiskeys: 3,
  newDistilleryName: '',
  newWhiskeyName: '',
  newNote: '',
  newRating: '',
  newCountry: '',
  newRegion: '',
  whiskeyList: [
    {
      distilleryName: 'Macallan',
      whiskeyName: 21,
      note: 'Classic flavor profile',
      rating: 3,
      country: 'Scotland',
      region: 'Highland',
    },
    {
      distilleryName: 'Longrow',
      whiskeyName: 'Red',
      note: 'You can taste the salt air',
      rating: 3,
      country: 'Scotland',
      region: 'Campbeltown',
    },
    {
      distilleryName: 'Lagavulin',
      whiskeyName: '16',
      note: 'Smokey, peaty and smooth',
      rating: 5,
      country: 'Scotland',
      region: 'Islay',
    },
  ],
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
        region: state.newCountry,
      };

      axios.post(`${apiUri}/add`, newWhiskey)
        .then(({ data }) => {
          console.log(data);
        })
        .catch(console.error);

      newState.whiskeyList = state.whiskeyList.concat(newWhiskey);
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
    case types.DELETE_WHISKEY:
      return {
      };
    case types.LOAD_WHISKIES: {
      console.log(action.payload);
      const newState = { ...state };
      newState.totalWhiskeys = action.payload.length;
      newState.whiskeyList = action.payload;
      return newState;
    }        
    default:
      return state;
  }
};


export default whiskeysReducer;
