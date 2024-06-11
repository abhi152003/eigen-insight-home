"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import analytics from "../../../public/analytics.png";
import operator from "../../../public/operator.jpeg";
import session from "../../../public/one to one session.jpeg";
import alerts from "../../../public/alert.jpeg";
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
      <div data-aos="fade-up" className="a-abouts a-analytics">
        <div
          className="a-img"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <Image
            src={analytics}
            alt="analytics"
            width={250}
            height={250}
            className="a-im"
          />
        </div>
        <div className="a-paragraph a-paragraph1" data-aos="fade-left">
          <p className="fontTagp">
            <span className="featureHeading">Analytics Dashboard</span> <br />
            Provide real-time data and insights on AVSs, operators, and
            restakers. This includes performance metrics, restaking yields,
            operator reliability, and security assessments.
          </p>
        </div>
      </div>

      <div data-aos="fade-up" className="a-abouts a-operator">
        <div className="a-grad"></div>
        <div className="a-paragraph a-paragraph2" data-aos="fade-right">
          <p className="fontTagp">
            <span className="featureHeading">Operator and AVS Profiles</span>
            <br />
            Detailed profiles for each operator and AVS, including historical
            performance, current engagements, and restaker feedback.
          </p>
        </div>
        <div className="a-img" data-aos="fade-left">
          <Image
            src={operator}
            alt="operator"
            width={250}
            height={250}
            className="a-im"
          />
        </div>
      </div>

      <div data-aos="fade-up" className="a-abouts a-session">
        <div className="a-img" data-aos="fade-right">
          <Image
            src={session}
            alt="session"
            width={250}
            height={250}
            className="a-im"
          />
        </div>
        <div className="a-paragraph a-paragraph3" data-aos="fade-left">
          <p className="fontTagp">
            <span className="featureHeading">
              Office Hours and One-to-One Sessions
            </span>
            <br />
            Enable operators and AVSs to schedule office hours and one-to-one
            sessions with restakers and other stakeholders. This facilitates
            direct communication, support, and community building.
          </p>
        </div>
      </div>

      <div data-aos="fade-up" className="a-abouts a-alerts">
        <div className="a-grad2"></div>
        <div className="a-paragraph a-paragraph4" data-aos="fade-right">
          <p className="fontTagp">
            <span className="featureHeading">Alerts and Notifications</span>
            <br />
            Implement alerts for significant events, such as performance drops,
            slashing events, or important updates from AVSs and operators.
          </p>
        </div>
        <div className="a-img" data-aos="fade-left">
          <Image
            src={alerts}
            alt="alerts"
            width={250}
            height={250}
            className="a-im"
          />
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
