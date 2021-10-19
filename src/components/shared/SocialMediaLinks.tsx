import React from "react";

const SocialMediaLinks = () => {

    const links = [
        {
            "href": "mailto:inctfj@am.amrita.edu",
            "icon": "fa fa-envelope"
        },
        {
            "href": "https://www.instagram.com/juniorinctf/",
            "icon": "fab fa-instagram"
        },
        {
            "href": "https://twitter.com/InCTFj",
            "icon": "fab fa-twitter"
        },
        {
            "href": "https://www.facebook.com/InCTFj",
            "icon": "fab fa-facebook"
        },
        {
            "href": "https://www.youtube.com/c/InCTFj",
            "icon": "fab fa-youtube"
        },
        {
            "href": "/discord",
            "icon": "fab fa-discord"
        }
    ];

    return (
        <div className="flex items-center md:justify-end text-2xl justify-center md:mb-0 mb-2 p-2">
            {links.map((l) => (
                <a
                    className="mx-2 opacity-80 hover:opacity-100 hover:text-primary"
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