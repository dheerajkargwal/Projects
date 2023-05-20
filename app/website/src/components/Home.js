import React from "react";
import img from "../image/banner-1.jpg";
import Header from "./Header";
import "../Css/Home.css";
function Home() {
  return (
    <div className="home-container">
      <div className="home">
        <Header />
        <div className="bgimage">
          <img src={img} />
          <div className="image-text">
            <h1>Walk at path of innovation with incomeshala.</h1>
            <p>An ecosystem where you are a good student or a teacher with sharing your experience or knowledge to understand the digital marketing.</p>
            <button>Get Started Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
