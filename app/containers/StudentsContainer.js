import React, {Component} from 'react';
// import {connect} from 'react-redux';
import store from '../store';
import Students from '../components/Students';
import AddStudentContainer from './AddStudentContainer';

class StudentsContainer extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentWillMount() {
    // All smart components have access to the dispatch method via props.
    //The dispatch method allows us to execute an action creator,
    //perform logic, and ultimately update the global state object.
    // console.log('StudentsContainer : conponentWillMout : this.props: ', this.props);

  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    console.log('In StudentsContainer : render : this.state = ', this.state);
    return (
      <div>
        <Students students={this.state.students.list} campuses={this.state.campuses.list}/>
        <div>
          <AddStudentContainer campuses={this.state.campuses.list}/>
        </div>
      </div>
    )
  }

// function mapStateToProps(state, ownProps) {
//   console.log('StudentsContainer : state = ', state);
//   console.log('StudentsContainer : ownProps = ', ownProps);
//   return {
//     students: state.students,
//   };
// };

// const mapDispatchToProps = dispatch => { return {}};

}
// const StudentsContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Students);
// export default connect(mapStateToProps, mapDispatchToProps)(Students);
export default StudentsContainer;
