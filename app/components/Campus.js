import React from 'react';
import {Link} from 'react-router-dom';

export default function Campus({selectedCampus, students}) {
   console.log('Campus component - selectedCampus: ', selectedCampus);
  const {name, image, id} = selectedCampus;
   console.log('Campus component - students: ', students);
  // const campusStudents = students;

  return (
    <div>
      <div>
        <h3>CAMPUS NAME: {name}</h3>
        <div className="crop">
          <img src={image} className="img-thumbnail"/>
        </div>
      </div>
      <div>
        <h4>STUDENTS:</h4>
      {students.map(student =>
        <span key={student.id}><Link to={`/students/${student.id}`}>{`${student.id} - ${student.firstName} ${student.lastName}`}</Link></span>
      )}
      </div>
    </div>
  );
}
