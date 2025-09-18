import { ReactNode } from "react";

import { skillsList } from "../const";

import SkillsItem from "@/features/skills-item/component";

const SkillsList = (): ReactNode => {
  return (
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
      {skillsList.map(SkillsItem)}
    </div>
  );
};

export default SkillsList;
