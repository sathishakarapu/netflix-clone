import React, { useEffect, useState } from "react";
import "./Nav.css";
import img1 from "./img1.png";
import img2 from "./img2.png";

const Nav = () => {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="nav-content ">
        <img src={img1} alt="logo" className="nav-logo" />
        <img src={img2} alt="avatar" className="nav-avatar" />
      </div>
    </div>
  );
};

export default Nav;
