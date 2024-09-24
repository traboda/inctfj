import { useEffect } from 'react';
import { useRouter } from 'next/router';

import SiteView from '../src/components/SiteView';
import Image from "next/image";

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../src/data/${eventID}/index.json`);

const DiscordRedirect = () => {

  const router = useRouter();

  useEffect(() => {
    router.push(data.DiscordInvite);
  }, []);

  return (
      <SiteView meta={{title: `Join ${eventID} Discord Server`}}>
        <div className="flex flex-col items-center justify-center w-screen h-screen">
          <Image src={`/${eventID}/assets/logo_dark.png`} alt={eventID} height={300} width={200}/>
          <h1 className="mt-5">Thank you for joining {eventID} Discord Server</h1>
          <h1 className="mt-1">Please wait while we redirect you ...</h1>
        </div>
      </SiteView>
  );
};

export default DiscordRedirect;