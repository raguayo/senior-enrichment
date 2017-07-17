import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavContainer from '../containers/NavContainer';
import CampusesContainer from '../containers/CampusesContainer';

function App ({children}) {
   console.log('App : children: ', children)
  return (
    <div id="main" className="container-fluid">
      <div>
        <NavContainer/>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default App;
