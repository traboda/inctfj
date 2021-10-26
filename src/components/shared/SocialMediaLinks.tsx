import React from "react";

const SocialMediaLinks = () => {

    const links = [
        {
            "href": "mailto:inctf@am.amrita.edu",
            "icon": "fa fa-envelope"
        },
        {
            "href": "https://www.instagram.com/inctf.in/",
            "icon": "fab fa-instagram"
        },
        {
            "href": "https://twitter.com/InCTF",
            "icon": "fab fa-twitter"
        },
        {
            "href": "https://www.facebook.com/InCTF",
            "icon": "fab fa-facebook"
        },
        {
            "href": "https://www.youtube.com/InCTF",
            "icon": "fab fa-youtube"
        },
        {
            "href": "/discord",
            "icon": "fab fa-discord"
        }
    ];

    return (
        <div className="flex items-center md:justify-end text-2xl lg:text-3xl xl:text-4xl justify-center md:mb-0 mb-2 p-2">
            {links.map((l) => (
                <a
                    className="mx-2 opacity-75 hover:opacity-100"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={l.href}
                >
                    <i className={l.icon} />
                </a>
            ))}
        </div>
    )

};

export default SocialMediaLinks;