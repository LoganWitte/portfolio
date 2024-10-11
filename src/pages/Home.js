import React, { useState } from 'react';
import '../index.css';

const Home = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(true);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return(
    <div className="w-screen h-screen flex flex-col">
      <div className="flex justify-between items-center justify-center text-center bg-gray-800 p-2">
        <a href="/" className="text-white text-2xl font-semibold">
          Logan Witte
        </a>
        {isMobileMenuOpen ?
          <button className="lg:hidden text-white text-2xl border rounded p-0.25 w-8" onClick={toggleMobileMenu}>
              ☰
          </button>
          :
          <div>
            <button className="lg:hidden text-white text-2xl border rounded p-0.25 w-8 bg-slate-600" onClick={toggleMobileMenu}>
                ✖
            </button>
            <div className="lg:hidden absolute right-0 mt-2 w-28 bg-white bg-opacity-50 rounded-bl-lg border-l border-b border-black">
              <a href="#about" className="block px-0 py-1 hover:bg-slate-400">
                About
              </a>
              <div className="border-t border-black" />
              <a href="#skills" className="block px-0 py-1 hover:bg-slate-400">
                Skills
              </a>
              <div className="border-t border-black" />
              <a href="#projects" className="block px-0 py-1 hover:bg-slate-400">
                Projects
              </a>
              <div className="border-t border-black" />
              <a href="#experience" className="block px-0 py-1 hover:bg-slate-400">
                Experience
              </a>
              <div className="border-t border-black" />
              <a href="#contact" className="block px-0 py-1 hover:bg-slate-400">
                Contact
              </a>
              <div className="border-t border-black" />
              <a href="/" className="block px-0 py-1 hover:bg-slate-400">
                Resume
              </a>
            </div>
          </div>
          
        }
        <div className="hidden lg:flex space-x-2">
          <a href="#about" className="text-white font-semibold py-1 my-1 px-4 rounded hover:bg-slate-600 hover:underline transition duration-200">
            About
          </a>
          <a href="#skills" className="text-white font-semibold py-1 my-1 px-4 rounded hover:bg-slate-600 hover:underline transition duration-200">
            Skills
          </a>
          <a href="#projects" className="text-white font-semibold py-1 my-1 px-4 rounded hover:bg-slate-600 hover:underline transition duration-200">
            Projects
          </a>
          <a href="#experience" className="text-white font-semibold py-1 my-1 px-4 rounded hover:bg-slate-600 hover:underline transition duration-200">
            Experience
          </a>
          <a href="#contact" className="text-white font-semibold py-1 my-1 px-4 rounded hover:bg-slate-600 hover:underline transition duration-200">
            Contact
          </a>
          <a href="/" className="text-white font-semibold py-1 my-1 px-4 rounded hover:bg-slate-600 hover:underline transition duration-200">
            Resume
          </a>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center text-center bg-gray-100 overflow-y-auto">
        <div id="home"></div>
        <div className="w-full bg-blue-100" id="about">
          About
          <div style={{height: "100vh"}} />
        </div>
        <div className="w-full bg-blue-100" id="skills">
          Skills
          <div style={{height: "100vh"}} />
        </div>
        <div className="w-full bg-blue-100" id="projects">
          Projects
          <div style={{height: "100vh"}} />
        </div>
        <div className="w-full bg-blue-100" id="experience">
          Experience
          <div style={{height: "100vh"}} />
        </div>
        <div className="w-full bg-blue-100" id="contact">
          Contact
          <div style={{height: "100vh"}} />
        </div>
      </div>
    </div>
  )
}

export default Home;