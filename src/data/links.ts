import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faDev } from "@fortawesome/free-brands-svg-icons/faDev";
import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faKeybase } from "@fortawesome/free-brands-svg-icons/faKeybase";
import { faKoFi } from "@fortawesome/free-brands-svg-icons/faKoFi";
import { faReddit } from "@fortawesome/free-brands-svg-icons/faReddit";
import { faSpotify } from "@fortawesome/free-brands-svg-icons/faSpotify";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons/faSquareXTwitter";
import { faTwitch } from "@fortawesome/free-brands-svg-icons/faTwitch";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faFlag } from "@fortawesome/free-solid-svg-icons/faFlag";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";

export interface Link {
  slug: string;
  slugAliases?: string[];
  name: string;
  icon: IconDefinition;
  url: string;
  onHomepage?: boolean;
}

export const links: Link[] = [
  {
    slug: "buymeacoffee",
    name: "Buy Me a Coffee",
    icon: faMugSaucer,
    url: "https://buymeacoffee.com/kkrypt0nn",
  },
  {
    slug: "ctf",
    slugAliases: ["ctftime"],
    name: "CTFtime",
    icon: faFlag,
    url: "https://ctftime.org/user/131496",
  },
  {
    slug: "dev",
    slugAliases: ["dev.to"],
    name: "DEV.to",
    icon: faDev,
    url: "https://dev.to/kkrypt0nn",
  },
  {
    slug: "discord",
    name: "Discord",
    icon: faDiscord,
    url: "https://discord.gg/xj6y5ZaTMr",
    onHomepage: true,
  },
  {
    slug: "github",
    slugAliases: ["gh", "git"],
    name: "GitHub",
    icon: faGithub,
    url: "https://github.com/kkrypt0nn",
    onHomepage: true,
  },
  {
    slug: "keybase",
    name: "Keybase",
    icon: faKeybase,
    url: "https://keybase.io/kkrypt0nn",
  },
  {
    slug: "kofi",
    slugAliases: ["ko-fi"],
    name: "Ko-fi",
    icon: faKoFi,
    url: "https://ko-fi.com/kkrypt0nn",
    onHomepage: true,
  },
  {
    slug: "mail",
    name: "Mail",
    icon: faEnvelope,
    url: "mailto:root@krypton.ninja",
  },
  {
    slug: "reddit",
    name: "Reddit",
    icon: faReddit,
    url: "https://reddit.com/u/kkrypt0nn",
  },
  {
    slug: "spotify",
    name: "Spotify",
    icon: faSpotify,
    url: "https://open.spotify.com/user/mk94rw4xl1tatthk1kxgm9jxg",
  },
  {
    slug: "twitch",
    name: "Twitch",
    icon: faTwitch,
    url: "https://twitch.tv/kkrypt0nn",
  },
  {
    slug: "x",
    slugAliases: ["twitter"],
    name: "X (fka Twitter)",
    icon: faSquareXTwitter,
    url: "https://x.com/kkrypt0nn",
    onHomepage: true,
  },
  {
    slug: "youtube",
    slugAliases: ["ytb"],
    name: "YouTube",
    icon: faYoutube,
    url: "https://youtube.com/@kkrypt0nn",
    onHomepage: true,
  },
];
