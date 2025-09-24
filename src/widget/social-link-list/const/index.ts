import {
  DiscordLogoIcon,
  GithubLogoIcon,
  MailboxIcon,
  TelegramLogoIcon,
} from "@phosphor-icons/react";

import { ISocialLinkProps } from "../ui/item/interface";

type ISocialLinkArray = Array<ISocialLinkProps>;

const socialLinkList: ISocialLinkArray = [
  {
    link: "https://github.com/jakiichu",
    content: "Github",
    Icon: GithubLogoIcon,
  },
  {
    link: "https://t.me/deku0000",
    content: "Telegram",
    Icon: TelegramLogoIcon,
  },
  {
    link: "mailto:zellda444@gmail.com",
    content: "Mail",
    Icon: MailboxIcon,
  },
  {
    content: "Discord",
    Icon: DiscordLogoIcon,
    copyItem: "@deku0000",
  },
];

export { socialLinkList };
