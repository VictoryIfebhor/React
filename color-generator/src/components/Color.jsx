import React, { useState, useEffect } from "react";

const Color = ({ weight, index, hex, type }) => {
  const [alert, setAlert] = useState(false);
  const color = `#${hex}`;
  const style = { backgroundColor: color };

  const isShade = type === "shade";

  useEffect(() => {
    const alert = setTimeout(() => {
      setAlert(false);
    }, 1000);

    return () => {
      clearTimeout(alert);
    };
  }, [alert]);

  return (
    <article
      className={`color ${isShade && "color-light"}`}
      style={style}
      onClick={() =>
        setAlert(() => {
          navigator.clipboard.writeText(color);
          setAlert(true);
        })
      }
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{color}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default Color;
