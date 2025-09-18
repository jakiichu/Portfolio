import {
  AtomIcon,
  FileJsIcon,
  FileTsIcon,
  IslandIcon,
} from "@phosphor-icons/react";

import { ISkillsItemProps } from "@/features/skills-item/interface";

type ISkillsList = Array<ISkillsItemProps>;

const skillsList: ISkillsList = [
  {
    Icon: FileJsIcon,
    content: "JavaScript",
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
