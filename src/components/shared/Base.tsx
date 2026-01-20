import React, { useEffect } from 'react';
import Head from 'next/head';

const seoTags = {
  'siteName': 'InCTF Jr',
  'tagLine': "India's First & Only CTF CyberSecurity Championship for School Students",
  'description': "India's First & Only CTF & Cyber Security Championship & Talent Incubation Programme exclusively for High School Students, organized by team bi0s, India's No.1 ranked CTF Team.",
};

const Base = ({ children, meta }) => {

  const title = `${meta && meta.title ? `${meta.title} |` : '' } ${seoTags.siteName} - ${seoTags.tagLine}`;
  // const GoogleAnalyticsID = 'G-XYWG82LV7L';

  useEffect(() => {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const reg of registrations) {
        reg.unregister();
      }
    });
  }, []);

  return (<React.Fragment>
    <Head>
      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N7TQWNCN');`,
        }}
      />
      {/* End Google Tag Manager */}
      
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#E65100" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={meta && meta.description ? meta.description : seoTags.description} />
      <meta name="twitter:title" content={title} />
      <meta property="og:title" content={title} />
      { meta && meta.image && <meta property="og:image" content={meta.image} /> }
      <meta name="viewport" content="width=device-width, minimum-scale=1, shrink-to-fit=no, initial-scale=1" />
      <link rel="manifest" href="/manifest.json" />
      <link href="/images/icons/icon-72x72.png" rel="icon" type="image/png" sizes="72x72" />
      <link href="/images/icons/icon-96x96.png" rel="icon" type="image/png" sizes="96x96" />
      <link href="/images/icons/icon-128x128.png" rel="icon" type="image/png" sizes="128x128" />
      <link href="/images/icons/icon-152x152.png" rel="icon" type="image/png" sizes="144x144" />
      <link href="/images/icons/icon-152x152.png" rel="icon" type="image/png" sizes="152x152" />
      <link href="/images/icons/icon-192x192.png" rel="icon" type="image/png" sizes="192x192" />
      <link href="/images/icons/icon-384x384.png" rel="icon" type="image/png" sizes="384x384" />
      <link rel="apple-touch-icon" href="/images/icons/icon-512x512.png" />
      <link rel="shortcut icon" href="/images/icons/icon-72x72.png" />
      {/* { GoogleAnalyticsID && <React.Fragment>
        <script rel="preconnect" async src={`https://www.googletagmanager.com/gtag/js?id=${GoogleAnalyticsID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GoogleAnalyticsID}');`,
          }}
        />
      </React.Fragment>} */}
    </Head>
    <div className="app">
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-N7TQWNCN"
          height="0" 
          width="0" 
          style={{display:'none',visibility:'hidden'}}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      
      {children}
      {/*<SupportDesk />*/}
    </div>
  </React.Fragment>);
};

export default Base;