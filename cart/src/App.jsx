import React from "react";

import MainContent from "./components/MainContent";
import Loading from "./components/Loading";
import { useGlobalContext } from "./context";

const App = () => {
  const { loading } = useGlobalContext();

  return <>{loading ? <Loading /> : <MainContent />}</>;
};

export default App;
