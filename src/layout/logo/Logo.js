import React from "react";
import LogoTiptorro from "../../images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
      <img className="logo-light logo-img" src={LogoTiptorro} alt="logo" />
    </Link>
  );
};

export default Logo;
