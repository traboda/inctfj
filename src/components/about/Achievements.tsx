import React from 'react';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/about.json`);

const AboutAchievements = () => {
  if (!data.Achievements) {
    return null;
  }
  return (
    <div id="impact" className="container mx-auto" style={{ padding: '7.5vw 1.2rem' }}>
      <div className="text-center">
        <h1 className="font-bold text-3xl lg:text-4xl mb-3">{data.AchievementsHeader}</h1>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {data.Achievements.map((a, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="opacity-80 mb-5 text-sm">{a.subTitle}</div>
            <img
              src={`/${eventID}/${a.image}`}
              alt={a.title}
              style={{ height: '180px' }}
              className="rounded-lg shadow-lg"
              draggable={false}
            />
            <div className="font-bold text-xl mt-4">{a.title}</div>
            <div style={{ fontSize: '0.95rem', width: '300px', maxWidth: '100%' }}>{a.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutAchievements;