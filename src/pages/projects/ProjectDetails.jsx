import { useNavigate, useParams } from "react-router-dom";
// We keep this name for the data array
import { previousProjects } from "../../constants/Materials";
import { MdArrowBack } from "react-icons/md";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const { id } = useParams();

  //
  const project = previousProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className='min-h-[60vh] flex flex-col items-center justify-center text-center px-4'>
        {/* Visual Element: A subtle 404 background or icon */}
        <h1 className='text-9xl font-bold text-gray-200 dark:text-gray-700/40 absolute z-0 animate-pulse'>404</h1>

        <div className='z-10 flex flex-col items-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#677697] mb-4'>Project Not Found</h2>
          <p className='text-gray-500 mb-8 max-w-md mx-auto'>The project you're looking for doesn't exist or may have been moved. Double check the URL or head back to the projects section.</p>

          <Link to='/#projects' className='flex justify-center items-center gap-2 w-fit bg-[#586583] hover:bg-[#556daf] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 shadow-lg hover:shadow-[#556daf]/20'>
            <MdArrowBack />
            Back to Projects
          </Link>
        </div>
      </motion.div>
    );
  }

  const { hero, overview, research, problemDefinition, process, solution, results, nextSteps } = project.caseStudy;

  return (
    <div className='mt-18 max-w-3xl mx-auto'>
      <div onClick={goBack} className='flex gap-2 items-center text-[13px] mb-10 cursor-pointer'>
        <MdArrowBack />
        <p>go back</p>
      </div>

      <p className='mb-5 text-bg-text/70'>Case Study - {project.projectName}</p>

      <div className='flex flex-col gap-5 mb-6'>
        <h1 className='text-[28px] font-bold '>{hero.title}</h1>
        <h2 className='text-[18px]  '>{hero.subtitle}</h2>

        <div className='flex flex-col gap-2 mb-6'>
          <p className='text-[16px] font-bold border border-border-gray px-3 py-2 rounded-lg'>
            Role: <span className='font-normal text-[14px]'> {hero.role}</span>
          </p>
          <p className='text-[16px] font-bold border border-border-gray px-3 py-2 rounded-lg'>
            Duration: <span className='font-normal text-[14px]'> {hero.duration}</span>
          </p>
          <p className='text-[16px] font-bold border border-border-gray px-3 py-2 rounded-lg'>
            Team: <span className='font-normal text-[14px]'> {hero.team}</span>
          </p>

          <div className='flex flex-wrap gap-2 items-center border border-border-gray px-3 py-2 rounded-lg'>
            <p className='text-[16px] font-bold'>Tools:</p>
            {hero.tools.map((tool, index) => (
              <h3 key={index} className='font-normal text-[14px] border border-border-gray px-3 py-1 rounded-lg'>
                {tool}
              </h3>
            ))}
          </div>
        </div>
        <img src={project.projectPreview} alt={project.projectName} className='w-full rounded-xl mb-6' />
      </div>

      {/* Overview of the Project */}
      <p className='mb-5 text-[22px] font-bold'>Overview</p>
      <div className='flex flex-col md:flex-row gap-5 mb-6'>
        <div className='flex flex-col gap-3 border border-border-gray bg-background rounded-lg px-3 p-2'>
          <p className='text-[16px] font-bold '>Context:</p>
          <h4 className='text-[14px] text-bg-text/80'> {overview.context}</h4>
        </div>

        <div className='flex flex-col gap-3 border border-border-gray bg-background rounded-lg px-3 p-2'>
          <p className='text-[16px] font-bold'>Problem:</p>
          <h4 className='text-[14px] text-bg-text/80'> {overview.problem}</h4>
        </div>

        <div className='flex flex-col gap-3 border border-border-gray bg-background rounded-lg px-3 p-2'>
          <p className='text-[16px] font-bold'>Goal:</p>
          <h4 className='text-[14px] text-bg-text/80'> {overview.goal}</h4>
        </div>
      </div>

      {/* Project Research */}
      <p className='mb-5 text-[22px] font-bold'>Research</p>
      <div className='grid md:grid-cols-2 gap-5 mb-6'>
        <div className='flex flex-col gap-3 border border-border-gray bg-background rounded-lg px-3 p-2'>
          <p className='text-[16px] font-bold'>Methods:</p>
          {research.methods.map((method, index) => (
            <h2 className='text-[14px] text-bg-text/80 border-l-2 border-border-gray px-2 py-1 rounded-l' key={index}>
              {" "}
              {method}
            </h2>
          ))}
        </div>

        <div className='flex flex-col gap-3 border border-border-gray bg-background rounded-lg px-3 p-2'>
          <p className='text-[16px] font-bold'>Insights:</p>
          {research.insights.map((insight, index) => (
            <h2 className='text-[14px] text-bg-text/80 border-l-2 border-border-gray px-2 py-1 rounded-l' key={index}>
              {" "}
              {insight}
            </h2>
          ))}
        </div>
      </div>

      {/* definition of the problem */}
      <p className='mb-5 text-[22px] font-bold'>Problem Definition</p>
      <div className='grid md:grid-cols-2 gap-5 mb-6'>
        <div className='flex flex-col gap-3 border border-border-gray bg-background rounded-lg px-3 p-2'>
          <p className='text-[16px] font-bold'>Pain Points:</p>
          {problemDefinition.painPoints.map((painPoint, index) => (
            <h2 className='text-[14px] text-bg-text/80 border-l-2 border-border-gray px-2 py-1 rounded-l' key={index}>
              {" "}
              {painPoint}
            </h2>
          ))}
        </div>

        <div className='flex flex-col gap-3 border border-border-gray bg-background rounded-lg px-3 p-2'>
          <p className='text-[16px] font-bold'>Statement:</p>
          <h2 className='text-[14px] text-bg-text/80'>{problemDefinition.statement}</h2>
        </div>
      </div>

      {/*Design Process */}
      <p className='mb-5 text-[22px] font-bold'>Process</p>
      <div className=' grid md:grid-cols-2 gap-5 mb-6'>
        <div className='flex flex-col gap-3 border border-border-gray bg-background rounded-lg px-3 p-2'>
          <p className='text-[16px] font-bold'>Ideas:</p>
          {process.ideas.map((idea, index) => (
            <h2 className='text-[14px] text-bg-text/80 border-l-2 border-border-gray px-2 py-1 rounded-l' key={index}>
              {" "}
              {idea}
            </h2>
          ))}
        </div>

        <div className='flex flex-col gap-3 border border-border-gray bg-background rounded-lg px-3 p-2'>
          <p className='text-[16px] font-bold'>Iterations:</p>
          {process.iterations.map((iteration, index) => (
            <h2 className='text-[14px] text-bg-text/80 border-l-2 border-border-gray px-2 py-1 rounded-l' key={index}>
              {" "}
              {iteration}
            </h2>
          ))}
        </div>
      </div>

      {/*Design Solutions */}
      <p className='mb-5 text-[22px] font-bold'>Solution</p>
      <div className=' grid md:grid-cols-2 gap-5 mb-6'>
        <div className='flex flex-col gap-3 border border-border-gray bg-background rounded-lg px-3 p-2'>
          <p className='text-[16px] font-bold'>Features:</p>
          {solution.features.map((feature, index) => (
            <h2 className='text-[14px] text-bg-text/80 border-l-2 border-border-gray px-2 py-1 rounded-l' key={index}>
              {" "}
              {feature}
            </h2>
          ))}
        </div>

        <div className='flex flex-col gap-3 border border-border-gray bg-background rounded-lg px-3 p-2'>
          <p className='text-[16px] font-bold'>Decisions:</p>
          {solution.decisions.map((decision, index) => (
            <h2 className='text-[14px] text-bg-text/80 border-l-2 border-border-gray px-2 py-1 rounded-l' key={index}>
              {" "}
              {decision}
            </h2>
          ))}
        </div>
      </div>

      {/*Design Results */}
      <p className='mb-5 text-[22px] font-bold'>Results</p>
      <div className='grid md:grid-cols-2 gap-5 mb-6'>
        <div className='flex flex-col gap-3 border border-border-gray bg-background rounded-lg px-3 p-2'>
          <p className='text-[16px] font-bold'>Metrics:</p>
          {results.metrics.map((metric, index) => (
            <h2 className='text-[14px] text-bg-text/80 border-l-2 border-border-gray px-2 py-1 rounded-l' key={index}>
              {" "}
              {metric}
            </h2>
          ))}
        </div>

        <div className='flex flex-col gap-3 border border-border-gray bg-background rounded-lg px-3 p-2'>
          <h2 className='text-[16px] font-bold'>Qualitative:</h2>
          <p className='text-[14px] text-bg-text/80'>{results.qualitative}</p>
        </div>
      </div>

      {/*Next Steps */}
      <p className='mb-5 text-[22px] font-bold'>Next Steps:</p>
      <div className='flex flex-col gap-5 mb-6'>
        <div className='flex flex-col gap-3 border border-border-gray bg-background rounded-lg px-3 p-2'>
          {nextSteps.map((nextStep, index) => (
            <h2 className='text-[14px] text-bg-text/80 border-l-2 border-border-gray px-2 py-1 rounded-l' key={index}>
              {" "}
              {nextStep}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
