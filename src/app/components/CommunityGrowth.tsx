import React from "react";
import Image from "next/image";
import "../styles/CG.css";
import education from "../../../public/education.png";
import communityImg from "../../../public/ce.jpeg";

const CommunityGrowth = () => {
  return (
    <div className="cgContainer">
      <div className="aboutContainer3">
        <h1 className="about3">Community Growth</h1>
      </div>

    <div className="cgBoxes">
      <div className="section_our_solution">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="our_solution_category">
              <div className="solution_cards_box">
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  <div className="solu_title">
                    <div>
                      <h2>Education and Support</h2>
                    </div>
                  </div>
                  <div className="solu_description">
                    <p>
                    Provide resources and tutorials to help new users understand restaking, AVSs, and operator roles. Recorded sessions will serve as valuable learning materials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section_our_solution">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="our_solution_category">
              <div className="solution_cards_box">
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  <div className="solu_title">
                    <div>
                      <h2>Community Engagement</h2>
                    </div>
                  </div>
                  <div className="solu_description">
                    <p>
                    Foster a vibrant community through forums, Q&A sessions, regular updates, and shared knowledge from recorded sessions and office hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* <div className="community-growth">
        <div className="section cardCG">
          <Image
            src={education}
            alt="education"
            className="educationImg"
          ></Image>
          <h2>Education and Support</h2>
          <p>
            Provide resources and tutorials to help new users understand
            restaking, AVSs, and operator roles. Recorded sessions will serve as
            valuable learning materials.
          </p>
        </div>

        <div className="section cardCG">
          <Image
            src={communityImg}
            alt="communityEngagement"
            className="communityImg"
          ></Image>
          <h2>Community Engagement</h2>
          <p>
            Foster a vibrant community through forums, Q&A sessions, regular
            updates, and shared knowledge from recorded sessions and office
            hours.
          </p>
        </div>
      </div> */}

    </div>
  );
};

export default CommunityGrowth;
