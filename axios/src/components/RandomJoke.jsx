import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://icanhazdadjoke.com/";

const RandomJoke = () => {
  const [joke, setJoke] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios(url, {
        headers: { Accept: "application/json" },
      });
      setJoke(data.joke);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="section text-center">
      <button
        className="btn"
        onClick={fetchData}
        title="click to generate a random joke"
      >
        random joke
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  );
};

export default RandomJoke;
