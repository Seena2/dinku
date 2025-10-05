import { ArrowRight, ExternalLink, Github } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "MERN based AI App-OJORS",
    description:
      "AI-powered application built with the MERN stack, featuring intelligent automation and seamless user experience.",
    image: "/projects/project1.png",
    tags: ["Java", "Oracle", "Html/css"],
    demo: "#URL_to_live_demo_for_project1",
    github: "#URL_to_GitHub_repo_for_project1",
  },
  {
    id: 2,
    title: "Orbit Analytics dashboard-SCT",
    description:
      " Interactive dashboard with data visualization and filtering capabilities built using modern web technologies.",
    image: "/projects/project1.png",
    tags: ["C#", "SQL-Server", "Bootstrap"],
    demo: "#URL_to_live_demo_for_project2",
    github: "#URL_to_GitHub_repo_for_project2",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform enabling users to browse products, manage carts, and securely complete purchases. Includes admin tools for authentication, payment processing, inventory and order management.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "AI"],
    demo: "#URL_to_live_demo_for_project3",
    github: "#URL_to_GitHub_repo_for_project3",
  },
];
function ProjectsSection() {
  return (
    <section id="projects" className="projects-section background-dark">
      <div className="section-container">
        <h1 className="section-heading section-heading-black">
          Featured Projects
        </h1>
        <p className="section-description">
          A showcase of my most recent and impactful projects, demonstrating my
          skills and expertise in various technologies.
        </p>

        <div className="columns-3">
          {projects.map((project) => (
            <div key={project.id} className="card">
              <div className="card-img">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="description">
                <div className="technology">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="demo">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="more-projects ">
          <a
            href="https://github.com/Seena2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check my GitHub/View more projects
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
