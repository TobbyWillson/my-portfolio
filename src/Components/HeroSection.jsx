import { FaChevronRight } from "react-icons/fa6";

import { useTheme } from "./ThemeContext";

import { ReactTyped } from "react-typed";
import { useState, useEffect, useRef } from "react";

import TobbyLogoBlack from "../assets/images/tobby-logo-black.png";
import TobbyLogoWhite from "../assets/images/tobby-logo-white.png";
import { Link } from "react-router-dom";
import TelegramVanish from "./Thanos";

import { useNavigate } from "react-router-dom";
import OpenTo from "./OpenTo";

const HeroSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    // setDownloadMessage("Resumé is opening...");

    // setTimeout(() => {
    //   setDownloadMessage("");
    // }, 5000);

    setIsDownloading(true);

    setTimeout(() => {
      setIsDownloading(false);
    }, 4000);
  };

  const { isDark } = useTheme();

  // //Page Scroll Checker
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 2);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // Let's build something animation
  const urgencyRef = useRef(null);

  const [isHired, setIsHired] = useState(false);
  const [snapText, setSnapText] = useState({ name: "", text: "" });
  const navigate = useNavigate();

  const urgencyText = "Have a project that needs to go live? I'm just one click away from turning your designs into reality.";
  const handleHireMe = () => {
    setSnapText({ name: "urgency", text: urgencyText });

    setTimeout(() => {
      setIsHired(true);
      setSnapText({ name: "", text: "" });
    }, 800);

    setTimeout(() => {
      navigate("/contact");
    }, 4500);

    // setTimeout(() => {
    //   setIsHired(false);
    // }, 5000);
  };

  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isHired) return;

    const t0 = setTimeout(() => setStep(1), 50);
    const t1 = setTimeout(() => setStep(0), 1500);
    const t2 = setTimeout(() => setStep(2), 2000);
    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isHired]);

  return (
    <div className=''>
      <div className='mt-17  sm:mt-33 '>
        <div className='flex flex-wrap items-center '>
          <div className='w-full lg:w-1/2 flex flex-col gap-5 max-[362px]:gap-5'>
            {/* Open to opportunities */}
            <OpenTo />
            <div className='max-[375px]:text-[23px] max-[424px]:text-[26px] text-[30px]  sm:text-[42px] xl:text-5xl md:leading-15   '>
              <p>
                <span className=' bg-linear-to-r from-[#a9bdee] to-[#2563EB] text-transparent bg-clip-text  mb-2'>Hey, </span>
                I'm Oluwatobi Wilson.
              </p>
              A <span class='text-[#2563EB]'>&lt;/</span>
              <span class='bg-linear-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text'>Frontend Developer..</span>
              <span class='text-[#2563EB]'>&gt;</span>
              <p className='text-[20px] max-sm:leading-8 sm:text-[24px] md:leading-12 lg:leading-10 mt-5 min-[866px]:pr-10 min-[940px]:pr-20 min-[1024px]:mx-auto dark:text-white/70'>
                <span className='relative inline-block '>
                  <span className='invisible' aria-hidden='true'>
                    I specialize in React, Next.js, and modern UI Systems to create seamless digital experiences that are both functional and visually refined.
                  </span>

                  <span className='absolute top-0 left-0 w-full'>
                    <ReactTyped strings={[" I specialize in React, Next.js, and modern UI Systems to create seamless digital experiences that are both functional and visually refined."]} typeSpeed={40} contentType='html' />
                  </span>
                </span>
              </p>
            </div>

            <div className='dark:text-white/70'>
              <div className='relative min-h-[80px] flex items-center  overflow-hidden'>
                {!isHired ? (
                  <div className='relative w-full'>
                    {snapText.name === "urgency" && (
                      <div className='text-bg-text dark:text-white'>
                        <TelegramVanish text={snapText.text} containerRef={urgencyRef} onComplete={() => {}} />
                      </div>
                    )}

                    <p className={`min-[866px]:pr-20 min-[940px]:pr-30 min-[1024px]:mx-auto  transition-all duration-700 ease-out transform pt-4 ${snapText.name === "urgency" ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}`} ref={urgencyRef}>
                      {urgencyText}
                    </p>
                  </div>
                ) : (
                  isHired && (
                    <div className='relative flex flex-col w-full'>
                      <p
                        className='absolute inset-0 transition-all duration-300 ease-in-out'
                        style={{
                          opacity: step === 1 ? 1 : 0,
                          transform: step === 1 ? "translateY(0)" : "translateY(-12px)",
                          pointerEvents: "none",
                        }}
                      >
                        Forwarding you to the contact page...{" "}
                      </p>

                      <div
                        className='absolute inset-0 flex items-center lg:justify-start  transition-all duration-300 ease-in-out'
                        style={{
                          opacity: step === 2 ? 1 : 0,
                          transform: step === 2 ? "translateY(0)" : "translateY(12px)",
                          pointerEvents: "none",
                        }}
                      >
                        <p className='pr-2'>Loading contact page</p>
                        <span className='w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin'></span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className='w-full lg:w-1/2 hidden lg:block'>
            <img src={isDark ? TobbyLogoWhite : TobbyLogoBlack} alt='Tobby Logo' />
          </div>
        </div>

        <div className='mt-8 pb-10 border-b border-border-gray flex flex-col  min-[600px]:flex-row gap-4'>
          <div className='flex ' onClick={handleHireMe}>
            <button to=''>
              <div className='border border-border-gray dark:border-0 rounded-2xl bg-linear-to-r from-gray-100 to-white dark:from-gray-100 dark:to-gray-200 px-5 py-3 text-[14px] md:text-[16px] text-[#2563EB] hover:scale-107 cursor-pointer transition-all duration-700 hover:text-[#192239]  gap-2'>
                Let's Build Something
              </div>
            </button>
          </div>

          <div>
            <Link to='https://drive.google.com/file/d/1wjAULdzK-zRENYCg6fB0hiL7u-7OS_6g/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>
              <div className='w-fit flex items-center gap-2 rounded-2xl  px-5 py-3 text-[14px] md:text-[16px] border border-border-gray text-bg-text hover:scale-107 cursor-pointer transition-all duration-700 ' onClick={handleDownload}>
                {isDownloading ? (
                  <>
                    Opening document
                    <span className='w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin'></span>
                  </>
                ) : (
                  <>
                    View Resume <FaChevronRight />
                  </>
                )}
              </div>
            </Link>
          </div>
          {/* <div className={` ${scrolled ? "flex animate-bounce transition-all duration-500" : "hidden"} justify-center pt-12`}>
            <FaChevronDown />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
