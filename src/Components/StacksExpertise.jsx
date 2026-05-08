import { useEffect } from "react";
import { experiences, Skills } from "../constants/Materials";
import { useTheme } from "./ThemeContext";

const StacksExpertise = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.1, rootMargin: "-50px 0px" },
    );

    document.querySelectorAll(".scroll-item-experience").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className=''>
      <div className='my-30'>
        <div className='mb-20 flex flex-col gap-4'>
          <h1 className='text-3xl sm:text-4xl text-center'>Tech Stack & Expertise</h1>
          <h2 className='text-[16px] dark:text-bg-text/60 text-center'>Technologies I have worked with to build magnificient interfaces, and scalable applications.</h2>
        </div>

        {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {experiences.map((experience, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${(2 - (index % 3)) * 100}ms` }}
              className={`scroll-item-experience ${isDark ? "bg-[#272f3a]" : "bg-gray-100 hover:bg-gray-50"} px-7  py-5 rounded-xl shadow-md dark:shadow-gray-50/10 hover:scale-107 dark:hover:bg-[#2f3844] transition-all duration-300`}
            >
              <div className='flex items-center gap-6'>
                <div className={` lg:text-2xl bg-linear-to-r from-white to-gray-300 dark:from-gray-400 dark:to-gray-600 ${experience.title === "Git" ? "text-[28px]" : "text-[20px]"} h-10 w-10 flex justify-center items-center rounded-full`}>{experience.logo}</div>
                <div className='flex flex-col gap-3'>
                  <h1 className='text-[28px] lg:text-[34px]'>{experience.title}</h1>
                  <p>{experience.years}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {Skills.map((skill, index) => (
            <div
              key={index}
              tabIndex={0}
              style={{ transitionDelay: `${(2 - (index % 3)) * 100}ms` }}
              className={`scroll-item-experience ${isDark ? "bg-[#272f3a]" : "bg-gray-100 hover:bg-gray-50"} px-5  py-5 rounded-xl  dark:shadow-gray-50/10 hover:md:border-b-5 hover:md:border-red-500/50 hover:md:scale-105  focus:border-b-5 focus:border-red-500/50 focus:scale-105 border-border-gray dark:hover:bg-[#2f3844] transition-all duration-300`}
            >
              <div className='flex items-center gap-6 mb-5 text-[22px]'>{skill.category}</div>

              <div className='flex flex-wrap gap-3'>
                {skill.items.map((item, index) => (
                  <div key={index} className='flex gap-2 items-center border border-border-gray rounded-2xl px-3 py-2 text-[13px]'>
                    <div>{item.logo}</div>
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StacksExpertise;
