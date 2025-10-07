import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import ThemeToggle from "../components/ThemeToggle";
// import StarBackground from "../components/StarBackground";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Blogs = [
  {
    id: 1,
    date: "2023-01-01",
    title: "Coding for begginers",
    intercept:
      "Most novice enthustics who want to learn coding found on cross road, confused with where to start. this article is for you ..",
    image: "/blogs/project1.png",
    tags: ["Learn", "Code", "begginer"],
    demo: "https://example.com/project-one",
    github: "https://github.com/user/project-one",
  },
  {
    id: 2,
    date: "july,12,2020",

    title: "Introduction to Computer Science",
    intercept: "A brief description of Project One.",
    image: "/blogs/project1.png",
    tags: ["CS", "Programing", "Learn"],
    demo: "https://example.com/project-one",
    github: "https://github.com/user/project-one",
  },
];
function BlogsPage() {
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
              All Blogs
            </h1>
            <p>
              On my blog, I'll be sharing my experiences, learnings, and
              thoughts on web development, personal finance, and life
              philosphies.
            </p>

            <div className="blog-posts-container">
              {Blogs.map((blog) => (
                <div key={blog.id} className="blog-post-card">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog-post-image"
                  />
                  <h2 className="blog-post-title">{blog.title}</h2>
                  <span>{blog.date}</span>
                  <p className="blog-post-intercept">{blog.intercept}</p>
                  <div className="blog-post-tags">
                    {blog.tags.map((tag, index) => (
                      <span key={index} className="blog-post-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="blog-post-links">
                    <a href={blog.demo} className="blog-post-link">
                      Read post <ArrowRight />
                    </a>
                    <a href={blog.github} className="blog-post-link">
                      GitHub <Github />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* Footer  */}
      <Footer />
    </div>
  );
}

export default BlogsPage;
