import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">

        <svg viewBox="0 0 120 6">
          <defs>
            <path
              id="wave"
              d="M 0,7.5 C 30,7.5 30,11.25 60,11.25 90,11.25 90,7.5 120,7.5 150,7.5 150,11.25 180,11.25 210,11.25 210,7.5 240,7.5 v 20 h -240 z"
            />
          </defs>

          <use id="wave3" className="wave" xlinkHref="#wave" x="0" y="-1"></use>
          <use id="wave2" className="wave" xlinkHref="#wave" x="0" y="0"></use>

          <g className="gooeff">
            <circle className="drop drop1" cx="20" cy="1.5" r="1.8" />
            <circle className="drop drop2" cx="25" cy="2" r="1.5" />
            <circle className="drop drop3" cx="16" cy="2.4" r="1.2" />
            <use id="wave1" className="wave" xlinkHref="#wave" x="0" y="0.75" />
          </g>
        </svg>

        <div className="footerh3">
          Copyright ©️ 2024, Created by EigenInsight
        </div>
      </div>
    </>
  );
};

export default Footer;
