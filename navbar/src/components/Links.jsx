import React, { useEffect, useRef } from "react";

import { links } from "../data";

const Links = ({ showLinks }) => {
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);

  useEffect(() => {
    const { height } = linksRef.current.getBoundingClientRect();
    const value = `${height + 10}px`;
    if (showLinks) {
      linksContainerRef.current.style.height = value;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  });

  return (
    <div className="links-container" ref={linksContainerRef}>
      <ul className="links" ref={linksRef}>
        {links.map(({ id, url, text }) => {
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Links;
