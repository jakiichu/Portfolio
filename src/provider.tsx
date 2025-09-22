import { useHref, useNavigate } from "react-router-dom";
import { HeroUIProvider } from "@heroui/system";
import { PropsWithChildren, useEffect } from "react";
import { ToastProvider } from "@heroui/toast";

import { LocalStorage } from "@/shared/service/local-storage/core";
import { ELocalStorage } from "@/shared/service/local-storage/enum";

const Provider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const localStorage = new LocalStorage();

  useEffect(() => {
    if (localStorage.get(ELocalStorage.theme) === "dark")
      document.documentElement?.classList.add("dark");
  }, []);

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <ToastProvider
        maxVisibleToasts={1}
        placement="top-right"
        toastProps={{ timeout: 3000 }}
      />
      {children}
    </HeroUIProvider>
  );
};

export { Provider };
