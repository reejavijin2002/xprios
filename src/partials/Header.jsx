import React, { useState } from "react";

import logo from "../images/WhatsApp Image 2023-11-03 at 1.15.53 PM.jpeg";
import { Link } from "react-router-dom";
import Headlinks from "../components/Headlinks";
import home from "../images/main.jpg";
import { MdViewHeadline } from "react-icons/md";

function Header() {
  return (
    <header className=" sticky top-0 bg-stone-100 dark:bg-[#030508]  border-b border-slate-200 dark:border-slate-700 z-30 ">
      <div className="px-4 ">
        <div className="flex items-center justify-between h-16 ">
          <Link to="/">
            <div className="flex caret-transparent">
              <div>
                <img src={logo} alt="" width="30px" height="30px" />
              </div>{" "}
              <div className="font-bold font-[poppins] ">
                <h3>XPRIOS</h3>
              </div>
            </div>
          </Link>

          <Headlinks />

          <div className="flex items-center space-x-3">
            <div></div>
            <div className=" xs:hidden sm:hidden md:flex text-sm">
              <Link to="/Login">
                <img
                  className="rounded-full  border border-fuchsia-950 "
                  style={{
                    border: "0.2rem solid fuchsia",
                    width: "40px",
                    height: "40px",
                    transition: "border-color 0.3s ease", // Adding transition for a smoother effect
                  }}
                  src={home}
                  onMouseOver={(e) => {
                    e.target.style.borderColor = "transparent"; // Change border color to transparent on hover
                  }}
                  onMouseOut={(e) => {
                    e.target.style.borderColor = "fuchsia"; // Change border color back to the original color on mouse out
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="xs:visible md:hidden">
            <Link to="/Landingicon">
              <div className="xs:visible md:hidden">
                <MdViewHeadline className="w-[25px] h-[25px] xs:visible md:invisible" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
