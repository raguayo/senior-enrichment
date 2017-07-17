import React, {Component} from 'react';
import store from '../store';
import Nav from '../components/Nav';

class NavContainer extends Component {
  constructor() {
    super();
    this.state = store.getState();
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
    return (
      <Nav />
    );
  }
}

export default NavContainer;
