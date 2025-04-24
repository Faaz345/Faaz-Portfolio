import { useState, useEffect } from "react";
import { RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-primary/20 transition-all duration-300 ${
      isScrolled ? "bg-background/90 backdrop-blur-md" : "bg-background"
    }`}>
      <nav className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <span className="text-primary font-bold text-2xl font-space">&lt;FS/&gt;</span>
          <div className="ml-4 hidden md:flex items-center">
            <span className="text-gray-400">&gt;</span>
            <span className="text-primary typing-animation ml-1">Faaz_Siddiqui</span>
            <span className="cursor"></span>
          </div>
        </div>
        
        <button 
          onClick={toggleMenu}
          className="md:hidden text-primary hover:text-primary/80 focus:outline-none"
        >
          <RiMenuLine className="text-2xl" />
        </button>
        
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto mt-4 md:mt-0 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8`}>
          <a href="#home" className="nav-link text-gray-300 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>home</a>
          <a href="#about" className="nav-link text-gray-300 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>about</a>
          <a href="#skills" className="nav-link text-gray-300 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>skills</a>
          <a href="#projects" className="nav-link text-gray-300 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>projects</a>
          <a href="#experience" className="nav-link text-gray-300 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>experience</a>
          <a href="#contact" className="nav-link text-gray-300 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
