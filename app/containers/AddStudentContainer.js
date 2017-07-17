import React, {Component} from 'react';
import store from '../store';
import AddStudent from '../components/AddStudent';
import {addStudent} from '../action-creators/students';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  campusId: null
};

class AddStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, initialState);

    this.handleFNameChange = this.handleFNameChange.bind(this);
    this.handleLNameChange = this.handleLNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleFNameChange (e) {
    this.setState({firstName: e.target.value});
  }

  handleLNameChange (e) {
    this.setState({lastName: e.target.value});
  }

  handleEmailChange (e) {
    this.setState({email: e.target.value});
  }

  handleCampusChange (e) {
    this.setState({campusId: parseInt(e.target.value)});
  }

  handleSubmit (e) {
    e.preventDefault();
    store.dispatch(addStudent(this.state));
    this.setState(initialState);
    this.props.history.push('/');
  }

  render() {
    return (
      <AddStudent
        handleFNameChange={this.handleFNameChange}
        handleLNameChange={this.handleLNameChange}
        handleEmailChange={this.handleEmailChange}
        handleCampusChange={this.handleCampusChange}
        handleSubmit={this.handleSubmit}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        campusId={this.state.campusId}

      />
    );
  }

}

export default AddStudentContainer;
