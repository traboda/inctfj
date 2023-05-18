import React, { useContext } from 'react';

import ConfigContext from '../SiteView/context';

const SocialMediaLinks = () => {

  const { socialLinks } = useContext(ConfigContext);

  const links = socialLinks ? [
    {
      'href': socialLinks.email,
      'icon': 'fa fa-envelope',
    },
    {
      'href': socialLinks.instagram,
      'icon': 'fab fa-instagram',
    },
    {
      'href': socialLinks.twitter,
      'icon': 'fab fa-twitter',
    },
    {
      'href': socialLinks.facebook,
      'icon': 'fab fa-facebook',
    },
    {
      'href':  socialLinks.youtube,
      'icon': 'fab fa-youtube',
    },
    {
      'href': socialLinks.discord,
      'icon': 'fab fa-discord',
    },
  ] : [];

  return (
    <div className="flex items-center md:justify-end text-2xl lg:text-3xl xl:text-4xl justify-center md:mb-0 mb-2 p-2">
      {links.filter((l) => l.href?.length > 0).map((l) => (
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
  );

};

export default SocialMediaLinks;