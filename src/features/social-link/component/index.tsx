import { ReactNode } from "react";

import { ISocialLinkProps } from "../interface";

const SocialLink = ({
  link,
  Icon,
  content,
  copyItem,
}: ISocialLinkProps): ReactNode => {
  const handleCopyItem = async () => {
    try {
      if (copyItem) await window.navigator.clipboard.writeText(copyItem);
    } catch (error) {
      console.log("error message", error);
    }
  };

  return (
    <a
      className={`${copyItem ? "cursor-pointer" : ""} flex items-center gap-3 p-4 rounded-lg bg-background-light/50 dark:bg-background-dark/50 border border-border-light dark:border-border-dark hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors`}
      href={link}
      onClick={handleCopyItem}
    >
      <Icon size="24" />
      <span className="font-medium text-sm text-subtle-light dark:text-subtle-dark">
        {content}
      </span>
    </a>
  );
};

export default SocialLink;
