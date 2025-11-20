import React from "react";
import img1 from "../assets/1.png"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"

const Banner = () => {
  return (
    <div className="w-full overflow-x-auto flex snap-x snap-mandatory scroll-smooth">
      
      {/* Slide 1 */}
      <div className="min-w-full h-[400px] md:h-[550px] relative snap-center">
        <img
          src={img1}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold">Drop In. Gear Up. Survive.</h2>
          <p className="mt-2 text-gray-300 max-w-xl">Experience the thrill of modern gaming with GameHub.</p>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="min-w-full h-[400px] md:h-[550px] relative snap-center">
        <img
          src={img2}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold">Discover Top-Rated Games</h2>
          <p className="mt-2 text-gray-300 max-w-xl">Find the best games across every genre, rated by players.</p>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="min-w-full h-[400px] md:h-[550px] relative snap-center">
        <img
          src={img3}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
          <p className="mt-32 text-2xl text-white max-w-xl">Keep up with the latest tournaments.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
