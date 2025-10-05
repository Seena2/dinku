import { ArrowRight, ExternalLink, Github } from "lucide-react";
const blogs = [
  {
    id: 1,
    title: "Understanding MERN Stack",
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

function BlogsSection() {
  return (
    <section id="blogs" className="projects-section background-white">
      <div className="section-container">
        <h1 className="section-heading ">Blogs</h1>
        <p className="section-description">Some of my recent blogs</p>

        <div className="columns-3">
          {blogs.map((blog) => (
            <div key={blog.id} className="card">
              <div className="card-img">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="description">
                <div className="technology">
                  {blog.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <div className="demo">
                  <a href={blog.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={blog.github}
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

export default BlogsSection;
