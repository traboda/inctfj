import React from "react";

const ProfileMicroCard = ({ name, photo, desg = '' }) => (
    <div className="shadow h-full rounded-xl bg-white p-2">
        <div className="flex flex-wrap">
            {photo && (
                <div className="w-1/3">
                    <img
                        alt={name}
                        src={photo}
                        draggable="false"
                        className="rounded-xl inline"
                        style={{ maxWidth: '100%', maxHeight: '120px' }}
                    />
                </div>
            )}
            <div className="w-2/3 flex h-100 px-2 items-center">
                <div>
                    <div className="lg:text-xl font-semibold mb-1">{name}</div>
                    <div style={{ fontSize: '14px', lineHeight: 1.3 }} className="opacity-90">{desg}</div>
                </div>
            </div>
        </div>
    </div>
);

export default ProfileMicroCard;