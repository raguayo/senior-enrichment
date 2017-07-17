import React from 'react';
import {Link} from 'react-router-dom';

const Nav = (props) => {
  return (
    <div id="main" className="container-fluid">
      <ul>
        <li><Link className="active" to="/campuses">Home/Campuses</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/addCampus">Add Campus</Link></li>
        <li><Link to="/addStudent">Add Student</Link></li>
      </ul>
    </div>
  );
}

export default Nav;
