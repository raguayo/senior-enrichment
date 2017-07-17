import React from 'react';
import { Link } from 'react-router-dom';
import store from '../store';

export default function AddStudent(props) {
  const campuses = store.getState().campuses;

  const {
    firstName, lastName, email, campusId,
    handleFNameChange, handleLNameChange, handleEmailChange,
    handleCampusChange, handleSubmit
  } = props;

  return (
    <div className="col-xs-12">
      <h2>ADD STUDENT</h2>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="col-xs-12">FirstName:</label>
          <input type="text" className="form-control" id="firstname"
            onChange={handleFNameChange} value={firstName}></input>
        </div>
        <div className="form-group">
          <label>LastName:</label>
          <input type="text" className="form-control" id="lastname"
            onChange={handleLNameChange} value={lastName}></input>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="text" className="form-control" id="email"
            onChange={handleEmailChange} value={email}></input>
        </div>
        <div className="form-group">
          <label>Campus:</label>
          <select id="campus-select" onChange={handleCampusChange}>
            {campuses && campuses.list.map(campus => (
                <option key={campus.id} value={campus.id}>{campus.name}</option>
              ))
            }
          </select>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
  );
};
