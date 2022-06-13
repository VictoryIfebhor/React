import React, { useState, useEffect } from "react";

const Warning = ({ warning }) => {
  const [cssClass, setCssClass] = useState("warning");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCssClass("disappear");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <p className={cssClass}>{warning}</p>;
};

export default Warning;
