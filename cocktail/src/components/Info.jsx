import React from "react";

const Info = ({ label, value }) => {
  return (
    <p>
      <span className="drink-data">{label} :</span>
      {value}
    </p>
  );
};

export default Info;
