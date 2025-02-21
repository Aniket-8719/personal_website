import React from "react";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <FaPython />, name: "Python" },
  ];

  return (
    <section id="skills" className="py-10 px-6">
      <h2 className="font-bold text-3xl text-purple-400 mb-6">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-6 bg-gray-800 text-white flex flex-col items-center justify-center rounded-lg 
                      hover:bg-purple-900/20 transition-all duration-300 shadow-lg"
          >
            <div className="text-5xl text-purple-400 mb-3">{skill.icon}</div>
            <h3 className="text-lg font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
