export type ConfigContextType = {
    id: string,
    meta: {
        title: string,
        tagLine: string,
        description: string,
    },
    theme: {
        primary: string,
    },
    assets: {
        logo: {
            light: string,
            dark: string
        }
    },
    analytics: {
        gTag: string
    },
    sponsors: {
        name: string,
        logo: string,
        url: string
    }[],
    socialLinks?: {
        facebook?: string,
        twitter?: string,
        instagram?: string,
        youtube?: string,
        discord?: string,
        email?: string
    }
};