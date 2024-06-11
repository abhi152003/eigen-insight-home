"use client";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import vision from "../../../public/Vision.png";
import mission from "../../../public/mission.png";
import "../styles/VM.css";

const VisionMission = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in",
      delay: 50,
      mirror: true,
    });
  }, []);

  return (
    <div className="vmContainer">
      <div className="aboutContainerVM">
        <h1 className="aboutVM">Vision & Mission</h1>
      </div>

          <div data-aos="fade-up" className="a-aboutsVM a-operatorVM cardVM">
            <div
              className="a-imgVM"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            >
              <Image
                src={vision}
                alt="vision"
                width={100}
                height={100}
                className="a-imVM"
              />
            </div>
            <div className="a-paragraphVM a-paragraphVM1" data-aos="fade-left">
              <p className="fontTagpVision">
                <span className="featureHeading">Vision</span> <br />
                Empowering the EigenLayer Ecosystem: Data-Driven Insights,
                Direct Engagement, and Knowledge Sharing for AVSs, Operators,
                and Restakers
              </p>
            </div>
          </div>
          
          <div data-aos="fade-up" className="cardVM a-aboutsVM a-analyticsVM">
            <div
              className="a-imgVM"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            >
              <Image
                src={mission}
                alt="mission"
                width={100}
                height={100}
                className="a-imVM"
              />
            </div>
            <div className="a-paragraphVM" data-aos="fade-left">
              <p className="fontTagp">
                <span className="featureHeading">Mission</span> <br />
                To enhance the transparency, performance, security, and knowledge sharing of the EigenLayer ecosystem by providing comprehensive analytics and fostering direct communication between AVSs, operators, and restakers
              </p>
            </div>
          </div>

    </div>
  );
};

export default VisionMission;
