import { useRouter } from 'next/router';
import { useEffect } from 'react';

import SiteView from '../src/components/SiteView';

const PrivacyPage = () => {

  const router = useRouter();

  useEffect(() => {
    router.push('https://app.traboda.com/priacy');
  }, []);

  return (
    <SiteView meta={{ title: 'Privacy Policy' }}>
      <h1>Please wait while we redirect you.</h1>
    </SiteView>
  );
};

export default PrivacyPage;