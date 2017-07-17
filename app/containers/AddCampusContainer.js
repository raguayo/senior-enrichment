import React, {Component} from 'react';
import store from '../store';
import AddCampus from '../components/AddCampus';
import {addCampus} from '../action-creators/campuses';

const initialState = {
  name: '',
  image: '',
};

class AddCampusContainer extends Component {
  constructor(props) {
      // console.log('IN AddCampusContainer - props: ', props)
    super(props);
    this.state = Object.assign({}, initialState);

    // console.log('in AddCampusContainer costructor after setting state')

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleImageChange(event) {
    this.setState({image: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(addCampus(this.state));
    this.setState(initialState);
    this.props.history.push('/');
  }

  render() {
    return (
      <AddCampus
        handleNameChange={this.handleNameChange}
        handleImageChange={this.handleImageChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default AddCampusContainer;
