import React from "react";

import { social } from "../data";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <ul className="social-icons">
      {social.map(({ id, icon, url }) => {
        return (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMedia;
