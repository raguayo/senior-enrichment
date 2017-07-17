import React from 'react';
import {Link} from 'react-router-dom';

export default function EditCampus(props) {
  const {
    name, image,
    handleNameChange, handleImageChange, handleSubmit
  } = props;

  return (
    <div className="col-xs-12">
      <h2>EDIT CAMPUS</h2>
      <form className="form-horizontal" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label className="col-xs-12">Campus Name:</label>
          <input type="text" className="form-control" id="name"
            onChange={(e) => handleNameChange(e)} value={name}></input>
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input type="text" className="form-control" id="image"
            onChange={(e) => handleImageChange(e)} value={image}></input>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
  );
};
