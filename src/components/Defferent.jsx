import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../images/report.jpg";
import img2 from "../images/message.jpg";
import img3 from "../images/templates.jpg";
import img4 from "../images/hd.jpeg";

const ImageSlider = () => {
  const images = [
    {
      src: img1,
      caption:
        "Generate comprehensive reports and export survey data to other tools for further analysis",
    },
    {
      src: img2,
      caption:
        " Optimize your survey outreach by leveraging personalized SMS invitations",
    },
    {
      src: img3,
      caption:
        " Gain access to a range of pre-built questionnaires designed by our team of research experts",
    },
    {
      src: img4,
      caption:
        "Experience comprehensive support options with our Helpdesk services",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  const settings = {
    dots: true,
    autoplay: true,
    autoplayspeed: 1,
    pauseOnHover: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gradient-to-r from-stone-300 via-stone-300  to-stone-300  h-auto  mt-16">
      <h1 className=" from-black via-slate-600 to-slate-500 shadow-md bg-clip-text  md:text-5xl sm:text-4xl xs:text-2xl font-extrabold p-5 sm:p-5 xs:p-3 font-[poppins]">
        What Makes Us Different
      </h1>
      {/* <div className="max-w-md my-auto mx-auto mt-0 bg-white pb-10 mb-10 p-12 align-middle rounded-md overflow-hidden shadow-md">
        <div> */}
      <div className="md:p-10 ">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className=" ">
              <div className="md:flex p-10 sm:p-6 xs:p-2 px-20 pt-0 shadow-xl">
                <div>
                  <img
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-52 object-cover rounded-md"
                  />
                </div>
                <div className="p-14 text-xl sm:p-10 xs:p-5 bg-gradient-to-r text-black font-medium md:w-1/2">
                  <p className="font-[poppins]">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    // </div>
  );
};

export default ImageSlider;
