import React from "react";

const Seeit = () => {
  return (
    <div className="mt-16 w-full bg-gradient-to-r font-[poppins] from-stone-100 via-stone-200 to-stone-300 border-fuchsia-700 p-10">
      <h1 className="text-center md:text-4xl sm:text-2xl xs:text-xl font-[poppins] font-extrabold mt-10">
        You have to see it to believe it
      </h1>
      <div className="sm:flex items-center justify-center font-[poppins] md:p-20 sm:p-10 xs:p-2 md:pt-8 xs:pt-8 md:pb-5 sm:px-40 md:flex md:px-96 xs:px-5 mt-0">
        <div className="flex items-center">
          <input
            type="email"
            placeholder="email@gmail.com"
            className="border-2 border-fuchsia-700 sm:px-16 xs:mb-3 font-[poppins] sm:mb-0 md:mb-0 xs:px-4 rounded-md mr-2"
          />
        </div>
        <div>
          <input
            type="submit"
            className="bg-fuchsia-700 text-white xs:ml-10 md:ml-0 font-[poppins] lg:ml-0 p-2 h-auto px-8 font-semibold rounded-md"
          />
        </div>
      </div>
      <p className="text-center pb-5 font-[poppins]">
        Contact us with <a href="">xprios@gmail.com</a>
      </p>
    </div>
  );
};

export default Seeit;
