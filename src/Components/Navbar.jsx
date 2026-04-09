import { navbarSection } from "../constants/Materials";

import { Menu, X } from "lucide-react";

import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "./ThemeContext";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import TobbyLogoBlack from "../assets/images/tobby-logo-black.png";
import TobbyLogoWhite from "../assets/images/tobby-logo-white.png";

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);
  const [themeMode, setThemeMode] = useState(false);

  const menuRef = useRef(null);

  // Menu Bar Display on Mobile
  const handleMenu = (e) => {
    e.stopPropagation();
    setMenuBar(!menuBar);
  };

  // Theme Mode
  const handleTheme = (e) => {
    e.stopPropagation();
    setThemeMode(!themeMode);

    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuBar(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //Page Scroll Checker
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { isDark, setIsDark } = useTheme();

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`px-10 py-10 min-[570px]:px-15 sm:px-10 fixed inset-x-0 z-50 transition-all duration-700 ${scrolled ? "shadow-lg dark:shadow-gray-50/10 bg-background/60  backdrop-blur-lg" : ""}   `}>
      <div className='max-w-7xl mx-auto  flex justify-between items-center relative '>
        <div>
          <Link to='/'>
            <img src={isDark ? TobbyLogoWhite : TobbyLogoBlack} alt='' className='w-25' />
          </Link>
        </div>

        <div className={`hidden sm:flex gap-15 text-bg-text `}>
          {navbarSection.map((nav, index) => (
            <div key={index}>
              <HashLink smooth to={nav.http} className='font-semibold'>
                {nav.title}
              </HashLink>
            </div>
          ))}
        </div>

        <div className={`sm:hidden cursor-pointer transition-all duration-300  ${document.documentElement.classList.contains("dark") ? "text-[#ececec] hover:text-white" : "text-[gray] hover:text-black"} `} onClick={handleMenu}>
          {menuBar ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </div>

        <div
          className={`hidden sm:block rounded-full cursor-pointer py-1 border transition-all duration-500 
      ${isDark ? "border-gray-400 pr-2 pl-9 bg-gray-600" : "border-amber-300 pl-2 pr-9 bg-gray-100"}`}
          onClick={toggleTheme}
        >
          {isDark ? <MdDarkMode className='h-6 w-6 fill-gray-100' /> : <MdLightMode className='h-6 w-6 text-amber-500' />}
        </div>
      </div>

      <div ref={menuRef} className={`sm:hidden absolute inset-x-0 mx-auto w-[90%] rounded-lg text-center shadow-md transition-all duration-700 ease-in-out ${menuBar ? "top-30 " : "top-30 -left-300"} `}>
        {/* Mobile Menu Bar */}
        <div className={`py-5 rounded-lg ${document.documentElement.classList.contains("dark") ? "bg-[#272f3a] text-bg-text border-gray-600" : "bg-gray-100 border-gray-300"} transition-all duration-500 border `}>
          {navbarSection.map((nav, index) => (
            <div key={index} className='py-5 border-b border-border-gray last:border-none'>
              <Link to={nav.http}>{nav.title}</Link>
            </div>
          ))}

          <div className='flex justify-center items-center py-2'>
            <div
              className={`flex justify-start transition-all duration-500 py-1 rounded-full border cursor-pointer
        ${isDark ? "border-gray-400 pr-2 pl-9 bg-gray-600" : "border-amber-300 pl-2 pr-9 bg-gray-100"}`}
              onClick={handleTheme}
            >
              {isDark ? <MdDarkMode className='h-6 w-6 text-gray-100' /> : <MdLightMode className='h-6 w-6 text-amber-500' />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
