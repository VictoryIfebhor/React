import React, { useState, useEffect } from "react";

const Color = ({ weight, hex, type }) => {
  const [alert, setAlert] = useState(false);
  const color = `#${hex}`;
  const style = { backgroundColor: color };

  // I personally found that hex value of dark colors mostly start with a or a number
  const useLightText = hex.substring(0, 1) <= "a";

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
      className={`color ${useLightText && "color-light"}`}
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
