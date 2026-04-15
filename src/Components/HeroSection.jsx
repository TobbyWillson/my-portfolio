import { FaChevronDown } from "react-icons/fa6";

import { useTheme } from "./ThemeContext";

import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";

import TobbyLogoBlack from "../assets/images/tobby-logo-black.png";
import TobbyLogoWhite from "../assets/images/tobby-logo-white.png";
import { Link } from "react-router-dom";
import TelegramVanish from "./Thanos";

import { useNavigate } from "react-router-dom";

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

  // Let's build something animation
  const [isHired, setIsHired] = useState(false);
  const [snapText, setSnapText] = useState({ name: "", text: "" });
  const navigate = useNavigate();

  const handleHireMe = () => {
    const urgencyText = "Have a project that needs to go live? I'm just one click away from turning your designs into reality.";

    setSnapText({ name: "urgency", text: urgencyText });

    setTimeout(() => {
      setIsHired(true);
      setSnapText({ name: "", text: "" });
    }, 800);

    setTimeout(() => {
      navigate("/contact");
    }, 3500);

    setTimeout(() => {
      setIsHired(false);
    }, 5000);
  };

  return (
    <div className=''>
      <div className='mt-25 max-[403px]:mt-20 sm:mt-35 '>
        <div className='flex flex-wrap items-center '>
          <div className='w-full lg:w-1/2 flex flex-col gap-9 max-[403px]:gap-6'>
            <div className='max-[373px]:text-[28px] text-[30px]  max-sm:leading-13 sm:text-[42px] xl:text-5xl md:leading-15 text-center lg:text-start '>
              <p className=' bg-linear-to-r from-[#a9bdee] to-[#2563EB] text-transparent bg-clip-text  mb-2'>Hey, Nice to meet you! </p>
              <p>I'm Oluwatobi Wilson.</p>
              <p className='text-[20px] max-sm:leading-8 sm:text-[24px] md:leading-12 lg:leading-10 mt-5 min-[866px]:mx-10 min-[940px]:mx-20 min-[1024px]:mx-auto'>
                <span className='relative inline-block '>
                  <span className='invisible' aria-hidden='true'>
                    A frontend developer based in Nigeria. I specialize in building clean, accessible, and high-performance digital platforms that users love.
                  </span>

                  <span className='absolute top-0 left-0 w-full'>
                    <ReactTyped
                      strings={[
                        "A <span class='text-[#2563EB]'>&lt;/</span><span class='bg-linear-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text'>Frontend Developer</span><span class='text-[#2563EB]'>&gt;</span> based in Nigeria. I specialize in building clean, accessible, and high-performance digital platforms that users love.",
                      ]}
                      typeSpeed={30}
                      contentType='html'
                    />
                  </span>
                </span>
              </p>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='relative min-h-[80px] flex items-center justify-center lg:text-start text-center overflow-hidden'>
                {!isHired ? (
                  <div className='relative w-full'>
                    {snapText.name === "urgency" && (
                      <div className='text-bg-text dark:text-white'>
                        <TelegramVanish text={snapText.text} onComplete={() => {}} />
                      </div>
                    )}

                    <p className={`min-[866px]:mx-20 min-[940px]:mx-30 min-[1024px]:mx-auto  transition-all duration-700 ease-out transform  ${snapText.name === "urgency" ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}`}>
                      Do you have a project that needs to go live? I'm just one click away from turning your designs into reality.
                    </p>
                  </div>
                ) : (
                  <div className='flex flex-col'>
                    <p className='mb-1'>Forwarding you to the contact page.</p>

                    <div className='flex flex items-center justify-center lg:text-start text-center'>
                      <p className='pr-3'>Loading contact page</p>
                      <span className='w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin'></span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='w-full lg:w-1/2 hidden lg:block'>
            <img src={isDark ? TobbyLogoWhite : TobbyLogoBlack} alt='Tobby Logo' />
          </div>
        </div>

        <div className='mt-8 pb-10 border-b border-border-gray'>
          <div className='flex justify-center lg:justify-start' onClick={handleHireMe}>
            <Link to=''>
              <div className='flex items-center justify-center rounded-full bg-linear-to-r from-gray-100 to-white dark:from-gray-100 dark:to-gray-200 px-5 py-3 text-[14px] md:text-[16px] text-[#2563EB] hover:scale-107 cursor-pointer transition-all duration-700 hover:text-[#192239]  gap-2'>
                Let's Build Something
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
