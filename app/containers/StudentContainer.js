import React, {Component} from 'react';
import store from '../store';
// import {connect} from 'react-redux';
import {getStudentById, receiveStudents} from '../action-creators/students';
import {receiveCampuses} from '../action-creators/campuses';
import axios from 'axios';
import Student from '../components/Student';

class StudentContainer extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    console.log('this.props.match.params: ', this.props.match.params)
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
      Promise.all([
      axios.get('/api/campuses'),
      axios.get('/api/students')
    ])
      .then(responses => responses.map(res => res.data))
      .then(([campuses, students]) => {
        store.dispatch(receiveCampuses(campuses));
        store.dispatch(receiveStudents(students));
      });
    store.dispatch(getStudentById(this.props.match.params.id));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
      console.log('In StudentContainer : render : this.state = ', this.state);
    return (
      <Student
        selectedStudent={store.getState().students.selectedStudent}
        campuses={store.getState().campuses.list}
      />
    )
  }

// const mapStateToProps = (state, ownProps) => {
//   console.log('STUDENT CONTAINER : state: ', state);
//   return {
//     selectedStudent: state.students.selected,
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {return {}};
}
//const StudentContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Student);
export default StudentContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(Student);
