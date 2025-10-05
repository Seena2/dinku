import {
  ArrowDown,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Twitch,
  Github,
} from "lucide-react";

function HeroSection() {
  return (
    <section id="hero" className="hero-section background-white">
      <div className="section-container">
        <div className="hero">
          <div className="palistine">
            <div className="pal-group">
              <div className="box box2">
                <Linkedin />
              </div>
              <div className="box box1"></div>
            </div>
            <div className="pal-group">
              <div className="box box1"></div>
              <div className="box box2">
                <Github />
              </div>
            </div>
            <div className="pal-group">
              <div className="box box2">
                <Twitter />
              </div>
              <div className="box box1"></div>
            </div>
            <div className="pal-group">
              <div className="box box1"></div>
              <div className="box box2">
                <Facebook />
              </div>
            </div>
            <div className="pal-group">
              <div className="box box2">
                <Youtube />
              </div>
              <div className="box box1"></div>
            </div>
            <div className="pal-group">
              <div className="box box1"></div>
              <div className="box box2"></div>
            </div>
          </div>

          <div className="desktop-shape">
            <div className="desktop-content">
              <div className="hero-overview">
                <h3>
                  Dinku <span>Hamda</span>
                </h3>
                <p>
                  A Software Engineer specialized in full-stack development with
                  a knack for building exceptional software products with modern
                  technologies.
                </p>
              </div>

              <div className="horizontal-bar">
                <span className="horizontal-bar-before"></span>
                <p>I build high-end web applications. </p>
                <span className="horizontal-bar-after"></span>
              </div>

              <div className="call-to-action">
                <a href="#projects" className="btn btn-primary">
                  View my work
                </a>
                <a href="#contacts" className="btn btn-primary-outline">
                  Get in touch
                </a>
              </div>
            </div>
            <div className="pc-stand"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
