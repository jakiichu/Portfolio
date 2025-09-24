import { ReactNode } from "react";

import { skillsList } from "../const";
import { SkillsItem } from "../ui/item";

const SkillsList = (): ReactNode => {
  return (
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
      {skillsList.map((value, index) => (
        <SkillsItem key={index} {...value} />
      ))}
    </div>
  );
};

export default SkillsList;
