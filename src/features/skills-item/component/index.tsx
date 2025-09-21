import { ReactNode } from "react";
import { motion } from "framer-motion";

import { ISkillsItemProps } from "@/features/skills-item/interface";

const SkillsItem = ({ Icon, content }: ISkillsItemProps): ReactNode => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6 rounded-lg bg-background-light/50 dark:bg-background-dark/50 border border-border-light dark:border-border-dark"
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      whileHover={{ scale: 1.05, y: -4 }}
    >
      <motion.div
        transition={{ type: "spring", stiffness: 200 }}
        whileHover={{ rotate: -5 }}
      >
        <Icon size="24" />
      </motion.div>
      <h3 className="font-semibold text-foreground-light dark:text-foreground-dark mt-2 uppercase">
        {content}
      </h3>
    </motion.div>
  );
};

export default SkillsItem;
