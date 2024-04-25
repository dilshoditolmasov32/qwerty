import React from "react";
import "./Card.css";

import card1 from "../images/banner-icon1.svg";
import card2 from "../images/card2.svg";
import card3 from "../images/card3.svg";

const Card = () => {
  const data = [
    {
      id: 1,
      title: "Everyday Fresh & Clean with Our Products",
      btnText: "Shop Now",
      bg: card1,
    },
    {
      id: 2,
      title: "Make your Breakfast Healthy and Easy",
      btnText: "Shop Now",
      bg: card2,
    },
    {
      id: 3,
      title: "The best Organic Products Online",
      btnText: "Shop Now",
      bg: card3,
    },
  ];

  const ListData = data?.map((value, index) => (
    <div className="card" key={value.id}>
      <h4 className="title">{value.title}</h4>
      <button className="card-btn">{value.btnText}</button>
    </div>
  ));
  return (
    <div className="container">
      <div className="cards">{ListData}</div>
    </div>
  );
};

export default Card;
