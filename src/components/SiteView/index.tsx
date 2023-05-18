import React from 'react';

import ConfigContext from './context';
import SiteViewHeadTags, { PageMeta } from './head';

type AppView = {
  children: (React.ReactElement | React.ReactNode),
  meta?: PageMeta
};

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;

const SiteView = ({ meta, children }: AppView) => {

  const eventConfig = require(`../../data/${eventID}/config.ts`).default;

  return (
    <ConfigContext.Provider value={eventConfig}>
      <SiteViewHeadTags meta={meta} />
      <main>
        {children}
      </main>
    </ConfigContext.Provider>
  );

};

export default SiteView;