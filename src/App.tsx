import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages";

const App = () => {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
    </Routes>
  );
};

export default App;
