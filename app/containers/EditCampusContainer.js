import React, {Component} from 'react';
import store from '../store';
import EditCampus from '../components/EditCampus';
import {updateCampus,
  getCampusById,
  editLocalCampusName,
  editLocalCampusImage,
} from '../action-creators/campuses';

const initialState = {
  campusName: '',
  campusImage: '',
};

class EditCampusContainer extends Component {
  constructor() {
    super();
    this.state = store.getState();
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.setState(store.getState())
    )
    store.dispatch(getCampusById(this.props.match.params.id))
  }

  componentWillUnmount() {
     this.unsubscribe();
  }

  handleNameChange(event) {
    // this.setState({name:event.target.value});
    // console.log('handleNameChange - event: ', event.target)
    const val = event.target.value;
    store.dispatch(editLocalCampusName(val));
  }

  handleImageChange(event) {
    // this.setState({image: event.target.value});
    // console.log('handleImageChange - event.target.value: ', event.target)
    const val = event.target.value;
    store.dispatch(editLocalCampusImage(val));
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log('in handleSubmit in EditCampusContainer - event.target.image.value: ', event.target.image.value)
    store.dispatch(updateCampus({
      id: this.state.campuses.selectedCampus.id,
      name: event.target.name.value,
      image: event.target.image.value,
    }));
    this.setState(initialState);
    this.props.history.push('/');
  }

  render() {
    console.log('in render of EditCampusContainer - state: ', this.state);
    return (
      <EditCampus
        name={this.state.campuses.campusName}//{store.getState().campuses.selectedCampus.name}
        image={this.state.campuses.campusImage}//{store .getState().campuses.selectedCampus.image}
        handleNameChange={this.handleNameChange}
        handleImageChange={this.handleImageChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }

}

export default EditCampusContainer;
