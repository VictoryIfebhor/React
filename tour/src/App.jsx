import React, { useState, useEffect } from "react";

import Title from "./components/Title";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const removeTour = async (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    getTours();
  }, []);

  return (
    <main>
      {loading && <Loading />}
      {loading || (
        <>
          <Title isEmpty={tours.length === 0} getTours={getTours} />
          <Tours tours={tours} removeTour={removeTour} />
        </>
      )}
      <></>
    </main>
  );
};

export default App;
