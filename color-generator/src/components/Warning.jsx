import React, { useState, useEffect } from "react";

const Warning = () => {
  const [cssClass, setCssClass] = useState("warning");

  useEffect(() => {
    const warning = setTimeout(() => {
      setCssClass("disappear");
    }, 2000);

    return () => {
      clearTimeout(warning);
    };
  }, []);

  return <p className={cssClass}>Invalid color</p>;
};

export default Warning;
