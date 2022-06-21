import axios from "axios";
import { useEffect } from "react";
import "../axios/global";

const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
  const fetchData = async () => {
    const response1 = await axios(productsUrl);
    const response2 = await axios(randomUserUrl);
    console.log(response1.data, response2.data);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <section className="text-center">
      <h2>Global Instance</h2>
    </section>
  );
};

export default GlobalInstance;
