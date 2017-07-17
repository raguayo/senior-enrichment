import React from 'react';
import {Link} from 'react-router-dom';

export default function EditStudent(props) {
  console.log('EditStudent - props: ', props);
  const {
    firstName, lastName, email, campus, campuses,
    handleFirstNameChange, handleLastNameChange, handleEmailChange, handleCampusChange, handleSubmit
  } = props;

  return (
    <div className="col-xs-12">
      <h2>EDIT STUDENT</h2>
      <form className="form-horizontal" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label className="col-xs-12">First Name:</label>
          <input type="text" className="form-control" id="firstName"
            onChange={(e) => handleFirstNameChange(e)} value={firstName}></input>
        </div>
         <div className="form-group">
          <label>Last Name:</label>
          <input type="text" className="form-control" id="lastName"
            onChange={(e) =>handleLastNameChange(e)} value={lastName}></input>
        </div>
        <div className="form-group">
          <label>Email Address:</label>
          <input type="text" className="form-control" id="email"
            onChange={(e) => handleEmailChange(e)} value={email}></input>
        </div>
        <div className="form-group">
          <label>Campus:</label>
          <select id="campus" value={campus && campus.name} onChange={(e) => handleCampusChange(e)}>
            {campuses && campuses.map(singleCampus => (
                <option key={singleCampus.id} value={singleCampus.name}>{singleCampus.name}</option>
              ))
            }
          </select>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
  );
};
