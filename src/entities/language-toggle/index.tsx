import { useTranslation } from "react-i18next";
import { ReactNode } from "react";
import { Button } from "@heroui/button";

import { ELanguage } from "@/shared/constant/enum";

interface ILanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher = ({
  className = "",
}: ILanguageSwitcherProps): ReactNode => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const handleLanguageChange = (value: string) => async () => {
    await i18n.changeLanguage(value);
  };

  return (
    <div className={className}>
      {Object.values(ELanguage).map((value) => (
        <Button
          key={value}
          className="p-0"
          hidden={currentLanguage === value}
          size="sm"
          variant="light"
          onClick={handleLanguageChange(value)}
        >
          {value}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
