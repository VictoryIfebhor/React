import React from "react";

const SingleSubmenu = ({ links, page, cssClass }) => {
  return (
    <>
      <h4>{page}</h4>
      <div className={cssClass}>
        {links.map(({ url, icon, label }, index) => {
          return (
            <a key={index} href={url}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default SingleSubmenu;
