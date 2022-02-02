export type Organizer = {
    name: string,
    role: string,
    avatar: string,
    designation?: (string|string[]),
    description?: string,
}

export type OrganizerTier = {
    label: string,
    type: ('profile'|'badge'),
    members: Organizer[],
}

export type OrganizerConfig = OrganizerTier[]