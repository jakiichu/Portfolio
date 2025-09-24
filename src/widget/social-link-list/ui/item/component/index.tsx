import { ReactNode } from "react";
import { addToast } from "@heroui/toast";
import { motion } from "framer-motion";

import { ISocialLinkProps } from "../interface";

const SocialLink = ({
  link,
  Icon,
  content,
  copyItem,
}: ISocialLinkProps): ReactNode => {
  const handleCopyItem = async () => {
    try {
      if (copyItem) {
        await window.navigator.clipboard.writeText(copyItem);
        addToast({
          title: "Copied!",
          promise: new Promise((resolve) => setTimeout(resolve, 1000)),
          variant: "flat",
          color: "success",
        });
      }
    } catch {
      addToast({
        title: "Error!",
        variant: "flat",
        color: "danger",
      });
    }
  };

  return (
    <motion.a
      className={`${copyItem ? "cursor-pointer" : ""} flex items-center gap-3 p-4 rounded-lg bg-background-light/50 dark:bg-background-dark/50 border border-border-light dark:border-border-dark hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors`}
      href={link}
      target={"_blank"}
      transition={{ duration: 0.15 }}
      variants={{
        tap: { rotate: 5 },
      }}
      whileHover={{ scale: 1.05 }}
      whileTap="tap"
      onClick={handleCopyItem}
    >
      <motion.div
        transition={{ duration: 0.15 }}
        variants={{
          tap: { y: -4, rotate: -5 },
        }}
      >
        <Icon size="24" />
      </motion.div>

      <span className="font-medium text-sm text-subtle-light dark:text-subtle-dark">
        {content}
      </span>
    </motion.a>
  );
};

export default SocialLink;
