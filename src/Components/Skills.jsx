import React from "react";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <FaPython />, name: "Python" },
  ];
  return (
    <section id="skills" className="py-20">
      <h2>Techinal Skills</h2>
      <div className="grid grid-cols-2 font-bold mb-12">
        {skills.map((skill) => (
          <div
            className="p-6 bg-gray-800 rounded-lg hover:bg-purple-900/20 transition-colors text-center"
            key={skill.name}
          >
            <div className="text-4xl mb-4 text-purple-400">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
