import React from "react";
import logo from "./logo.svg";
const Header = () => {
  return (
    <div>
      <div>
        <img style={{ height: "50px", width: "50px" }} src={logo} alt="" />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>My Profile</li>
          <li>My Policies</li>
          <li>My Requests</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
