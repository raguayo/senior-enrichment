import React from 'react';
import {Link} from 'react-router-dom';
import store from '../store';
import {removeCampus} from '../action-creators/campuses';

const Campuses = ({campuses}) => {
  // const campuses = props.campuses;
  // console.log('CAMPUSES: ', campuses);
  return (
    <div>
      <h2>CAMPUSES</h2>
      <div className="row">
        {
          campuses && campuses.map(campus => (
            <div className="col-xs-4 campus-outer-div" key={campus.id}>
              <Link className="thumbnail" to={`/campuses/${campus.id}`}>
                <img src={campus.image} alt={campus.image}/>
              </Link>
              <div className="campus-details-div" key={campus.name}>
                <h3 className="caption campus-title">
                  <span>{campus.name}</span>
                </h3>
              </div>
              <div className="campus-buttons-div">
                <a className="campus-delete-button" href="#" onClick={() => store.dispatch(removeCampus(campus.id))}>
                  Remove Campus
                </a>
                <Link className="campus-edit-button" to={`/campuses/${campus.id}/edit`}>
                  Edit Campus
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Campuses;
