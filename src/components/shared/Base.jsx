import React from 'react';
import Head from "next/head";

import '../../styles/styles.css';
import '../../styles/bootstrap.min.css';

const seoTags = {
    "siteName": "InCTF Jr 5.0 - December 20, 2020",
    "tagLine": "India's First & Premier CTF Hacking Contest for School Students",
    "description": "Participate in the 5th edition of India's First & Premier Hacking & Cyber Security Contest for High School Students, organized by team bi0s, India's No.1 ranked CTF Team."
};

const Base = ({ children, meta }) => {

    const title = `${meta && meta.title ? `${meta.title} |` : '' } ${seoTags.siteName} - ${seoTags.tagLine}`;
    const GoogleAnalyticsID = null;

    return <React.Fragment>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8'/>
            <meta name='theme-color' content='#4A148C' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
            <meta name="description" content={meta && meta.description ? meta.description : seoTags.description} />
            <meta name="twitter:title" content={title} />
            <meta property="og:title" content={title} />
            {   meta && meta.image && <meta property="og:image" content={meta.image} /> }
            <meta name="viewport" content="width=device-width, minimum-scale=1, shrink-to-fit=no, initial-scale=1, user-scalable=no" />
            <link rel="manifest" href="/manifest.json" />
            <link href='/images/icons/icon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
            <link href='/images/icons/icon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
            <link href='/images/icons/icon-128x128.png' rel='icon' type='image/png' sizes='128x128' />
            <link rel='apple-touch-icon' href='/images/icons/icon-512x512.png' />
            {   GoogleAnalyticsID &&
            <React.Fragment>
                <script rel="preconnect" async src={`https://www.googletagmanager.com/gtag/js?id=${GoogleAnalyticsID}`} />
                <script dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GoogleAnalyticsID}');`
                }} />
            </React.Fragment>}
        </Head>
        <div className="app">
            {children}
        </div>
    </React.Fragment>
};

export default Base;