import {ConfigContextType} from "../types/context";

export default <ConfigContextType>{
    id: "inctf",
    meta: {
        title: "InCTF 2021",
        tagLine: "India’s First Ethical Hacking contest.",
        description: "Capture the Flag contest. India’s first hacking competition. Play CTFs, win prizes and get placed with our sponsors."
    },
    analytics: {
        gTag: "UA-120910433-1",
    },
    assets: {
        logo: {
            light: "logo_light.png",
            dark: "logo_dark.png"
        }
    },
    sponsors: [
        {
            name: 'Salesforce',
            logo: '/assets/sponsors/salesforce.png',
        },
        {
            name: 'Zoho',
            logo: '/assets/sponsors/zoho.png'
        },
        {
            name: 'VMWare',
            logo: '/assets/sponsors/vmware.png'
        }
    ],
    socialLinks: {
        facebook: "https://www.facebook.com/InCTF",
        twitter: "https://twitter.com/InCTF",
        instagram: "https://www.instagram.com/inctf.in",
        youtube: "https://www.youtube.com/c/InCTF",
        discord: "/discord",
        email: "mailto:inctf@am.amrita.edu",
    }
};