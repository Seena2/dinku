import { Key } from "lucide-react";
import React, { act, useState } from "react";

const skills = [
  //Languages

  //Frontend
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Vue", level: 90, category: "Frontend" },
  { name: "NextJS", level: 80, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },

  //Backend
  { name: "Java", level: 95, category: "Backend" },
  { name: "JavaScript/NodeJS", level: 95, category: "Backend" },
  { name: "TypeScript", level: 85, category: "Backend" },
  { name: "C#", level: 90, category: "Backend" },
  { name: "C++", level: 70, category: "Backend" },
  { name: "Python", level: 80, category: "Backend" },
  { name: "PHP", level: 90, category: "Backend" },
  { name: "Kotlin", level: 80, category: "Backend" },
  { name: "Ruby", level: 75, category: "Backend" },
  { name: "Express", level: 80, category: "Backend" },
  { name: "ORM", level: 90, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Backend" },
  { name: "Oracle", level: 85, category: "Backend" },
  { name: "SQL-Server", level: 85, category: "Backend" },
  { name: "MySQL/MariaDB", level: 85, category: "Backend" },
  { name: "PostgreSQL", level: 75, category: "Backend" },
  { name: "GraphQL", level: 75, category: "Backend" },

  //Tools
  { name: "Git/GiHub", level: 90, category: "Tools" },
  { name: "Docker", level: 80, category: "Tools" },
  { name: "Figma", level: 85, category: "Tools" },
  { name: "VSCode", level: 85, category: "Tools" },
  { name: "NetBeans", level: 85, category: "Tools" },
  { name: "eclipse", level: 85, category: "Tools" },
  { name: "Visual Studio", level: 85, category: "Tools" },
];
const categories = ["all", "Frontend", "Backend", "Tools"];

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="skills-section background-white">
      <div className="section-container">
        <h1 className="section-heading">My skills</h1>
        <p className="section-description">
          Summary of the languages, frameworks, tools and technologies i am
          profietient in utilizing to create softwares for various purposes.
        </p>
        <div className="category-menu">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category ? "active-category" : ""
              }}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div>
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill">
              <div className="skill-name">
                <p>{skill.name}</p>
              </div>
              <div className="skill-level">
                <div
                  className="skill-bar"
                  style={{ width: `${skill.level}%` }}
                ></div>
                <span>{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
