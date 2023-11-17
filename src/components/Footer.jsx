import React from "react";
import img1 from "../images/whatsapp (1).png";
import img2 from "../images/facebook (1).png";
import img3 from "../images/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black ">
      <div className="container mx-auto py-10">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
            <h3 className="text-xl font-[poppins] font-bold mb-4 text-sm">
              Survey Creator
            </h3>
            <p className="text-black font-[poppins] text-sm">
              Create surveys and gather valuable feedback from your audience.
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
            <h3 className="text-xl font-[poppins] font-bold mb-4">
              Contact Us
            </h3>
            <p className="text-black font-[poppins] text-sm">
              Email: info@surveycreator.com
            </p>
            <p className="text-black font-[poppins] text-sm">
              Phone: (123) 456-7890
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
            <h3 className="text-xl font-[poppins] font-bold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={img1} alt="" height="25px" width="25px" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={img2} alt="" height="25px" width="25px" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={img3} alt="" height="25px" width="25px" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-100 py-2 text-center">
        <p className="text-black m-0 text-sm font-[poppins]">
          &copy; 2023 Survey Creator. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
