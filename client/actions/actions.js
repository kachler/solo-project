import axios from 'axios';
import * as types from '../constants/actionTypes';

const apiUri = 'http://localhost:3000';
// const apiUri = 'http://localhost:8080';

export const addWhiskey = data => ({
  type: types.ADD_WHISKEY,
  payload: data,
});

export const deleteWhiskey = id => ({
  type: types.DELETE_WHISKEY,
  payload: id,
});

export const setNewDistillery = data => ({
  type: types.SET_NEW_DISTILLERY,
  payload: data, 
});

export const setNewName = data => ({
  type: types.SET_NEW_NAME,
  payload: data, 
});

export const setNewNote = data => ({
  type: types.SET_NEW_NOTE,
  payload: data, 
});

export const setNewRating = data => ({
  type: types.SET_NEW_RATING,
  payload: data, 
});

export const setNewCountry = data => ({
  type: types.SET_NEW_COUNTRY,
  payload: data, 
});

export const setNewRegion = data => ({
  type: types.SET_NEW_REGION,
  payload: data, 
});

export const loadWhiskeys = () => (dispatch) => {
  axios.get(`${apiUri}/get`)
    .then(({ data }) => {
      dispatch({
        type: types.LOAD_WHISKIES,
        payload: data,
      });
    })
    .catch(console.error);
};

export const setShowModal = data => ({
  type: types.SET_SHOW_MODAL,
  payload: data
});
