import React from "react";
import Image from "next/image";
import g from "../../../public/google.jpg";
import te from "../../../public/tesla.png";
import ta from "../../../public/tata2.png";
import v from "../../../public/volkswagen.jpg";
import "../styles/Xc.css";

const Xc = () => {
  return (
    <div className="timeline">
      <div className="container left-container">
        <div className="text-box">
        <Image src={g} alt="google" className="cfImg" />
          <h2>Google Inc</h2>
          <small>2018 - 2020</small>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum vel odit dicta hic officiis itaque voluptatum velit enim repellat corporis sunt, alias labore iure blanditiis voluptates. Voluptas, natus vitae.</p>
          <span className="left-container-arrow"></span>
        </div>
      </div> 

      <div className="container right-container">
        <div className="text-box">
          <Image src={te} alt="tesla" className="cfImg rightImg" />
          <h2>Tesla Inc</h2>
          <small>2016 - 2018</small>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum vel odit dicta hic officiis itaque voluptatum velit enim repellat corporis sunt, alias labore iure blanditiis voluptates. Voluptas, natus vitae.</p>
          <span className="right-container-arrow"></span>
        </div>
      </div> 

      <div className="container left-container">
        <div className="text-box">
          <Image src={ta} alt="tata" className="cfImg" />
          <h2>Tata Inc</h2>
          <small>2023 - 2024</small>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum vel odit dicta hic officiis itaque voluptatum velit enim repellat corporis sunt, alias labore iure blanditiis voluptates. Voluptas, natus vitae.</p>
          <span className="left-container-arrow"></span>
        </div>
      </div> 

      <div className="container right-container">
        <div className="text-box">
          <Image src={v} alt="volkswagen" className="cfImg rightImg" />
          <h2>Volkswegan Inc</h2>
          <small>2000 - 2010</small>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum vel odit dicta hic officiis itaque voluptatum velit enim repellat corporis sunt, alias labore iure blanditiis voluptates. Voluptas, natus vitae.</p>
          <span className="right-container-arrow"></span>
        </div>
      </div> 

    </div>
  );
};

export default Xc;
