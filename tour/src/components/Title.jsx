import React from "react";

const Title = ({ isEmpty, getTours }) => {
  return (
    <div className="title">
      <h2>{isEmpty ? "No tours left" : "Our tours"}</h2>
      <div className="underline"></div>
      {isEmpty && (
        <button className="btn" onClick={getTours}>
          Refresh
        </button>
      )}
    </div>
  );
};

export default Title;
