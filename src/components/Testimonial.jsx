import React from 'react';
import img1 from "../images/user-36-01.jpg"
import img2 from "../images/user-36-03.jpg"
import img3 from "../images/user-36-02.jpg"
import img4 from "../images/user-36-04.jpg"
import img5 from "../images/user-36-05.jpg"
import img6 from "../images/user-36-06.jpg"





const Testimonials = () => {
  // Dummy data array
  const testimonialsData = [
    {
      id: 1,
      name: 'Arjun de',
      imageSrc:
        img1,
      rating: 5,
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!',
    },
    {
        id: 2,
        name: 'Arjun',
        imageSrc:
          img2,
        rating: 4,
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!',
      },
      {
        id: 3,
        name: 'Vimal',
        imageSrc:
                img3,
        rating: 4,
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!',
      },
      {
        id: 4,
        name: 'Gokul',
        imageSrc:
                    img4,
        rating: 5,
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!',
      },
      {
        id: 5,
        name: 'Pranav',
        imageSrc:
          img5,
        rating: 5,
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!',
      },
      {
        id: 6,
        name: 'Aneesh',
        imageSrc:
          img6,
        rating: 5,
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!',
      },
    // Add more testimonial objects as needed
  ];

  return (
    <section className=" bg-stone-100">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-extrabold font-sans tracking-tight mb-10 md:my-20 md:px-60 text-gray-900 sm:text-5xl">
          Read trusted reviews from our customers
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    ))}
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

