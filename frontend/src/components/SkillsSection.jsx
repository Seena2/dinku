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
    <section id="skills" className="skills-section">
      <div className="container-fw container-white">
        <h1>My skills</h1>
        <div className="content">
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
      </div>
      {/* <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="text-xl font-semibold ">{skill.name}</h3>
              </div>

              <div className="flex items-center">
                <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                  <div
                    className={cn(
                      "bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-in-out ]"
                    )}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="ml-2 text-sm font-medium text-gray-500">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}

export default SkillsSection;
