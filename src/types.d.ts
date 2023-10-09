export type ColleagueRaw = {
  name: string;
  email: string;
  phoneNumber: string | null;
  office: string | null;
  manager: string | null;
  orgUnit: string | null;
  mainText: string | null;
  gitHub: string | null;
  twitter: string | null;
  stackOverflow: string | null;
  linkedIn: string | null;
  imagePortraitUrl: string | null;
  imageWallOfLeetUrl: string | null | undefined;
  highlighted: boolean;
  published: boolean;
  primaryRole: string | null;
  secondaryRole: string | null;
  area: string | null;
};

export type Colleague = {
  name: string;
  imageUrl: string;
  office: string | null;
};
