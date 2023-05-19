import React, { useContext } from 'react';

import ConfigContext from '../SiteView/context';

const SocialMediaLinks = () => {

  const { socialLinks } = useContext(ConfigContext);

  const links = [
    {
      'href': socialLinks.email,
      'icon': 'email',
    },
    {
      'href': socialLinks.instagram,
      'icon': 'instagram',
    },
    {
      'href': socialLinks.twitter,
      'icon': 'twitter',
    },
    {
      'href': socialLinks.facebook,
      'icon': 'facebook',
    },
    {
      'href':  socialLinks.youtube,
      'icon': 'youtube',
    },
    {
      'href': socialLinks.discord,
      'icon': 'discord',
    },
  ];

  return (
    <div className="flex items-center md:justify-end  justify-center md:mb-0 mb-2 p-2">
      {links.filter((l) => l.href?.length > 0).map((l, i) => (
        <a
          key={i}
          className="mx-2 opacity-75 hover:opacity-100"
          target="_blank"
          rel="noopener noreferrer"
          href={l.href}
        >
          {l.icon}
        </a>
      ))}
    </div>
  );

};

export default SocialMediaLinks;