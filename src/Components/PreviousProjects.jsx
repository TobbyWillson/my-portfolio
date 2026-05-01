import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

import { useTheme } from "./ThemeContext";
import { previousProjects } from "../constants/Materials";

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const PreviousProjects = () => {
  const { isDark } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.1, rootMargin: "-50px 0px" },
    );

    document.querySelectorAll(".scroll-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location]);

  return (
    <div id='projects'>
      <div className='mb-30'>
        <div className='mb-20 flex flex-col gap-4'>
          <p className='text-3xl sm:text-4xl text-center tracking-[4px]'>Selected Projects</p>
          <p className='text-[16px]  dark:text-bg-text/60  text-center'>Selection of projects I have previously worked on across frontend development.</p>
        </div>

        <div className='flex flex-wrap gap-7'>
          {previousProjects.map((project, index) => (
            <div key={project.projectName} className='w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]'>
              <article
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
                className={`scroll-item  group flex flex-col overflow-hidden rounded-xl shadow-md dark:shadow-gray-50/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-gray-50/15 ${isDark ? "bg-[#272f3a] dark:hover:bg-[#2f3844]" : "bg-gray-100 hover:bg-gray-50"}`}
              >
                <div className='relative aspect-[16/10] overflow-hidden bg-gray-200 dark:bg-gray-800'>
                  <img src={project.projectPreview} alt={project.alt} className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110' loading='lazy' />
                  <div className='pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-80' />
                </div>

                <div className='flex flex-1 flex-col gap-4 p-6 pt-5'>
                  <div className='flex flex-wrap gap-2'>
                    {project.tools.map((tag) => (
                      <span key={tag} className='rounded-full border border-border-gray px-3 py-0.5 text-xs font-medium text-bg-text/80 dark:text-gray-200/80 hover:bg-background'>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className='flex flex-col gap-2'>
                    <h2 className='text-xl font-semibold tracking-tight sm:text-2xl'>{project.projectName}</h2>
                    <p className='text-sm leading-relaxed text-bg-text/75 dark:text-gray-100/65 line-clamp-3'>{project.projectDescription}</p>
                  </div>

                  <div className='flex flex-wrap gap-3 pt-1'>
                    {project.liveUrl == "" ? (
                      <div className='inline-flex items-center gap-2 rounded-lg bg-[#586583] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#556daf]'> No Link Available </div>
                    ) : (
                      <a href={project.liveUrl} target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 rounded-lg bg-[#586583] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#556daf]'>
                        View Website
                        {project.liveUrl == "" ? "" : <FaArrowUpRightFromSquare className='h-3.5 w-3.5 opacity-90' aria-hidden />}
                      </a>
                    )}
                    <a href={project.repoUrl} target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 rounded-lg border border-border-gray px-4 py-2 text-sm font-medium transition hover:border-[#2563EB]/50 hover:text-[#2563EB] dark:hover:text-[#a9bdee]'>
                      <FaGithub className='h-4 w-4' aria-hidden />
                      Source Code
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviousProjects;
