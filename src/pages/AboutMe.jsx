import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { aboutConfigs } from "../constants/Materials";

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
    } else {
      return "Good Evening";
    }
  };

  // WhatsApp link and message

  const phoneNumber = "2348036524258";
  const message = encodeURIComponent(`${checkTimeOfDay()}, Tobby!`);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className='' id='about'>
      {/* Current Page Bar */}

      <div className=' max-w-3xl mx-auto'>
        <div className=' mx-auto '>
          <div className=' mt-20 md:px-10'>
            {/* <img src='' alt='' className='' /> */}
            <div className=' border-b border-border-gray pb-5 rounded-lg'>
              {aboutConfigs.map((about, index) => (
                <div className='flex flex-col justify-center items-center gap-4' key={index}>
                  <p className='text-[28px] sm:text-3xl lg:text-4xl'>
                    {about.greeting}, {checkTimeOfDay()}
                  </p>
                  <p className='text-[14px] text-center sm:text-[20px]'>{about.welcomeMsg}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Details on what I do */}
          <div id='resume' className='md:px-10   '>
            {aboutConfigs.map((about, index) => (
              <div key={index} className='flex flex-col gap-8 leading-8 mt-15'>
                <h1 className='font-extrabold '>{about.aboutMe}</h1>

                {about.whatIDo.map((what, index) => (
                  <p className=''> {what} </p>
                ))}

                <p>
                  <span className='font-semibold'>{about.expertise}</span>
                  <br />
                  <br />
                  {about.whatIBuild}
                </p>

                <div className='text-start sm:text-justify '>
                  <span className='font-semibold'> {about.aprroachTitle}</span>
                  <ul className='ml-10 list-disc -indent-5 '>
                    {about.approaches.map((approach, index) => (
                      <li className='list-inside' key={index}>
                        {approach}
                      </li>
                    ))}
                  </ul>
                </div>

                <p>{about.whoIWorkWith}</p>
                <p>{about.involvement}</p>
              </div>
            ))}
          </div>

          <div className='flex flex-col-reverse sm:flex-row gap-4 justify-center md:justify-start items-center mt-15 mb-25 md:px-10'>
            <Link to='https://drive.google.com/file/d/1wjAULdzK-zRENYCg6fB0hiL7u-7OS_6g/view?usp=drive_link' target='_blank' rel='noopener noreferrer' className=' text-[16px] hover:scale-105 transition-all duration-700 flex items-center gap-2' onClick={handleDownload}>
              {isDownloading ? (
                <>
                  <p className='text-bg-text'>Opening document</p>
                  <span className='w-4 h-4 border-2 border-current border-t-transparent rounded-full  text-bg-text animate-spin'></span>
                </>
              ) : (
                <p className='bg-background border border-border-gray flex justify-center px-5 py-3 rounded-2xl text-[14px] md:text-[16px]  min-w-[140px]'>My Resume</p>
              )}
            </Link>

            <Link to='/contact' className='max-sm:'>
              <p className='flex items-center justify-center rounded-2xl bg-[#586583] dark:bg-[#2763a0] px-5 py-3 text-[14px] md:text-[16px] text-white  hover:scale-107 transition-all duration-700 cursor-pointer gap-2 min-w-[140px]'>Contact me</p>
            </Link>
          </div>
          {/* <p className={`${downloadMessage ? "absolute -translate-y-45 bg-gray-900 text-white p-4 rounded-xl shadow-2xl  transition-all duration-700" : ""} `}>{downloadMessage}</p> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
