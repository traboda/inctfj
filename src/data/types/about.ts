// config for about page having a header, a description

export type about = {
  header: string,
  description?: (string | string[]),
};

export type aboutConfig = about[];