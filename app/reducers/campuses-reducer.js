import store from '../store';
import {
  RECEIVE_CAMPUSES,
  RECEIVE_CAMPUS,
  DELETE_CAMPUS,
  ADD_CAMPUS,
  EDIT_CAMPUS,
  CAMPUS_NAME,
  CAMPUS_IMAGE
} from '../constants';

const initialState = {
  list: [],
  selectedCampus: {},
  campusName: '',
  campusImage: '',
}

export default function (prevState = initialState, action) {
  // console.log('b4 assigning newState : Is state === initialCampusesState? ', state === initialCampusesState);
  const nextState = Object.assign({}, prevState);
  // console.log('after assigning newState : Is state === initialCampusesState? ', state === initialCampusesState);

  // console.log('campuses-reducer : prevState: ', prevState, '\naction: ', action);

  switch (action.type) {
    case RECEIVE_CAMPUSES:
      nextState.list = action.campuses;
      return nextState;
    //return Object.assign({}, prevState, {list: action.campuses});
    //break;

    case RECEIVE_CAMPUS:
      // console.log('b4 assigning newState.selected in REVIEW_CAMPUS case : Is state === initialState? ', prevState === initialState);
      // console.log('before assigning newState.selected : prevState: ', prevState, '\naction: ', action);
      // console.log('campuses-reducer : action.type: ', action.type);
      nextState.selectedCampus = action.campus;
      return nextState;
    //return Object.assign({}, prevState, {selected: action.campus});
    //break;

    case DELETE_CAMPUS:
      nextState.list = store.getState().campuses.list.filter(campus => {
        return (action.id !== campus.id);
      });
      return nextState;

    case ADD_CAMPUS:
      nextState.selectedCampus = store.getState().campuses.list.map(campus => {
        if (action.id !== campus.id) {
          return campus;
        } else {
          return action.campus
        }
      });
      return nextState;

    case EDIT_CAMPUS:
      nextState.selectedCampus = store.getState().campuses.list.map(campus => {
        if (action.id !== campus.id) {
          return campus;
        } else {
          return action.campus
        }
      });
      return nextState;

    case CAMPUS_NAME:
      console.log('action.campusName: ', action.campusName);
      nextState.campusName = action.campusName;
      return nextState;

    case CAMPUS_IMAGE:
    console.log('action.campusImage: ', action.campusImage);
      nextState.campusImage = action.campusImage;
      return nextState;

    default:
      // console.log('in default about to return state that was passed in.')
      return prevState;
  }
}
