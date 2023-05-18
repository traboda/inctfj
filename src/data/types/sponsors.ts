
export type Sponsor = {
  name: string,
  path: string,
  link: string,
  desg: string
};

export type SponsorshipTier = {
  label: string,
  desc: string,
  type: string,
  sponsors: Sponsor[]
};

export type SponsorshipConfig = SponsorshipTier[];