import store from '../store';
import {
  RECEIVE_STUDENTS,
  RECEIVE_STUDENT,
  DELETE_STUDENT,
  ADD_STUDENT,
  EDIT_STUDENT,
  STUDENT_FIRST_NAME,
  STUDENT_LAST_NAME,
  STUDENT_EMAIL,
  STUDENT_CAMPUS,
} from '../constants';

const initialState = {
  list: [],
  selectedStudent: {},
  studentFirstName: '',
  studentLastName: '',
  studentEmail: '',
  studentCampus: '',
}

export default function (prevState = initialState, action) {
  const nextState = Object.assign({}, prevState);

  // console.log('students-reducer : prevState: ', prevState, '\naction: ', action);

  switch(action.type) {
    case RECEIVE_STUDENTS:
      // console.log('student-reducer : in RECEIVE_STUDENTS');
      nextState.list = action.students;
      return nextState;
      // return Object.assign({}, state, {list: action.students});
      // break;

    case RECEIVE_STUDENT:
      // console.log('student-reducer : in RECEIVE_STUDENT');
      // console.log('students-reducer : action.type: ', action.type);
      nextState.selectedStudent = action.student;
      return nextState;
      // return Object.assign({}, prevState, {selected: action.student});
      // break;

    case DELETE_STUDENT:
      nextState.list = store.getState().students.list.filter(student => {
        return (action.id !== student.id);
      });
      return nextState;

    case ADD_STUDENT:
      nextState.selectedStudent = store.getState().students.list.map(student => {
        if(action.id !== student.id) {
          return student;
        } else {
          return action.student
        }
      });
      return nextState;

    case EDIT_STUDENT:
      nextState.selectedStudent = store.getState().students.list.map(student => {
        if(action.id !== student.id) {
          return student;
        } else {
          return action.student
        }
      });
      return nextState;

    case STUDENT_FIRST_NAME:
      nextState.studentFirstName = action.studentFirstName;
      return nextState;

    case STUDENT_LAST_NAME:
      nextState.studentLastName = action.studentLastName;
      return nextState;

    case STUDENT_EMAIL:
      nextState.studentEmail = action.studentEmail;
      return nextState;

    case STUDENT_CAMPUS:
      nextState.studentCampus = action.studentCampus;
      return nextState;

    default:
    // console.log('student-reducer : in DEFAULT ');
      return prevState;
  }
}
