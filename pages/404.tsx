import React from 'react';

import TopBar from '../src/components/shared/TopBar';
import Footer from '../src/components/shared/Footer';
import SiteView from '../src/components/SiteView';

const NotFoundPage = () => (
  <SiteView meta={{ title: 'Page not Found' }}>
    <TopBar />
    <div style={{ minHeight: '40vmax' }} className="flex justify-center items-center">
      <div>
        <h1 className="text-6xl mb-4 text-center">
          Page Not Found
        </h1>
        <p>
          We're sorry, but the page you are looking for does not exist.
        </p>
      </div>
    </div>
    <Footer />
  </SiteView>
);


export default NotFoundPage;