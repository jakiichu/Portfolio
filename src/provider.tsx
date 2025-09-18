import { useHref, useNavigate } from "react-router-dom";
import { HeroUIProvider } from "@heroui/system";
import { PropsWithChildren } from "react";

const Provider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      {children}
    </HeroUIProvider>
  );
};

export { Provider };
