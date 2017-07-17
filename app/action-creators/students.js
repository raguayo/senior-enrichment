import {RECEIVE_STUDENTS,
  RECEIVE_STUDENT,
  ADD_STUDENT,
  DELETE_STUDENT,
  EDIT_STUDENT,
  STUDENT_FIRST_NAME,
  STUDENT_LAST_NAME,
  STUDENT_EMAIL,
  STUDENT_CAMPUS,
} from '../constants';
import axios from 'axios';

//SYNC ACTIONS
export const receiveStudent = student => ({
  type: RECEIVE_STUDENT,
  student: student,
});

export const receiveStudents = students => ({
  type: RECEIVE_STUDENTS,
  students: students,
});

export const deleteStudent = id => ({
  type: DELETE_STUDENT,
  id: id,
});

export const createStudent = (campusId, student) => ({
  type: ADD_STUDENT,
  student: student,
});

export const editStudent = (campusId, student) => ({
  type: EDIT_STUDENT,
  student: student,
});

export const setFirstStudentName = (studentFirstName) => ({
  type: STUDENT_FIRST_NAME,
  studentFirstName: studentFirstName,
});

export const setLastStudentName = (studentLastName) => ({
  type: STUDENT_LAST_NAME,
  studentLastName: studentLastName,
});

export const setStudentEmail = (studentEmail) => ({
  type: STUDENT_EMAIL,
  studentEmail: studentEmail,
});

export const setStudentCampus = (studentCampus) => ({
  type: STUDENT_CAMPUS,
  studentCampus: studentCampus,
});

// ASYNC ACTIONS
export const getStudentById = id => (dispatch, getState) => {
  axios.get(`/api/students/${id}`)
    .then(response => response.data)
    .then(student => {
    // console.log('action creator students : getStudentById : response.data: ', response.data);
    dispatch(setFirstStudentName(student.firstName));
    dispatch(setLastStudentName(student.lastName));
    dispatch(setStudentEmail(student.email));
    dispatch(setStudentCampus(student.campus));
    dispatch(receiveStudent(student, getState));
  });
};

export const getStudents = () => (dispatch, getState) => {
  axios.get(`/api/students`)
    .then(response => {
    // console.log('action creator students : getStudents : response.data : ', response.data);
    dispatch(receiveStudents(response.data));
  });
};

export const removeStudent = id => (dispatch, getState) => {
  axios.delete(`/api/students/${id}`)
    .then(() => {
      dispatch(deleteStudent(id));
  })
};

export const addStudent = student => (dispatch, getState) => {
  axios.post('/api/students', student)
    .then(response => response.data)
    .then(newStudent => {
      dispatch(receiveStudents(getState().students.list.concat([newStudent])));
    });
};

export const updateStudent = student => (dispatch, getState) => {
  axios.put(`/api/students/${student.id}`, student)
    .then(response => response.data)
    .then(updatedStudent => {
      dispatch(receiveStudents(getState().students.list.concat([updatedStudent])));
    });
};
