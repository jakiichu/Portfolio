import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

const WrapperLayout = (): ReactNode => {
  return (
    <main className="mx-auto px-4 py-8 md:py-16">
      <Outlet />
    </main>
  );
};

export default WrapperLayout;
