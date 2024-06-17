import React from "react";
import "../styles/UB.css";
import Link from "next/link";

const UserBenefits = () => {
  return (
    <div className="containerMain">
      <div className="aboutContainer2">
        <h1 className="about2">User Benefits</h1>
      </div>  
      
      <div className="main-div">
        <div className="card">
          <div className="content restakers">
            <h2 className="h2OfUB">Restakers</h2>
            <p className="para">
              Gain detailed insights into where to allocate their staked assets
              for maximum yield and security. Directly engage with operators and
              AVS teams to address concerns, get support, and learn from
              recorded sessions.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="content operators">
            <h2 className="h2OfUB">Node Operators</h2>
            <p className="para">
              Showcase their reliability and performance, attract more
              restakers, and receive direct feedback from the community. Office
              hours and sessions can help build trust, improve service, and
              share knowledge.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="content avss">
            <h2 className="h2OfUB">AVSs</h2>
            <p className="para">
              Analyze operator performance, optimize their protocols, and engage
              directly with the community to gather feedback, improve their
              services, and share knowledge.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default UserBenefits;
