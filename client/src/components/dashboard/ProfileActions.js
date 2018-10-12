import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div className="btn-group mb-2" role="group">
      <Link to="/edit-profile" className="btn btn-dark">
        <i className="fas fa-user-circle text-info mr-3" /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-dark">
        <i className="fab fa-black-tie text-info mr-3" />
        Add Experience
      </Link>
      <Link to="/add-education" className="btn btn-dark">
        <i className="fas fa-graduation-cap text-info mr-3" />
        Add Education
      </Link>
    </div>
  );
};

export default ProfileActions;
