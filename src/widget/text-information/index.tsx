import { ReactNode } from "react";

import { typography } from "@/entities/typography";

const TextInformation = (): ReactNode => {
  return (
    <div className="flex-1">
      <h1 className="text-4xl md:text-5xl font-black text-foreground-light dark:text-foreground-dark tracking-tighter">
        {typography.name}
      </h1>
      <p className="mt-2 text-lg md:text-xl text-primary font-medium">
        {typography.specialist}
      </p>
      <p className="mt-4 max-w-lg text-subtle-light dark:text-subtle-dark">
        {typography.description}
      </p>
    </div>
  );
};

export default TextInformation;
