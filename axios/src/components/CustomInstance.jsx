import { useEffect } from "react";
import axios from "axios";
import authFetch from "../axios/custom";

const url = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await authFetch("/react-store-products");
      const resp2 = await axios(url);
      console.log(resp1, resp2);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">Custom Instance</h2>;
};

export default CustomInstance;
