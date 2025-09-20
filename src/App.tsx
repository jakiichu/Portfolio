import { Route, Routes } from "react-router-dom";

import MainPage from "@/pages/main";
import { ERouterPath } from "@/shared/constant/enum/router";
import ProjectItemPage from "@/pages/project/item/component";
import WrapperLayout from "@/app/layout/wrapper";

const App = () => {
  return (
    <Routes>
      <Route element={<WrapperLayout />}>
        <Route element={<MainPage />} path={ERouterPath.MAIN} />
        <Route element={<ProjectItemPage />} path={ERouterPath.ONE_PROJECT} />
      </Route>
    </Routes>
  );
};

export default App;
