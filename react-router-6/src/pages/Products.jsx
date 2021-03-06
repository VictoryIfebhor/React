import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
  return (
    <section className="section">
      <h2>Products</h2>
      <div className="products">
        {products.map(({ id, name, image }) => {
          return (
            <article key={id}>
              <h5>{name}</h5>
              <Link to={`/products/${id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
