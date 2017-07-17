import {RECEIVE_CAMPUSES,
  RECEIVE_CAMPUS,
  ADD_CAMPUS,
  DELETE_CAMPUS,
  EDIT_CAMPUS,
  CAMPUS_NAME,
  CAMPUS_IMAGE} from '../constants';

import axios from 'axios';

//SYNC ACTIONS
export const receiveCampus = campus => ({
  type: RECEIVE_CAMPUS,
  campus
});

export const receiveCampuses = campuses => ({
  type: RECEIVE_CAMPUSES,
  campuses
});

export const createCampus = (campus) => ({
  type: ADD_CAMPUS,
  campus: campus,
});

export const deleteCampus = id => ({
  type: DELETE_CAMPUS,
  id: id,
});

export const editCampus = (campus) => ({
  type: EDIT_CAMPUS,
  campus: campus,
});

export const editLocalCampusName = (campusName) => ({
  type: CAMPUS_NAME,
  campusName: campusName,
});

export const editLocalCampusImage = (campusImage) => ({
  type: CAMPUS_IMAGE,
  campusImage: campusImage,
});

//ASYNC ACTIONS
export const getCampusById = campusId => (dispatch, getState) => {
  axios.get(`/api/campuses/${campusId}`)
  .then(response => response.data)
  .then(campus => {
    // console.log('action creator campuses : getCampusById : campus : ', campus);
    // console.log('getState(): ', getState());
    dispatch(editLocalCampusName(campus.name));
    dispatch(editLocalCampusImage(campus.image));
    dispatch(receiveCampus(campus), getState);
  });
};

export const getCampuses = () => (dispatch, getState) => {
  axios.get(`/api/campuses`)
    .then(response => response.data)
    .then(campuses => {
      // console.log('action creator campuses : getCampuses : campuses : ', campuses);
      dispatch(receiveCampuses(campuses));
  });
};

export const removeCampus = id => (dispatch, getState) => {
  axios.delete(`/api/campuses/${id}`)
    .then(() => {
      dispatch(deleteCampus(id));
  })
};

export const addCampus = campus => (dispatch, getState) => {
  axios.post('/api/campuses', campus)
    .then(response => response.data)
   .then(newCampus => {
      dispatch(receiveCampuses(getState().campuses.list.concat([newCampus])))
   })
};

export const updateCampus = campus => (dispatch, getState) => {
   console.log('Campus Reducer - campus: ', campus)
  axios.put(`/api/campuses/${campus.id}`, campus)
    .then(response => response.data)
   .then(updatedCampus => {
      dispatch(receiveCampuses(getState().campuses.list.concat([updatedCampus])))
   })
}
