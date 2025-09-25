import { Briefcase, Code, User } from "lucide-react";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container-fw container-dark">
        <h1>About me</h1>
        <div className="content">
          <div className="card">
            <h5>Software Developer</h5>
            <p>
              I am Software Engineer with over 15 years of experaince in the
              industy creating cutting-edge, robust, secure and performant web
              applications. My expertise spans both frontend and backend
              development, enabling me to design, build, and maintain scalable
              solutions from concept to deployment.
            </p>
            <p>
              I am keen about creating elegant solutions to complex problems,
              collaborating with cross-functional teams, equiped with
              problem-solving skills, attention to detail, and continuously
              learning new tools and frameworks to deliver high-quality
              software.
            </p>
            <p>
              My goal is to{" "}
              <span className="highlight">
                empower people and businesses by building software that solves
                real-world problems, improves lives, and drives innovation.
              </span>
            </p>

            <div className="call-to-action">
              <a href="#contact" className="btn btn-primary">
                Get in touch
              </a>
              <a href="#path_to_resume" className="btn btn-primary-outline">
                Download CV
              </a>
            </div>
          </div>
          <div className="card">
            <h5>Expertise</h5>
            <div className="bulletins">
              <div className="bullet-mark">
                <Code size={24} />
              </div>
              <div className="bullet-content">
                <h5>Web Development</h5>
                <p>
                  Creating responsive and accessible web applications with
                  modern web frameworks
                </p>
              </div>
            </div>
            <div className="bulletins">
              <div className="bullet-mark">
                <User size={24} />
              </div>
              <div className="bullet-content">
                <h5>UX/UI</h5>
                <p>
                  Designing user-friendly interfaces and experiences for web
                  applications
                </p>
              </div>
            </div>
            <div className="bulletins">
              <div className="bullet-mark">
                <Briefcase size={24} />
              </div>
              <div className="bullet-content">
                <h5>Project Management</h5>
                <p>
                  Leading projects from conception to completion, ensuring
                  timely delivery and stakeholder satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
