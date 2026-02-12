import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

const TextInformation = (): ReactNode => {
  const { t } = useTranslation();

  return (
    <div className="flex-1">
      <h1 className="text-4xl md:text-5xl font-black text-foreground-light dark:text-foreground-dark tracking-tighter">
        {t("typography.name")}
      </h1>
      <p className="mt-2 text-lg md:text-xl text-primary font-medium">
        {t("typography.specialist")}
      </p>
      <p className="mt-4 max-w-lg text-subtle-light dark:text-subtle-dark">
        {t("typography.description")}
      </p>
    </div>
  );
};

export default TextInformation;
