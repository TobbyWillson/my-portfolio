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
import { Contact } from "lucide-react";

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
    <div className='max-[420px]:px-3'>
      <div className='mt-17  sm:mt-33 '>
        <div className='flex flex-wrap items-center '>
          <div className='w-full lg:w-1/2 flex flex-col gap-5 '>
            {/* Open to opportunities */}
            <OpenTo />
            <div className='sm:text-[42px] xl:text-5xl md:leading-15   '>
              <p className='text-[48px] max-[462px]:text-[45px] max-[450px]:text-[42px] max-[420px]:text-[38px] max-[406px]:text-[35px] max-[389px]:text-[33px] font-extrabold '>I'm Tobby Willson.</p>
              <p className='text-[32px] max-[420px]:text-[30px] max-[408px]:text-[26px] font-bold'>
                A <ReactTyped strings={["Frontend Developer.", "React Specialist.", "UI Engineer."]} typeSpeed={40} backSpeed={30} loop />
              </p>
              <p className='max-sm:leading-8 text-[18px] sm:text-[24px] md:leading-10 mt-5 min-[866px]:pr-10 min-[940px]:pr-20 min-[1024px]:mx-auto dark:text-white/80'>
                I specialize in React, Next.js, and modern UI Systems to create seamless digital experiences that are both functional and visually refined.
              </p>
            </div>

            <div className='dark:text-white/70 text-[14px]'>
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

        <div className='mt-8 pb-10 border-b border-border-gray flex flex-col  min-[430px]:flex-row  min-[430px]:items-center gap-4'>
          <div className='flex w-fit' onClick={handleHireMe}>
            <button to=''>
              <div className='bg-[#586583] dark:bg-[#2763a0] border border-border-gray rounded-2xl  px-5 py-3 text-white text-[14px] md:text-[16px] flex justify-center items-center hover:scale-107 cursor-pointer transition-all duration-700  hover:bg-[#556daf]  gap-2'>
                <div>
                  <Contact className='w-5 h-5' />
                </div>
                <p>Contact me</p>
              </div>
            </button>
          </div>

          <div className='w-fit'>
            <Link to='https://drive.google.com/file/d/1wjAULdzK-zRENYCg6fB0hiL7u-7OS_6g/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>
              <p className=' flex items-center gap-2 rounded-2xl  px-5 py-3 text-[14px] md:text-[16px] border border-border-gray text-bg-text hover:scale-107 cursor-pointer transition-all duration-700 ' onClick={handleDownload}>
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
              </p>
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
