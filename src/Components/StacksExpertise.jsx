import { useEffect } from "react";
import { experiences } from "../constants/Materials";
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
    <div className='overflow-x-hidden'>
      <div className='my-30'>
        <div className='mb-20 flex flex-col gap-4'>
          <p className='text-3xl sm:text-4xl text-center'>Tech Stack & Expertise</p>
          <p className='text-sm sm:text-md dark:text-gray-100/60 text-center'>Technologies I have worked with to build magnificient products</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {experiences.map((experience, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${(2 - (index % 3)) * 100}ms` }}
              className={`scroll-item-experience ${isDark ? "bg-[#272f3a]" : "bg-gray-100 hover:bg-gray-50"} px-7  py-5 rounded-xl shadow-md dark:shadow-gray-50/10 hover:scale-107 dark:hover:bg-[#2f3844] transition-all duration-300`}
            >
              <div className='flex items-center gap-6'>
                <div className='text-[20px] lg:text-2xl bg-linear-to-r from-white to-gray-300 dark:from-gray-400 dark:to-gray-600 h-10 w-10 flex justify-center items-center rounded-full'>{experience.logo}</div>
                <div className='flex flex-col gap-3'>
                  <h1 className='text-[28px] lg:text-[34px]'>{experience.title}</h1>
                  <p>{experience.years}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StacksExpertise;
