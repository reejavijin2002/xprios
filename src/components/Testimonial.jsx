import React from "react";
import img1 from "../images/user-36-01.jpg";
import img2 from "../images/user-36-07.jpg";
import img3 from "../images/user-36-02.jpg";
import img4 from "../images/user-36-04.jpg";
import img5 from "../images/user-36-05.jpg";
import img6 from "../images/user-36-06.jpg";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Liya",
      imageSrc: img1,
      rating: 5,
      content:
        "Creating surveys has never been easier! This survey creation website offers an intuitive and user-friendly interface that allowed me to design and customize surveys effortlessly",
    },
    {
      id: 2,
      name: "Arjun",
      imageSrc: img2,
      rating: 4,
      content:
        "The range of question types and styling options provided a lot of flexibility. I particularly liked how quickly I could share the surveys with my audience, and the real-time analytics helped me gather valuable insights instantly.",
    },
    {
      id: 3,
      name: "Vimal",
      imageSrc: img3,
      rating: 4,
      content:
        "It's a powerful tool for anyone looking to gather feedback or conduct research. Highly recommended!",
    },
    {
      id: 4,
      name: "Gokul",
      imageSrc: img4,
      rating: 5,
      content:
        "Outstanding experience with this survey creation platform! The user interface is sleek and modern, making the entire survey-building process a breeze",
    },
    {
      id: 5,
      name: "Rose",
      imageSrc: img5,
      rating: 5,
      content:
        "The real-time collaboration feature was a game-changer for our team, allowing us to seamlessly work together on crafting the perfect surveys.",
    },
    {
      id: 6,
      name: "Aneesh",
      imageSrc: img6,
      rating: 5,
      content:
        "The analytics dashboard provides insightful data visualizations, making analysis a joy. This website has truly elevated our surveying game!",
    },
  ];

  return (
    <section className=" bg-stone-100">
      <div className="mx-auto max-w-screen-xl font-[poppins] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-extrabold font-[poppins] tracking-tight mb-10 md:my-20 lg:px-60 text-gray-900 sm:text-5xl">
          Read trusted reviews from our customers
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-2">
          {testimonialsData.map((testimonial) => (
            <blockquote
              key={testimonial.id}
              className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-4">
                <img
                  alt={testimonial.name}
                  src={testimonial.imageSrc}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    {Array.from({ length: testimonial.rating }).map(
                      (_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      )
                    )}
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    {testimonial.name}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">{testimonial.content}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
