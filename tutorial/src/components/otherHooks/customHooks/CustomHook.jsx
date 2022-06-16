import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { loading, data, isError };
};
