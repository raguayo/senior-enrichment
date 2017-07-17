import React, {Component} from 'react';
import store from '../store';
// import {connect} from 'react-redux';
import axios from 'axios';
import {getCampusById, receiveCampuses} from '../action-creators/campuses';
import {receiveStudents} from '../action-creators/students';
import Campus from '../components/Campus';


class CampusContainer extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentWillMount() {
    // All smart components have access to the dispatch method via props.
    //The dispatch method allows us to execute an action creator,
    //perform logic, and ultimately update the global state object.
    // console.log('CampusContainer : conponentWillMout : this.props: ', this.props);

  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
    console.log('this.props: ', this.props)
    Promise.all([
      axios.get('/api/campuses'),
      axios.get('/api/students')
    ])
      .then(responses => responses.map(res => res.data))
      .then(([campuses, students]) => {
        store.dispatch(receiveCampuses(campuses));
        store.dispatch(receiveStudents(students));
      });
    store.dispatch(getCampusById(this.props.match.params.id));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
     console.log('In CampusContainer : render : this.props = ', this.props);
    return (
      <Campus
        selectedCampus={store.getState().campuses.selectedCampus}
        students={store.getState().students.list.filter(student =>
            this.state.campuses.selectedCampus.id === student.campusId)}
      />
    )
  }

// const mapStateToProps = (state, ownProps) => {
//   console.log('CAMPUS CONTAINER : state: ', state);
//   return {
//     selectedCampus: state.campuses.selected,
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {return {}};
}
// const CampusContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Campus);
export default CampusContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(Campus);
