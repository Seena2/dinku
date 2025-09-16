import { ArrowDown } from "lucide-react";

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero">
        <div className="intro">
          <div className="hero-overview">
            <h3>
              <span className="fade-in"> Hi, I'm</span> &nbsp;
              <span className="name"> Dinku Hamda</span>
            </h3>
            <p>
              A Software Engineer specialized in full-stack development with a
              knack for building exceptional software products with modern
              technologies.
            </p>
          </div>

          <div className="horizontal-bar">
            <span className="horizontal-bar-before"></span>
            <p>I build stunning Web applications. </p>
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

      {/* <div className="hero">
        
       
        <div className="description">
         

         

          <p>
            I'm a passionate Software Engineer . My portfolio showcases a range
            of projects that highlight my problem-solving skills, attention to
            detail, and commitment to delivering high-quality solutions.
          </p>
        </div>
        <button>View my work</button>
        <button>Contact me</button>
      </div> */}
    </section>
    // <section
    //   id="hero"
    //   className="relative min-h-screen flex flex-col items-center justify-center px-4"
    // >
    //   <div className="container max-w-4xl mx-auto text-center z-10">
    //     <div className="space-y-6">
    //       {/* <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1> */}
    //       <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
    //         <span className="opacity-0 animate-fade-in">Hi, I'm</span>
    //         <span className="text-primary ml-4 opacity-0 animate-fade-in-delay-1">
    //           Seena
    //         </span>
    //       </h1>
    //       <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
    //         professional Software Engineer, specialized in full-stack
    //         development with a knack for creating stunning web applications with
    //         modern technologies.
    //       </p>
    //       <div className=" p-4 opacity-0 animate-fade-in-delay-3">
    //         <a href="#projects" className="cosmic-button">
    //           View my work
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
    //     <span className="text-sm text-muted-foreground mbt-2">Scroll</span>
    //     <ArrowDown className="w-6 h-6 text-primary mt-2 animate-bounce" />
    //   </div>
    // </section>
  );
}

export default HeroSection;
