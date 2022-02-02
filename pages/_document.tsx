import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';


class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext) {
        return await Document.getInitialProps(ctx);
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
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

}

export default MyDocument;