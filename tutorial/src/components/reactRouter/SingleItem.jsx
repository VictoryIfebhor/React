import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../../data.json";

const SingleItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState({ title: "", description: "" });

  useEffect(() => {
    setItem(data.find((item) => item.id === parseInt(id)));
  }, []);

  return (
    <div>
      <h1>{item.title}</h1>
      <Link to="/items" className="btn">
        Back to items page
      </Link>
      <div style={{ padding: "24px", maxWidth: "1000px", margin: "auto" }}>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default SingleItem;
