import { ArrowRight } from "lucide-react";
import { MdArrowRightAlt } from "react-icons/md";

import { Link } from "react-router-dom";

const BriefAbout = () => {
  return (
    <section className='border-t border-border-gray'>
      <h1 className='mx-auto text-center text-[32px] mb-10 -mt-6 bg-background w-fit px-5'>About Me</h1>
      <div className=' mb-20 bg-gray-100 dark:bg-[#272f3a] px-5 py-8  rounded-2xl'>
        <div className='flex flex-col gap-8 '>
          <h2 className='text-[18px]'>Hi, I'm Tobby Willson.</h2>
          <h3 className='leading-8'>
            I’m a Nigeria-based Frontend Developer who builds systems that scale. From fintech to logistics, I specialize in translating complex product ideas into clean, high-performance web applications. I don’t just build interfaces, I simplify complex workflows into seamless user experiences.
          </h3>

          <div className='text-bg-text/90 border w-fit rounded-sm bg-background/40 hover:md:scale-103 transition-all duration-500'>
            <Link to='/about' className='flex  items-center gap-1 px-3 py-2 '>
              <p>Learn more</p>
              <MdArrowRightAlt />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefAbout;
