import React from "react";
import Cocktails from "../components/Cocktails";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <Cocktails />
    </main>
  );
};

export default Home;
