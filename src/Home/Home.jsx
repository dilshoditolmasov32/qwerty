import React from "react";
import "./Home.css";
import homeImage from "../images/home-img-remove.png";
import img1 from "../images/banner-icon1.svg";
import img2 from "../images/banner-icon2.svg";
import img3 from "../images/banner-icon3.svg";
import img4 from "../images/banner-icon4.svg";
import img5 from "../images/banner-icon5.svg";

const Home = () => {
  const smallBannnerData = [
    {
      id: 1,
      image: img1,
      title: "Best prices & offers",
      text: "Best prices & offers",
    },
    {
      id: 2,
      image: img2,
      title: "Free delivery",
      text: "24/7 amazing services",
    },
    {
      id: 3,
      image: img3,
      title: "Great daily deal",
      text: "When you sign up",
    },

    {
      id: 4,
      image: img4,
      title: "Wide assortment",
      text: "Mega Discounts",
    },
    {
      id: 5,
      image: img5,
      title: "Easy returns",
      text: "Within 30 days",
    },
  ];

  const arrayData = smallBannnerData?.map((val) => (
    <div className="switcher__item" key={val.id}>
      <img src={val.image} alt="" className="item-img" />
      <div>
        <div className="title">{val.title}</div>
        <div className="text">{val.text}</div>
      </div>
    </div>
  ));
  return (
    <div className="home-section">
      <div className="container">
        <div className="home-page">
          <div className="home-page-text">
            <h2>Stay home & get your daily needs from our shop</h2>
            <p className="paragraph-text">
              Start You'r Daily Shopping with Nest Mart
            </p>
            <form className="email-form">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your emaill address"
              />
              <button type="submit" className="home-btn">
                Subscribe
              </button>
            </form>
          </div>
          <div className="home-img">
            <img src={homeImage} alt="home-img" />
          </div>
        </div>
        <div className="switcher__items">{arrayData}</div>
      </div>
    </div>
  );
};

export default Home;
