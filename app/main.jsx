'use strict';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import store from './store';
import axios from 'axios';
//import Root from './components/Root'  // cut out <Root/> from underneath <Provider>

import {receiveCampuses, receiveCampus, getCampusById, getCampuses} from './action-creators/campuses';
import {receiveStudents, receiveStudent, getStudentById, getStudents} from './action-creators/students';

import NavContainer from './containers/NavContainer';
import CampusesContainer from './containers/CampusesContainer';
import CampusContainer from './containers/CampusContainer';
import StudentsContainer from './containers/StudentsContainer';
import StudentContainer from './containers/StudentContainer';
import AddStudentContainer from './containers/AddStudentContainer';
import AddCampusContainer from './containers/AddCampusContainer';
import EditStudentContainer from './containers/EditStudentContainer';
import EditCampusContainer from './containers/EditCampusContainer';

import App from './components/App';

render (
  <Provider store={store}>
    <BrowserRouter>
      <div id="main" className="container-fluid">
        <div className="col-xs-12">
          <br/><NavContainer/><br/>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={CampusesContainer}/>
            <Route exact path="/campuses" component={CampusesContainer}/>
            <Route exact path="/campuses/:id" component={CampusContainer} />
            <Route exact path="/students" component={StudentsContainer}/>
            <Route exact path="/students/:id" component={StudentContainer}/>
            <Route exact path="/addStudent" component={AddStudentContainer}/>
            <Route exact path="/addCampus" component={AddCampusContainer}/>
             <Route exact path="/students/:id/edit" component={EditStudentContainer}/>
            <Route exact path="/campuses/:id/edit" component={EditCampusContainer}/>}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
