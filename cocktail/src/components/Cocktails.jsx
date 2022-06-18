import React from "react";
import { useGlobalCOntext } from "../util/context";
import Loading from "./Loading";
import SingleCocktail from "./SingleCocktail";

const Cocktails = () => {
  const { loading, error, cocktails } = useGlobalCOntext();

  const errorElement = (
    <h2 className="section-title" style={{ color: "red" }}>
      could not connect to server
    </h2>
  );

  const noResult = <h2 className="section-title">no cocktails found</h2>;

  const result = (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((drink) => {
          return <SingleCocktail key={drink.idDrink} {...drink} />;
        })}
      </div>
    </section>
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        errorElement
      ) : cocktails.length < 1 ? (
        noResult
      ) : (
        result
      )}
    </>
  );
};

export default Cocktails;
