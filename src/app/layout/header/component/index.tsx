import { ReactNode, useCallback } from "react";
import { Switch } from "@heroui/switch";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useForm, useWatch } from "react-hook-form";

import { LocalStorage } from "@/shared/service/local-storage/core";
import { ELocalStorage } from "@/shared/service/local-storage/enum";
import LanguageSwitcher from "@/entities/language-toggle";

interface IThemeForm {
  theme: boolean;
}

const Header = (): ReactNode => {
  const localStorage = new LocalStorage();

  const form = useForm<IThemeForm>({
    defaultValues: {
      theme: localStorage.get(ELocalStorage.theme) === "dark",
    },
  });

  const theme = useWatch({ name: "theme", control: form.control });

  const IconComponent = theme ? MoonIcon : SunIcon;

  const documentElement = document.documentElement;
  const handleToggle = useCallback(() => {
    documentElement?.classList.toggle("dark");
    localStorage.set(
      ELocalStorage.theme,
      documentElement.classList.contains("dark") ? "dark" : "light",
    );
  }, [documentElement]);

  return (
    <header className="absolute left-0 right-0">
      <div className="max-w-4xl mx-auto flex md:justify-end justify-between px-4 gap-2">
        <LanguageSwitcher />
        <Switch
          {...form.register("theme", { onChange: handleToggle })}
          className="z-0"
        >
          <IconComponent className="size-6" />
        </Switch>
      </div>
    </header>
  );
};

export default Header;
