import { ReactNode } from "react";

import { ISkillsItemProps } from "@/features/skills-item/interface";

const SkillsItem = ({ Icon, content }: ISkillsItemProps): ReactNode => {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-background-light/50 dark:bg-background-dark/50 border border-border-light dark:border-border-dark">
      <Icon size="24" />
      <h3 className="font-semibold text-foreground-light dark:text-foreground-dark">
        {content}
      </h3>
    </div>
  );
};

export default SkillsItem;
