import React from "react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
      institution: "Chandigarh University",
      period: "2021 - 2025",
      description: "Specialized in web development and software engineering.",
    },
    {
      degree: "Higher Secondary (12th Grade)",
      institution: "M C R G INTER COLLEGE DEVIGANJ FATEHPUR",
      period: "2018 - 2019",
      description: "Focused on Mathematics and Computer Science.",
    },
  ];

  return (
    <div id="education" className="text-white py-10 px-6">
      <h2 className="font-bold text-3xl text-purple-400 mb-6">Education</h2>
      <div className="space-y-6">
        {education.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-blue-500"
          >
            <h3 className="text-xl font-semibold">{item.degree}</h3>
            <p className="text-blue-400">{item.institution}</p>
            <p className="text-gray-400 text-sm">{item.period}</p>
            <p className="mt-2 text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
