import {combineReducers} from 'redux';
import campusesReducer from './campuses-reducer';
import studentsReducer from './students-reducer';

const rootReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
});

export default rootReducer;
