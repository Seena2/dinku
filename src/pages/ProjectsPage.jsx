import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import ThemeToggle from "../components/ThemeToggle";
// import StarBackground from "../components/StarBackground";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    year: 2023,
    client: "Client A",
    title: "Project One",
    description: "A brief description of Project One.",
    image: "/images/project1.png",
    tags: ["React", "Node.js", "CSS"],
    demo: "https://example.com/project-one",
    github: "https://github.com/user/project-one",
  },
  {
    id: 2,
    year: 2023,
    client: "Client A",
    title: "Project One",
    description: "A brief description of Project One.",
    image: "/images/project1.png",
    tags: ["React", "Node.js", "CSS"],
    demo: "https://example.com/project-one",
    github: "https://github.com/user/project-one",
  },
];
function ProjectsPage() {
  return (
    <div>
      {/* Theme Toggle */}
      {/* <ThemeToggle /> */}
      {/* Background effects  */}
      {/* <StarBackground /> */}
      {/* Navbar  */}
      <Navbar />

      {/* Main Content  */}
      <main className="main-content ">
        <section id="projects" className="projects-section background-dark">
          <div className="section-container">
            <Link to="/" className="back-link">
              &larr; Back to Home
            </Link>
            <h1 className="section-heading section-heading-black justify-left">
              All Projects
            </h1>

            <table className="detailed-projects-table-mobile">
              <thead>
                <tr>
                  <th>Project</th>

                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td>
                      <span className="project-name">{project.title}</span>
                      <br />
                      <span className="project-year">Year: {project.year}</span>
                      <br />
                      <span className="project-client">
                        Client: {project.client}
                      </span>
                    </td>

                    <td>
                      <span className="project-description">
                        {project.description}
                      </span>{" "}
                      <br />
                      <span>
                        <ul className="tech-stack">
                          {project.tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                          ))}
                        </ul>
                      </span>
                      <br />
                      <span className="project-links">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo <ExternalLink size={16} />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                          <ExternalLink size={16} />
                        </a>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table className="detailed-projects-table-desktop">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Year</th>
                  <th>Client</th>
                  <th>Description</th>
                  <th>Tech Stack</th>
                  <th>Links</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td className="project-name">{project.title}</td>
                    <td>{project.year}</td>
                    <td>{project.client}</td>
                    <td>{project.description}</td>
                    <td>
                      <ul className="tech-stack">
                        {project.tags.map((tag, index) => (
                          <li key={index}>{tag}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                        <ExternalLink size={16} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      {/* Footer  */}
      <Footer />
    </div>
  );
}

export default ProjectsPage;
