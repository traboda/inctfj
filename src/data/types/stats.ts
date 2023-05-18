
export type ParticipantProfile = {
  rank?: number,
  name: string,
  username: string,
  avatar?: string,
  institution: string,
  state: string,
  points?: number
};

export type Champion = {
  title?: string,
} & ParticipantProfile;

export type AnnualResult = {
  champions: Champion[],
  top10: ParticipantProfile[],
  topWomen?: ParticipantProfile[],
  finalists: ParticipantProfile[]
};

export type EditionStats = {
  year: number,
  results: AnnualResult,
};

export type StatsType = {
  editions: EditionStats[]
};
