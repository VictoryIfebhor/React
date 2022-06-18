import React, { useRef, useEffect } from "react";
import { useGlobalCOntext } from "../util/context";

const SearchForm = () => {
  const { searchText, dispatch } = useGlobalCOntext();
  const searchInput = useRef(null);

  useEffect(() => {
    searchInput.current.focus();
  });

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchInput}
            onChange={(e) =>
              dispatch({
                type: "SET_SEARCH_TEXT",
                payload: { text: e.target.value },
              })
            }
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
