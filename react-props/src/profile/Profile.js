import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <h2>{fullName}</h2>
      <h3>{profession}</h3>
      <p>{bio}</p>
      {children}
      <button onClick={() => handleName(fullName)}>Click me!</button>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  fullName: 'John Doe',
  bio: 'No bio available',
  profession: 'Unknown profession',
};

export default Profile;
