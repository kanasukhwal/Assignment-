import React from "react";
import LOGO from "../images/logo horizontal 1.png";
const Navbar = () => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    borderRadius: "50px",
    background: "linear-gradient(to right, #F5F5F5, #A0D4D6)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "80%",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const logoImageStyle = {
    width: "40px",
    height: "40px",
    marginRight: "10px",
  };

  const logoTextStyle = {
    fontSize: "24px",
    color: "#7DB8BB",
    fontWeight: "bold",
  };

  const navLinksContainerStyle = {
    display: "flex",
    gap: "30px",
    fontSize: "18px",
  };

  const navLinkStyle = {
    textDecoration: "none",
    color: "#000",
    fontWeight: "500",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={logoContainerStyle}>
        <img
          src={LOGO}
          alt="logo"
          style={logoImageStyle}
        />
        <span style={logoTextStyle}>MyEd</span>
      </div>
      <div style={navLinksContainerStyle}>
        <span style={navLinkStyle}>Features</span>
        <span style={navLinkStyle}>Pricing</span>
        <span style={navLinkStyle}>About Us</span>
      </div>
    </div>
  );
};

export default Navbar;
