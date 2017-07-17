import React from 'react';
import {Link} from 'react-router-dom';

export default function Student({selectedStudent}) {
   console.log('STUDENT COMPONENT : selectedStudent: ', selectedStudent);
  const {firstName, lastName, email, campusId, campus} = selectedStudent;
    console.log('campus: ', campus);

  return (
    <div>
      <span>NAME: {`${firstName} ${lastName}`}<br/>
      EMAIL: {email}<br/>
      { campus && `Student:  ${campus.name}`}<br/>
      <Link className="thumbnail" to={`/campuses/${campusId}`}>
        {campus && <img src={campus.image}/>}
      </Link>
      <div>
        <Link to={`/`}>HOME</Link>
      </div>
      </span>
    </div>
  );
}

