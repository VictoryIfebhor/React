import React from "react";

import image from "../favicon.svg";

const Hero = () => {
  return (
    <section className="top-section">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <article>
        <h1>Online Experiences</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          enim architecto tempora omnis voluptas odit natus asperiores hic esse.
          Excepturi sed aspernatur corporis perferendis minus ea totam quasi nam
          fugit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Doloribus consequuntur itaque exercitationem hic et quos facere
          asperiores dolorem aperiam suscipit natus sunt ab soluta, architecto
          minus nostrum labore, magni earum.
        </p>
      </article>
    </section>
  );
};

export default Hero;
