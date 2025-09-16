import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
// import ThemeToggle from "../components/ThemeToggle";
// import StarBackground from "../components/StarBackground";

function HomePage() {
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
        <div className="sections">
          <HeroSection />

          <AboutSection />
        </div>

        {/* <SkillsSection />
        <ProjectsSection />
        <ContactSection /> */}
      </main>
      {/* Footer  */}
      <Footer />
    </div>
  );
}

export default HomePage;
