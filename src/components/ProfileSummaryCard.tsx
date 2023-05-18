import React from 'react';

const ProfileSummaryCard = ({
  name, avatar, role = '', designation, description, org:_ = null, linkedIn = null,
}) => (
  <div className="shadow h-full rounded-xl bg-white py-5 px-3">
    <div className="text-center p-2">
      <img
        alt={name}
        src={avatar}
        draggable="false"
        className="rounded-xl inline"
        style={{ maxWidth: '100%', height: '320px' }}
      />
      <div className="text-xl lg:text-2xl font-semibold mb-2 mt-5">{name}</div>
      <div className="text-lg font-semibold opacity-90">{role}</div>
      {linkedIn && (
        <div className=" mt-3 text-3xl text-center">
          <a href={linkedIn} target="_blank" className="fab fa-linkedin" />
        </div>
      )}
    </div>
    <div className="p-2">
      {designation &&
        <div className="text-center mb-2">
          {typeof designation == 'object' ? designation.map((d) => (
            <div>{d}</div>
          )) : designation}
        </div>}
      <div style={{ fontSize: '13px' }}>
        {description}
      </div>
    </div>
  </div>
);

export default ProfileSummaryCard;