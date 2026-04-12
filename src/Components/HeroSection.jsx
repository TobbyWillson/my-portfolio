import { FaChevronDown } from "react-icons/fa6";

import { useTheme } from "./ThemeContext";

import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";

import TobbyLogoBlack from "../assets/images/tobby-logo-black.png";
import TobbyLogoWhite from "../assets/images/tobby-logo-white.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { isDark } = useTheme();

  //Page Scroll Checker
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=''>
      <div className='mt-25 sm:mt-40 '>
        <div className='flex flex-wrap items-center '>
          <div className='w-full lg:w-1/2 flex flex-col gap-9'>
            <div className='max-[373px]:text-[28px] text-[30px]  max-sm:leading-13 sm:text-[42px] xl:text-5xl md:leading-15 text-center lg:text-start '>
              <p className=' bg-linear-to-r from-[#a9bdee] to-[#2563EB] text-transparent bg-clip-text  mb-2'>Hey, Nice to meet you! </p>
              <p>I'm Oluwatobi Wilson.</p>
              <p className='text-[20px] max-sm:leading-8 sm:text-[24px] md:leading-12 lg:leading-10 mt-5 max-lg:mx-10'>
                <span className='relative inline-block '>
                  <span className='invisible' aria-hidden='true'>
                    A frontend developer based in Nigeria. I am focused on designing a very clear, trusted digital platforms.
                  </span>

                  <span className='absolute top-0 left-0 w-full'>
                    <ReactTyped
                      strings={[
                        "A <span class='text-[#2563EB]'>&lt;/</span><span class='bg-linear-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text'>Frontend Developer</span><span class='text-[#2563EB]'>&gt;</span> based in Nigeria. I am focused on designing very clear, trusted digital platforms.",
                      ]}
                      typeSpeed={30}
                      contentType='html'
                    />
                  </span>
                </span>
              </p>
            </div>
            <p className='text-[16px] text-center lg:text-start mt-4 sm:mt-5'> Do you have a design you have to make urgently? I am just one step away!</p>
          </div>

          <div className='w-full lg:w-1/2 hidden lg:block'>
            <img src={isDark ? TobbyLogoWhite : TobbyLogoBlack} alt='Tobby Logo' />
          </div>
        </div>

        <div className='mt-8 pb-10 border-b border-border-gray'>
          <div className='flex justify-center lg:justify-start '>
            <Link to='/contact'>
              <div className='flex items-center justify-center rounded-full bg-linear-to-r from-gray-100 to-white dark:from-gray-100 dark:to-gray-200 px-5 py-3 text-[14px] md:text-[16px] text-[#2563EB] hover:scale-107 cursor-pointer transition-all duration-700 hover:text-[#192239]  gap-2'>
                Hire Me!
              </div>
            </Link>
          </div>
          <div className={` ${scrolled ? "flex animate-bounce transition-all duration-500" : "hidden"} justify-center pt-12`}>
            <FaChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
