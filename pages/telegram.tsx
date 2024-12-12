import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import SiteView from '../src/components/SiteView';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../src/data/${eventID}/index.json`);

const TelegramRedirect = () => {

  const router = useRouter();

  useEffect(() => {
    router.push(data.TelegramInvite);
  }, []);

  return (
    <SiteView meta={{ title: `Join ${eventID} Telegram Server` }}>
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <Image src={`/${eventID}/assets/logo_dark.png`} alt={eventID} height={300} width={200} />
        <h1 className="mt-5">
          Thank you for joining
          {eventID}
          {' '}
          Telegram Server
        </h1>
        <h1 className="mt-1">Please wait while we redirect you ...</h1>
      </div>
    </SiteView>
  );
};

export default TelegramRedirect;