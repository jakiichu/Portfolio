import {
  AtomIcon,
  FileTsIcon,
  FileVueIcon,
  HexagonIcon,
} from "@phosphor-icons/react";

import { ISkillsItemProps } from "../ui/item/interface";

type ISkillsList = Array<ISkillsItemProps>;

const skillsList: ISkillsList = [
  {
    Icon: HexagonIcon,
    content: "Node.js",
  },
  {
    Icon: FileTsIcon,
    content: "TypeScript",
  },
  {
    Icon: AtomIcon,
    content: "React",
  },
  {
    Icon: FileVueIcon,
    content: "Vue",
  },
];

export { skillsList };
