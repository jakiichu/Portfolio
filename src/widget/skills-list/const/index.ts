import {
  AtomIcon,
  FileTsIcon,
  HexagonIcon,
  IslandIcon,
} from "@phosphor-icons/react";

import { ISkillsItemProps } from "../ui/item/interface";

type ISkillsList = Array<ISkillsItemProps>;

const skillsList: ISkillsList = [
  {
    Icon: HexagonIcon,
    content: "Node",
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
    Icon: IslandIcon,
    content: "Tanstack",
  },
];

export { skillsList };
