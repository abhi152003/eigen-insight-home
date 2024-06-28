import React from "react";
import Image from "next/image";
import "../styles/Navbar.css";
import "../styles/BtnShine.css";
import Link from "next/link";
import Logo from "../../../public/Eigen circle logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/" className="imgContainer">
        <Image src={Logo} alt="logo" className="headerImg"></Image>
        <h2 className="navHeader">EigenInsight</h2>
      </Link>
    </div>
  );
};

export default Navbar;
