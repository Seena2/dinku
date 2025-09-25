import { useState, useEffect } from "react";
import { href, NavLink, Link } from "react-router-dom";
import { X, Menu } from "lucide-react";

const navItems = [
  // { name: "Home", path: "/" },
  /*we want to use id to navigate to the section in same page*/
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // for mobile menu
  useEffect(() => {
    const handleScroll = () => {
      // when scroll is above 10px(navbar height)
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    // cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>DH</h2>
      </div>
      <div
        className={`${isMenuOpen ? "nav-links " : "nav-links hideMenu"}`}
        onClick={toggleMenu}
      >
        {navItems.map((item) => (
          <a href={item.href} key={item.name} onClick={toggleMenu}>
            {item.name}
          </a>
        ))}
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>
    </nav>
  );
}

export default Navbar;
