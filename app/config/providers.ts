import { PROVIDER_ID, PLATFORM_ID } from "@gitcoin/passport-types";

export type ProviderSpec = {
  title: string;
  name: PROVIDER_ID;
  icon?: string;
  description?: string;
};

export type PlatformGroupSpec = {
  providers: ProviderSpec[];
  platformGroup: string;
};

// Platform -> Provider[]
export type Providers = {
  [platform in PLATFORM_ID]: PlatformGroupSpec[];
};

export const STAMP_PROVIDERS: Readonly<Providers> = {
  Google: [{ platformGroup: "Account Name", providers: [{ title: "Google", name: "Google" }] }],
  Ens: [
    {
      platformGroup: "Account Name",
      providers: [{ title: "Encrypted", name: "Ens" }],
    },
  ],
  Poh: [
    {
      platformGroup: "Account Name",
      providers: [{ title: "Encrypted", name: "Poh" }],
    },
  ],
  Twitter: [
    {
      platformGroup: "Account Name",
      providers: [{ title: "Encrypted", name: "Twitter" }],
    },
    {
      platformGroup: "Tweet/Posts",
      providers: [{ title: "More than 10", name: "TwitterTweetGT10" }],
    },
    {
      platformGroup: "Followers",
      providers: [
        { title: "More than 100", name: "TwitterFollowerGT100" },
        {
          title: "More than 500",
          name: "TwitterFollowerGT500",
        },
        {
          title: "More than 1000",
          name: "TwitterFollowerGTE1000",
        },
        {
          title: "More than 5000",
          name: "TwitterFollowerGT5000",
        },
      ],
    },
  ],
  POAP: [
    {
      platformGroup: "Account Name",
      providers: [{ title: "Encrypted", name: "POAP" }],
    },
  ],
  Facebook: [
    {
      platformGroup: "Account Name",
      providers: [{ title: "Encrypted", name: "Facebook" }],
    },
    {
      platformGroup: "Friends",
      providers: [{ title: "Greater than 100", name: "FacebookFriends" }],
    },
    {
      platformGroup: "Profile",
      providers: [{ title: "Profile Picture attached", name: "FacebookProfilePicture" }],
    },
  ],
  Brightid: [
    {
      platformGroup: "Account Name",
      providers: [{ title: "Encrypted", name: "Brightid" }],
    },
  ],
  Github: [
    {
      platformGroup: "Account Name",
      providers: [{ title: "Encrypted", name: "Github" }],
    },
    {
      platformGroup: "Repositories",
      providers: [
        {
          title: "Five or more GitHub repos",
          name: "FiveOrMoreGithubRepos",
        },
        {
          title: "At least 1 GitHub repo forked by another user",
          name: "ForkedGithubRepoProvider",
        },
        {
          title: "At least 1 GitHub repo starred by another user",
          name: "StarredGithubRepoProvider",
        },
      ],
    },
    {
      platformGroup: "Followers",
      providers: [
        {
          title: "Ten or more GitHub followers",
          name: "TenOrMoreGithubFollowers",
        },
        {
          title: "Fifty or more GitHub followers",
          name: "FiftyOrMoreGithubFollowers",
        },
      ],
    },
  ],
  Linkedin: [
    {
      platformGroup: "Account Name",
      providers: [{ title: "Encrypted", name: "Linkedin" }],
    },
  ],
  Discord: [
    {
      platformGroup: "Account Name",
      providers: [{ title: "Encrypted", name: "Discord" }],
    },
  ],
  Signer: [
    {
      platformGroup: "Account Name",
      providers: [{ title: "Encrypted", name: "Signer" }],
    },
  ],
  GitPOAP: [
    {
      platformGroup: "Account Name",
      providers: [{ title: "Encrypted", name: "GitPOAP" }],
    },
  ],
};
