import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState({ id: "", name: "", image: "" });
  const [notExists, setNotExists] = useState(false);

  useEffect(() => {
    const product = products.find((product) => product.id === productId);
    if (product) {
      setNotExists(false);
      setProduct(product);
    } else {
      setNotExists(true);
    }
  }, [productId]);

  return (
    <section className="section product">
      {notExists ? (
        <h1>No Product found</h1>
      ) : (
        <>
          <img src={product.image} alt={product.name} />
          <h5>{product.name}</h5>
        </>
      )}
      <Link to="/products" className="btn">
        view all products
      </Link>
    </section>
  );
};

export default SingleProduct;
