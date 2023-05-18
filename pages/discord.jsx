import { useEffect } from 'react';
import { useRouter } from 'next/router';

import SiteView from '../src/components/SiteView';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../src/data/${eventID}/index.json`);

const DiscordRedirect = () => {

  const router = useRouter();

  useEffect(() => {
    router.push(data.DiscordInvite);
  }, []);

  return (
    <SiteView meta={{ title: `Join ${eventID} Discord Server` }}>
      <h1>Please wait while we redirect you.</h1>
    </SiteView>
  );
};

export default DiscordRedirect;