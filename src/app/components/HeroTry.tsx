import React from "react";
import Image from "next/image";
import heroimg from "../../../public/hi3.jpg";
import "../styles/HeroTry.css";

const HeroTry = () => {
  return (
    <>
      <div className="hero">
        <div className="diagonal-hero-bg">
          <div className="stars">
            <div className="small"></div>
            <div className="medium"></div>
            <div className="big"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroTry;
