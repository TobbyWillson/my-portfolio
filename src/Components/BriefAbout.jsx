import { ArrowRight } from "lucide-react";
import { MdArrowRightAlt } from "react-icons/md";

import { Link } from "react-router-dom";

const BriefAbout = () => {
  return (
    <section>
      <div className='flex flex-col gap-8 mb-20'>
        <h1 className='text-center text-[32px]'>About Me</h1>
        <h2 className='text-[18px]'>Hi, I'm Tobby Wilson.</h2>
        <h3>
          I’m a Nigeria-based Frontend Developer who builds systems that scale. From fintech to logistics, I specialize in translating complex product ideas into clean, high-performance web applications. I don’t just build interfaces, I simplify complex workflows into seamless user experiences.
        </h3>

        <div className='text-bg-text/70 border w-fit '>
          <Link to='/contact' className='flex  items-center gap-1 p-2'>
            <p>Read more about me</p>
            <MdArrowRightAlt />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BriefAbout;
