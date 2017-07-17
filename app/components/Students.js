import store from '../store';
import {removeStudent} from '../action-creators/students';
import React from 'react';
import {Link} from 'react-router-dom';


const Students = ({students, campuses}) => {
  // const students = props.students;
   console.log('STUDENTS: ', students);
  return (
    <div>
      <h2>STUDENTS</h2>
      <div className="row">
        {
          students && students.map(student => (
            <div className="col-xs-4 campus-outer-div" key={student.id}>
              <Link className="thumbnail" to={`/students/${student.id}`}>
                <div className="campus-details-div"  key={student.email}>
                  <div className="caption campus-title"  key={student.name}>
                    <h5>{`ID: ${student.id}`}</h5>
                    <h5>{`NAME: ${student.firstName} ${student.lastName}`}</h5>
                    <h5>{`EMAIL: ${student.email}`}</h5>
                    <h5>{`CAMPUS: ${student.campus && student.campus.name}`}</h5>
                  </div>
                </div>
              </Link>
              <div className="campus-buttons-div">
              <a className="campus-delete-button" href="#" onClick={() => store.dispatch(removeStudent(student.id))}>
                Remove Student
              </a>
              <Link className="campus-edit-button" to={`/students/${student.id}/edit`}>
                Edit Student
              </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );

  return (
    <div>
      <h3>Students</h3>
        <div className="row">
          {
            students && students.map(student => (
              <div className="col-xs-4" key={student.id}>
                <Link
                  to={`/students/${student.id}`}>
                  {/*<div className="crop">
                    <img src={campus.image}/>
                  </div>*/}
                  <div className="caption">
                    <h5>
                      <span>{` ${student.id} - ${student.firstName} ${student.lastName} - ${student.email}`}</span>
                    </h5>
                  </div>
                </Link>
                <div className="media-right stud-del-but-div">
                  <button className="btn btn-default" onClick={() => store.dispatch(removeStudent(student.id))}>
                    X
                  </button>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  );
};

export default Students;
