import React from "react";
// import {FaBeer} from 'react-icons/fa'
import { BsPersonFill } from "react-icons/bs";
// import { BsList } from "react-icons/bs";
import "../Css/Header.css";
import logo from "../image/logo.png";
function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="image">
          <img src={logo} />
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>contact Us</li>
            <div className="button">
              <button> <BsPersonFill/> Client Area</button>
            </div>
          </ul>
        </nav>
       
      </div>
    </div>
  );
}
export default Header;
