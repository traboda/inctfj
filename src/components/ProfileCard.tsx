import React from 'react';

const ProfileCard = ({
  name, photo, desg = '', org = null, linkedIn = null,
}) => (
  <div className="shadow h-full text-center rounded-xl bg-white py-5 px-3">
    <img
      alt={name}
      src={photo}
      draggable="false"
      className="rounded-xl inline"
      style={{ maxWidth: '100%', height: '220px' }}
    />
    <div className="text-xl lg:text-2xl font-semibold mb-2 mt-3">{name}</div>
    <div className="opacity-90">{desg}</div>
    {org && <div className="text-lg">{org}</div>}
    {linkedIn && (
    <div className=" mt-3 text-3xl text-center">
      <a href={linkedIn} target="_blank" className="fab fa-linkedin" />
    </div>
    )}
  </div>
);

export default ProfileCard;