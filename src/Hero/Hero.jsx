import React from "react";
import "./Hero.css";
import close from "../images/Icon.svg";

const Hero = () => {
  const heroData = ["Shopping", "Recips", "Kitchen", "News", "Food"];

  const listItem = heroData?.map((value, inx) => (
    <div div className="list" key={inx}>
      <img src={close} alt="close" id="cancel" />
      {value}
    </div>
  ));
  return (
    <div className="hero-page">
      <div className="container">
        <div className="hero-section">
          <div className="hero-section-text">
            <h6>
              <span>100%</span>Organic Vegetables
            </h6>
            <h2>The best way to stuff your wallet.</h2>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              reiciendis beatae consequuntur.
            </p>
            <form className="email-form">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your emaill address"
              />
              <button type="text" id="home-btn">
                Subscribe
              </button>
            </form>
          </div>

          <div className="lists__link">{listItem}</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
