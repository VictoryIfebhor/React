import React from "react";
import { useFetch } from "./CustomHook";

const url = "https://course-api.com/javascript-store-products";

const CustomHooks = () => {
  const { loading, data, isError } = useFetch(url);
  return (
    <div>
      <h2>
        {loading ? (
          "loading ..."
        ) : isError ? (
          <>
            <h2 style={{ color: "red" }}>Failed to fetch data from server.</h2>
            <h6>check your internet connection</h6>
          </>
        ) : (
          <>
            {data.map(({ fields, id }) => {
              return <p key={id}>{fields.name}</p>;
            })}
          </>
        )}
      </h2>
    </div>
  );
};

export default CustomHooks;
