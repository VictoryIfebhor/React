import React, { useState } from "react";
import data from "../../../data.json";
import Card from "./Card";

const CardsArray = () => {
  const [blogRecords, setBlogRecords] = useState(data);
  const [btnText, setBtnText] = useState("Hide Blogs");
  const [blogs, setBlogs] = useState(data);

  const getCards = () => {
    return blogs.map((blog) => {
      return <Card key={blog.id} {...blog} deleteBlog={deleteBlog} />;
    });
  };

  const toggle = () => {
    if (blogs.length !== 0) {
      setBlogs([]);
      setBtnText("Show Blogs");
    } else {
      setBlogs(blogRecords);
      setBtnText("Hide Blogs");
    }
  };

  const deleteBlog = function (id) {
    setBlogs((prevState) => {
      const newBlogs = prevState.filter((blog) => blog.id !== id);
      setBlogRecords(newBlogs);
      if (newBlogs.length === 0) {
        const button = document.querySelector(".toggle-btn");
        button.innerHTML = "No Content";
      }
      return newBlogs;
    });
  };

  return (
    <>
      <button className="toggle-btn" onClick={toggle}>
        {btnText}
      </button>
      {getCards()}
    </>
  );
};

export default CardsArray;
