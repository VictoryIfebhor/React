import React from "react";

import phone from "../images/phone.svg";
import { useGlobalContext } from "../util/context";

const Hero = () => {
  const { state, dispatch } = useGlobalContext();
  return (
    <section
      className="hero"
      onMouseOver={() => dispatch({ type: "CLOSE_SUBMENU" })}
    >
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes-from startups to Fortune 500s-use
            Stripe's software and APIs to accept payments, send payouts, and
            manage their business online
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phone} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
