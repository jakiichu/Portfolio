import { ReactNode, useCallback } from "react";
import { Switch } from "@heroui/switch";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useForm, useWatch } from "react-hook-form";

interface IThemeForm {
  theme: boolean;
}

const Header = (): ReactNode => {
  const form = useForm<IThemeForm>();

  const theme = useWatch({ name: "theme", control: form.control });

  const IconComponent = theme ? MoonIcon : SunIcon;

  const documentElement = document.documentElement;
  const handleToggle = useCallback(() => {
    documentElement?.classList.toggle("dark");
  }, [documentElement]);

  return (
    <header className="absolute left-0 right-0">
      <div className="max-w-4xl mx-auto flex justify-end px-4">
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
