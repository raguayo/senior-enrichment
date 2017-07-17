import React from 'react';
import { Link } from 'react-router-dom';
import store from '../store';

export default function AddCampus(props) {
  // console.log('IN AddCampus.js - props: ', props)
  const {
    name, image,
    handleNameChange, handleImageChange, handleSubmit
  } = props;

  return (
    <div className="col-xs-12">
      <h2>ADD CAMPUS</h2>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="col-xs-12">Campus Name:</label>
          <input type="text" className="form-control" id="name"
            onChange={handleNameChange} value={name}></input>
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input type="text" className="form-control" id="image"
            onChange={handleImageChange} value={image}></input>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
  );
};
