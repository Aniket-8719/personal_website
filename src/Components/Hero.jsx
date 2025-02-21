import React from "react";
import profile from "../Assest/resume photo.png";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center w-full mb-8 px-6 md:px-12">
      <div className="flex flex-col md:flex-row gap-12 md:gap-28 items-center">
        {/* Profile Image */}
        <img
          src={profile}
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-purple-400 shadow-lg"
        />

        {/* Content Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-3">
            MERN Stack Developer
          </h2>
          <p className="text-gray-300 max-w-lg leading-relaxed">
            Passionate about creating beautiful and functional web experiences. 
            I have hands-on experience working on real-world projects. I developed 
            a MERN stack website that is deployed in the real market, and several 
            shopkeepers actively use it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
