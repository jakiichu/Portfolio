import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Header from "@/app/layout/header/component";

const WrapperLayout = (): ReactNode => {
  return (
    <main className="mx-auto px-4 py-8 md:py-16 bg-white dark:bg-gray-800 transition-background">
      <Header />
      <Outlet />
    </main>
  );
};

export default WrapperLayout;
