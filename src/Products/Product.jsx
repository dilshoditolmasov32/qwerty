import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";
import savatcha from "../images/savatcha.svg";
import baholash from "../images/baholash.svg";

const API_URL = "https://dummyjson.com/products";

const Product = () => {
  const productFilter = [
    "All",
    "Milks & Dairies",
    "Coffes & Teas",
    "Pet Foods",
    "Meats",
    "Vegetables",
    "Fruits",
  ];

  let filterData = productFilter?.map((value, ind) => (
    <div className="link" key={ind}>
      {value}
    </div>
  ));

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((result) => setData(result.data.products))
      .catch((err) => setData(err));
  }, []);

  let cards = data?.slice(0, 10).map((element, index) => (
    <div className="product" key={element.id}>
      <div className="product-img">
        <img
          src={element.images[0]}
          alt={element.title}
          className="card-image"
        />
      </div>
      <h4 className="product-name">{element.title}</h4>
      <div className="product-desc">{element.description}</div>
      <div className="product-rating">
        <img src={baholash} alt="yulduzcha" /> {element.rating}
      </div>
      <div className="product-category">{element.category}</div>
      <div className="product-more-div">
        <div className="product-price">${element.price}</div>
        <div className="product-count">{element.stock} ta</div>
        <button className="product-btn">
          <img src={savatcha} alt="savatcha" className="btn-savatcha" /> Add
        </button>
      </div>
      <div className="product-item">New</div>
    </div>
  ));

  return (
    <div className="products-section">
      <div className="container">
        <div className="product__title__links">
          <h1 className="product-title">Popular Products</h1>
          <div className="products-filters">{filterData}</div>
        </div>
        <div className="products"> {cards} </div>
      </div>
    </div>
  );
};

export default Product;
