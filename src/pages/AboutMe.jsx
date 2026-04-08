import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AboutMe = () => {
  // const [downloadMessage, setDownloadMessage] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    // setDownloadMessage("Resumé is downloading...");

    // setTimeout(() => {
    //   setDownloadMessage("");
    // }, 5000);

    setIsDownloading(true);

    setTimeout(() => {
      setIsDownloading(false);
    }, 4000);
  };

  const time = new Date().getHours();

  const checkTimeOfDay = () => {
    if (time >= 0 && time < 12) {
      return "Good Morning";
    } else if (time >= 12 && time < 16) {
      return "Good Afternoon";
    } else if (time > 16) {
      return "Good Evening";
    } else {
      return Hello;
    }
  };

  return (
    <div className=''>
      {/* Current Page Bar */}

      <div className=' '>
        <div className='container mx-auto px-3'>
          <div className=' mt-30 md:px-10'>
            {/* <img src='' alt='' className='' /> */}
            <div className='flex flex-col justify-center items-center gap-4 border-b border-border-gray pb-5 rounded-lg'>
              <p className='text-2xl sm:text-3xl lg:text-4xl'>Hi, {checkTimeOfDay()}</p>
              <p className='text-[14px] text-center sm:text-[20px]'>You are welcome to read and understand more about me!</p>
            </div>
          </div>

          {/* Details and Biography */}
          <div id='resume' className='md:px-10 font-manrope flex flex-col text-justify gap-8 leading-8 mt-15 '>
            <p className='font-extrabold '>I am Oluwatobi Wilson, a frontend developer from Ondo State, Nigeria.</p>
            <p className=''>
              I build scalable, high-performance web applications that translate complex product ideas into clean, intuitive user interfaces. My work spans fintech, logistics, commerce, and education platforms—developing systems that balance user experience with real business needs.
            </p>
            <p>
              <span className='font-semibold'>Beyond writing code, I think in systems. I approach frontend development as part of a larger product ecosystem, ensuring that interfaces are not only visually clear, but structured, maintainable, and scalable.</span>
              <br />
              <br />
              From crypto platforms to logistics dashboards, accounting systems, and digital learning tools, I specialize in simplifying complex workflows into seamless user experiences.
            </p>

            <p className='text-start sm:text-justify '>
              <span className='font-semibold'> My approach combines:</span>
              <ul className='ml-10 list-disc -indent-5 '>
                <li className='list-inside'>Structured component design over isolated UI elements</li>
                <li className='list-inside'>Business-aware development over surface-level styling </li>
                <li className='list-inside'> Performance and usability over unnecessary complexity</li>
              </ul>
            </p>

            <p>I work closely with designers, engineers, and stakeholders to turn ideas into reliable, user-focused products that are ready to scale.</p>
            <p>If it involves complex flows, real users, or high-impact systems, I’m interested</p>
          </div>

          <div className='flex flex-col-reverse sm:flex-row gap-4 justify-center md:justify-start items-center mt-15 mb-25 md:px-10'>
            <Link to='https://drive.google.com/file/d/1wjAULdzK-zRENYCg6fB0hiL7u-7OS_6g/view?usp=drive_link' target='_blank' rel='noopener noreferrer' className='text-[#192239] text-[16px] hover:scale-105 transition-all duration-700 flex items-center gap-2' onClick={handleDownload}>
              {isDownloading ? (
                <>
                  Opening document
                  <span className='w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin'></span>
                </>
              ) : (
                <div className='bg-[#DCEFFF] flex justify-center px-5 py-3 rounded-full'>My Resume</div>
              )}
            </Link>

            <button to='/' className='max-sm:'>
              <div className='flex items-center justify-center rounded-full bg-linear-to-r from-gray-100 to-white dark:from-gray-100 dark:to-gray-200 px-5 py-3 text-[14px] md:text-[16px] text-[#2563EB] hover:text-[#192239] hover:scale-107 transition-all duration-700 cursor-pointer gap-2'>
                <FaWhatsapp className='w-5 h-5' />
                WhatsApp Me!
              </div>
            </button>
          </div>
          {/* <p className={`${downloadMessage ? "absolute -translate-y-45 bg-gray-900 text-white p-4 rounded-xl shadow-2xl  transition-all duration-700" : ""} `}>{downloadMessage}</p> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
