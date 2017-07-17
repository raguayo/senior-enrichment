import React, {Component} from 'react';
import store from '../store';
import EditStudent from '../components/EditStudent';
import axios from 'axios';
import {
  receiveStudents,
  updateStudent,
  setFirstStudentName,
  setLastStudentName,
  setStudentEmail,
  setStudentCampus,
  getStudentById,
} from '../action-creators/students';
import {
  receiveCampuses,
} from '../action-creators/campuses';

const initialState = {
  studentFirstName: '',
  studentLastName: '',
  studentEmail: '',
  studentCampus: '',
};

class EditStudentContainer extends Component {
  constructor() {
    super();
    this.state = store.getState();
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.setState(store.getState())
    )
    Promise.all([
      axios.get('/api/campuses'),
      axios.get('/api/students')
    ])
      .then(responses => responses.map(res => res.data))
      .then(([campuses, students]) => {
        store.dispatch(receiveCampuses(campuses));
        store.dispatch(receiveStudents(students));
      });
      store.dispatch(getStudentById(this.props.match.params.id))
      // console.log('this.props.match.params.id: ', this.props.match.params.id);
    // this.setState({studentFirstName: store.getState().students.selectedStudent.lastName});
    // this.setState({studentEmail: store.getState().students.selectedStudent.email});
    // this.setState({studentCampus: store.getState().students.selectedStudent.campus && store.getState().students.selectedStudent.campus.name});
  }

  componentWillUnmount() {
     this.unsubscribe();
  }

  handleFirstNameChange(event) {
    // this.setState({name:event.target.value});
     console.log('handleNameChange - event: ', event.target)
    const val = event.target.value;
    store.dispatch(setFirstStudentName(val));
    this.setState({studentFirstName: store.getState().students.firstName});
  }

  handleLastNameChange(event) {
    // this.setState({image: event.target.value});
    // console.log('handleImageChange - event.target.value: ', event.target)
    const val = event.target.value;
    store.dispatch(setLastStudentName(val));
    this.setState({studentLastName: store.getState().students.lastName});
  }

  handleEmailChange(event) {
    // this.setState({image: event.target.value});
    // console.log('handleImageChange - event.target.value: ', event.target)
    const val = event.target.value;
    store.dispatch(setStudentEmail(val));
    this.setState({studentEmail: store.getState().students.email});
  }

  handleCampusChange(event) {
    // this.setState({image: event.target.value});
    // console.log('handleImageChange - event.target.value: ', event.target)
    const val = event.target.value;
    store.dispatch(setStudentCampus(val));
    this.setState({studentCampus: store.getState().students.selectedStudent.campus.name});
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log('in handleSubmit before dispatching - this.state: ', this.state)
    store.dispatch(updateStudent({
      id: this.state.students.selectedStudent.id,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      campus: event.target.campus,
    }));
    this.setState(initialState);
    this.props.history.push('/');
  }

  render() {
     console.log('in render of EditStudentContainer - this.state: ', this.state);
    return (
      <EditStudent
        firstName={this.state.students.studentFirstName}
        lastName={this.state.students.studentLastName}
        email={this.state.students.studentEmail}
        campus={this.state.students.studentCampus}
        campuses={this.state.campuses && this.state.campuses.list}
        handleFirstNameChange={this.handleFirstNameChange}
        handleLastNameChange={this.handleLastNameChange}
        handleEmailChange={this.handleEmailChange}
        handleCampusChange={this.handleCampusChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }

}

export default EditStudentContainer;
