import React from "react";
import Image from "next/image";
import heroimg from "../../../public/circle hero img1.png";
import "../styles/Hero.css";
import 'animate.css'

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="heroContentContainer">
          <div className="heroText">
            <h2 className="heroTexth2 animate__animated animate__zoomInDown">
              Empowering EigenLayer with <br /> Data, Engagement, and Knowledge
            </h2>
            <p className="heroTextp">
              EigenInsight is a powerful analytics and engagement platform for
              the EigenLayer ecosystem, connecting AVSs, operators, and
              restakers.
            </p>
            <div className="starContainer">
              <div className="star1"></div>
              <div className="star2"></div>
              <div className="star3"></div>
              <div className="star4"></div>
            </div>
          </div>
          <div className="heroImgContainer">
            <Image
              src={heroimg}
              alt="heroimg"
              className="heroImg pulsingHeroImg"
            />
          </div>
        </div>

        <svg viewBox="0 0 120 10" className="svgContainer">
          <defs>
            <mask id="xyz">
              <circle cx="7" cy="6" r="20" fill="#fff" />
            </mask>

            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="2"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="
           1 0 0 0 0  
           0 1 0 0 0  
           0 0 1 0 0  
           0 0 0 13 -9"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
            <path
              id="wave"
              d="M 0,5 C 30,5 30,7.5 60,7.5 90,7.5 90,5 120,5 150,5 150,7.5 180,7.5 210,7.5 210,5 240,5 v 14 h -240 z"
            />
          </defs>

          <use id="wave3" className="wave" xlinkHref="#wave" x="0" y="-1"></use>
          <use id="wave2" className="wave" xlinkHref="#wave" x="0" y="0"></use>

          <g className="gooeff">
            <circle className="drop drop1" cx="20" cy="1" r="1.8" />
            <circle className="drop drop2" cx="25" cy="1.5" r="1.5" />
            <circle className="drop drop3" cx="16" cy="1.8" r="1.2" />
            <use id="wave1" className="wave" xlinkHref="#wave" x="0" y="0.5" />

            <path
              id="wave1"
              className="wave"
              d="M 0,5 C 30,5 30,7.5 60,7.5 90,7.5 90,5 120,5 150,5 150,7.5 180,7.5 210,7.5 210,5 240,5 v 14 h -240 z"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default Hero;
