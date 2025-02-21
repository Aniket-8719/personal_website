import React from "react";

const Timeline = () => {
  const experiences = [
    {
      title: "Full Stack Web Developer",
      company: "Edu-station",
      period: "July 2024 - September 2024",
      description:
        "Worked on React-based applications and performance optimization.",
    },
    {
      title: "UI/UX Designer",
      company: "Cufoodz",
      period: "December 2023 - March 2024",
      description: "Leading frontend architecture and UI/UX improvements.",
    },
  ];

  return (
    <div id="experience" className="text-white py-10 px-6">
      <h2 className="font-bold text-3xl text-purple-400 mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-purple-500"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-purple-400">{item.company}</p>
            <p className="text-gray-400 text-sm">{item.period}</p>
            <p className="mt-2 text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
