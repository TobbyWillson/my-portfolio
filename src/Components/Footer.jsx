import { Link, useLocation, useNavigate } from "react-router-dom";
import { contactProfiles } from "../constants/Materials";
import { useState } from "react";

// import BookingModal from "./BookingModal";

const Footer = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [downloadMessage, setDownloadMessage] = useState("");
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

  const currentPage = useLocation().pathname;

  return (
    <div id=''>
      {/* Footer - AkinEbenezer */}
      {currentPage == "/contact" ? (
        ""
      ) : (
        <div className='flex justify-center -mt-15'>
          <p className='text-3xl backdrop-blur-3xl bg-background px-6'>Contact Me</p>
        </div>
      )}
      <div className='pt-20 pb-11 flex flex-col items-center'>
        <div className='dark:bg-[#272f3a] dark:text-bg-text  bg-gray-200 text-black rounded-lg p-8 flex flex-wrap min-[990px]:gap-5 items-center justify-center lg:justify-start'>
          <p className='font-medium text-[14px] text-wrap pb-5 md:pb-0'>Building something new, validating ideas, or looking for a collaboration? Let’s talk.</p>
          <p className='font-bold md:text-[24px] text-[20px]'>adepitantobi@gmail.com</p>
        </div>

        <div className=' p-8 grid grid-cols-3  sm:flex justify-center gap-15 '>
          {contactProfiles.map((profile, index) => (
            <a href={profile.href} key={index} aria-label={profile.label} className='group relative flex  justify-center' target='_blank' rel='noreferrer'>
              {profile.icon}
              <span className='absolute -bottom-10 scale-0 rounded-md bg-gray-800 p-2 text-nowrap text-xs text-white transition-all group-hover:scale-100 duration-900'>{profile.label}</span>
            </a>
          ))}
        </div>

        <div className='flex flex-col-reverse sm:flex-row gap-5 mt-15 justify-center items-center '>
          <Link to='https://drive.google.com/file/d/1wjAULdzK-zRENYCg6fB0hiL7u-7OS_6g/view?usp=drive_link' target='_blank' rel='noopener noreferrer' className=' text-bg-text text-[16px] flex items-center gap-2' onClick={handleDownload}>
            {isDownloading ? (
              <>
                Opening document
                <span className='w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin'></span>
              </>
            ) : (
              "View Resume"
            )}
          </Link>

          {/* onClick={setIsModalOpen} */}

          <Link to='/contact'>
            <div className='flex items-center justify-center rounded-full bg-linear-to-r from-gray-300 to-white px-5 py-3 text-[14px] md:text-[16px] text-[#2563EB]  hover:text-[#192239] hover:scale-107 cursor-pointer gap-2'>Let's build something</div>
          </Link>

          {/* <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
        </div>
        {/* <p className={`${downloadMessage ? "absolute translate-y-85 bg-gray-900 text-white p-5 rounded-xl shadow-2xl z-[100] transition-all duration-700" : ""} `}>{downloadMessage}</p> */}
      </div>
    </div>
  );
};

export default Footer;
