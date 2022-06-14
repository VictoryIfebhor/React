import React from "react";
import { useFetch } from "./CustomHook";

const url = "https://course-api.com/javascript-store-products";

const CustomHooks = () => {
  const { loading, data } = useFetch(url);
  console.log(data);
  return (
    <div>
      <h2>{loading ? "loading ..." : "data"}</h2>
    </div>
  );
};

export default CustomHooks;
