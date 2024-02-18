import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img
        src="https://sangamvitc.vercel.app/img/Sangam_logo_2.png"
        alt="Sangam Logo"
        style={{ width: "80px", height: "80px", cursor: "pointer" }}
      />
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Events</a>
        <a href="/#">Explore</a>
        <a href="/#">Gallery</a>
        <a href="/#">About me</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
