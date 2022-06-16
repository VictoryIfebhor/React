import React from "react";
import { useFetch } from "../otherHooks/customHooks/CustomHook";
import Product from "./Product";

const url = "https://course-api.com/react-prop-types-example";

const index = () => {
  const { data } = useFetch(url);
  return (
    <div>
      <h2>products</h2>
      <section className="products">
        {data.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default index;
