"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import analytics from "../../../public/analytics-circle.png";
import operator from "../../../public/operator-circle.png";
import ofchours from "../../../public/one to one session-circle.png";
import alerts from "../../../public/alerts-circle.png";
import "../styles/CF.css";

const CoreFeatures = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in",
      delay: 50,
      mirror: true,
    });
  }, []);

  return (
    <div className="cfContainer">
      <div className="aboutContainer">
        <h1 className="about">Core Features</h1>
      </div>

      <div className="timeline">
        <div className="container left-container">
          <div className="text-box hoverCF" data-aos="fade-right">
            <Image src={analytics} alt="analytics" className="cfImg" />
            <h1 className="h1OfCF">Analytics Dashboard</h1>
            <p>
              Provide real-time data and insights on AVSs, operators, and
              restakers. This includes performance metrics, restaking yields,
              operator reliability, and security assessments.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <div className="text-box hoverCF" data-aos="fade-left">
            <Image src={operator} alt="operator" className="cfImg rightImg" />
            <h1 className="h1OfCF">Operator and AVS Profiles</h1>
            <p>
              Detailed profiles for each operator and AVS, including historical
              performance, current engagements, and restaker feedback.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="container left-container">
          <div className="text-box hoverCF" data-aos="fade-right">
            <Image src={ofchours} alt="ofchours" className="cfImg" />
            <h1 className="h1OfCF">Office Hours and One-to-One Sessions</h1>
            <p>
              Enable operators and AVSs to schedule office hours and one-to-one
              sessions with restakers and other stakeholders. This facilitates
              direct communication, support, and community building.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <div className="text-box hoverCF" data-aos="fade-left">
            <Image src={alerts} alt="alerts" className="cfImg rightImg" />
            <h1 className="h1OfCF">Alerts and Notifications</h1>
            <p>
              Implement alerts for significant events, such as performance
              drops, slashing events, or important updates from AVSs and
              operators.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CoreFeatures;
