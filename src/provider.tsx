import { useHref, useNavigate } from "react-router-dom";
import { HeroUIProvider } from "@heroui/system";
import { PropsWithChildren } from "react";
import { ToastProvider } from "@heroui/toast";

const Provider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

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
