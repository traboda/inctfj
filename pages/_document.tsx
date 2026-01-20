import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta property="og:locale" content="en_US" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap"
            rel="stylesheet"
            crossOrigin="anonymous"
          />
          <link
            href="https://cdn.staticaly.com/gh/hung1001/font-awesome-pro/8af0edd/css/all.css"
            rel="stylesheet"
          />
          
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-N7TQWNCN');
              `,
            }}
          />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) - Must be right after opening <body> tag */}
          <noscript>
            <iframe 
              src="https://www.googletagmanager.com/ns.html?id=GTM-N7TQWNCN"
              height="0" 
              width="0" 
              style={{display: 'none', visibility: 'hidden'}}
            />
          </noscript>
          
          <Main />
          <NextScript />
          <script src="https://play.inctf.in/sdk.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;