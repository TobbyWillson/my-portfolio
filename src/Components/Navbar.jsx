import { navbarSection } from "../constants/Materials";

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

  // Hamburger Button on Mobile
  const HamburgerButton = () => (
    <>
      <div className={`h-[2px] w-3 bg-current rounded-full transition-all duration-500 ease-in-out ${menuBar ? "-rotate-45 w-5 translate-y-[7px]" : ""} `} />

      <div className={`h-[2px] w-5 bg-current rounded-full my-[5px] transition-all duration-500 ease-in-out ${menuBar ? "opacity-0" : "opacity-100"} `} />

      <div className={`h-[2px] w-3 bg-current rounded-full transition-all duration-500 ease-in-out ${menuBar ? "rotate-45 w-5 -translate-y-[7px]" : ""} `} />
    </>
  );

  return (
    <div className={`px-10 py-10 min-[570px]:px-15 sm:px-10 fixed inset-x-0 z-50 transition-all duration-700 ${scrolled ? "shadow-lg dark:shadow-gray-50/10 bg-background/60  backdrop-blur-lg" : ""}   `}>
      <div className='max-w-7xl mx-auto  flex justify-between items-center relative '>
        <div>
          <Link to='/'>
            <img src={isDark ? TobbyLogoWhite : TobbyLogoBlack} alt='Tobby Logo' className='w-25' />
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

        <button className={`sm:hidden flex flex-col justify-center items-center w-8 h-8 relative cursor-pointer group  ${isDark ? "text-[#ececec] hover:text-white" : "text-[gray] hover:text-black"} `} onClick={handleMenu} aria-expanded={menuBar} aria-label={menuBar ? "Close menu" : "Open menu"}>
          {HamburgerButton()}
        </button>

        <button
          className={`hidden sm:block rounded-full cursor-pointer py-1 border transition-all duration-500 
      ${isDark ? "border-gray-400 pr-2 pl-9 bg-gray-600" : "border-amber-300 pl-2 pr-9 bg-gray-100"}`}
          onClick={toggleTheme}
        >
          {isDark ? <MdDarkMode className='h-6 w-6 fill-gray-100' /> : <MdLightMode className='h-6 w-6 text-amber-500' />}
        </button>
      </div>

      {/* "top-30 " : "top-30 -left-300" */}
      {/*  <div ref={menuRef} className={`sm:hidden absolute inset-x-0 mx-auto w-[90%] rounded-lg text-center shadow-md transition-all duration-700 ease-in-out ${menuBar ? "opacity-100 translate-x-0 translate-y-11 pointer-events-auto" : "opacity-0 -translate-x-50 translate-y-11  pointer-events-none"} `}>
       
        <div className='py-5 rounded-lg bg-gray-100 border-gray-300 dark:bg-[#272f3a] dark:text-bg-text dark:border-gray-600  transition-all duration-500 border '></div> */}

      <div ref={menuRef} className={`sm:hidden absolute inset-x-0 mx-auto w-[90%] rounded-lg text-center shadow-md transition-all duration-700 ease-in-out ${menuBar ? "opacity-100 translate-x-0 translate-y-11 pointer-events-auto" : "opacity-0 -translate-x-70 translate-y-11  pointer-events-none"} `}>
        {/* Mobile Menu Bar */}
        <div className='py-5 rounded-lg bg-gray-100 border-gray-300 dark:bg-[#272f3a] text-bg-text dark:border-gray-600  transition-all duration-500 border '>
          {navbarSection.map((nav, index) => (
            <div key={index} className='py-5 border-b border-border-gray last:border-none'>
              <HashLink smooth to={nav.http}>
                {/* {nav.title} */}
                <div>{nav.title}</div>
              </HashLink>
            </div>
          ))}

          <div className='flex justify-center items-center py-2'>
            <button className={`transition-all duration-500 py-1 rounded-full border cursor-pointer ${isDark ? "border-gray-400 pr-2 pl-9 bg-gray-600" : "border-amber-300 pl-2 pr-9 bg-gray-100"}`} onClick={handleTheme}>
              {isDark ? <MdDarkMode className='h-6 w-6 text-gray-100' /> : <MdLightMode className='h-6 w-6 text-amber-500' />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
