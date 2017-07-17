import React, {Component} from 'react';
import store from '../store';
import axios from 'axios';
import Campuses from '../components/Campuses';
import AddCampusContainer from './AddCampusContainer';
import {receiveCampuses, receiveCampus} from '../action-creators/campuses';
import {receiveStudents} from '../action-creators/students';

class CampusesContainer extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
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
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
      console.log('In CampusesContainer : render : this.state = ', this.state);
    return (
      <div>
        <Campuses campuses={this.state.campuses.list}/>
        <AddCampusContainer />
      </div>
    )
  }
}
export default CampusesContainer;
