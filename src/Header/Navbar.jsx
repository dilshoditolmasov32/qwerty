import React from "react";
import "./Header.css";
import menu from "../images/menu.svg";
import phone from "../images/nav-icon1-phone.svg";
import logo from "../images/nav-icon1-phone.svg";

const Navbar = () => {
  const Navbar = ["Home", "Category", "Products", "Pages", "Blog", "Elements"];
  const navbarLink = Navbar?.map((item, inx) => (
    <select name="select" id="select" key={inx}>
      <option value={item}>{item}</option>
    </select>
  ));
  return (
    <div className="navbar-page">
      <div className="container">
        <div className="navbar-section">
          <div className="menu">
            <button>
              <img src={menu} alt="menu" />
            </button>
          </div>
          <div className="navbar-links">{navbarLink}</div>
          <div className="navbar-items">
            <img src={phone} alt="phone-number" />
            +123 ( 456 ) ( 7890 )
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
