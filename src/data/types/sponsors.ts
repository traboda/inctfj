
export type Sponsor = {
    name: string,
    logo: string,
    url: string,
    description: string
};

export type SponsorshipTier = {
    label: string,
    message: string,
    sponsors: Sponsor[]
}

export type SponsorshipConfig = {
    tiers: SponsorshipTier[],
    pastSponsors: SponsorshipTier[],
}