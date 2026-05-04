import { useNavigate, useParams } from "react-router-dom";
// We keep this name for the data array
import { previousProjects } from "../../constants/Materials";
import { MdArrowBack } from "react-icons/md";

const ProjectDetails = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const { id } = useParams();

  //
  const project = previousProjects.find((p) => p.id === id);

  const { hero, overview, research, problemDefinition, process, solution, results, reflection, nextSteps } = project.caseStudy;

  if (!project) return <h2 className='text-center py-20'>Project not found</h2>;

  return (
    <div className='mt-8  py-10 px-5'>
      <div onClick={goBack} className='flex gap-2 items-center text-[13px] mb-10'>
        <MdArrowBack />
        <p>go back</p>
      </div>

      <p className='mb-5 text-bg-text/70'>Case Study</p>

      <div className='flex flex-col gap-5 mb-6'>
        <h1 className='text-[28px] font-bold '>{hero.title}</h1>
        <h2 className='text-[18px]  '>{hero.subtitle}</h2>

        <div className='flex flex-col gap-2 mb-6'>
          <p className='text-[16px] font-bold'>
            Role: <span className='font-normal text-[14px]'> {hero.role}</span>
          </p>
          <p className='text-[16px] font-bold'>
            Duration: <span className='font-normal text-[14px]'> {hero.duration}</span>
          </p>
          <p className='text-[16px] font-bold'>
            Team: <span className='font-normal text-[14px]'> {hero.team}</span>
          </p>

          <div className='flex gap-4 items-center'>
            <p className='text-[16px] font-bold'>Tools:</p>
            {hero.tools.map((tool, index) => (
              <h3 key={index} className='font-normal text-[14px]'>
                {tool}
              </h3>
            ))}
          </div>
        </div>
        <img src={project.projectPreview} alt={project.projectName} className='w-full rounded-xl mb-6' />
      </div>

      {/* Overview of the Project */}
      <p className='mb-5 text-[22px] font-bold'>Overview</p>
      <div className='flex flex-col gap-5 mb-6'>
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
      <div className='flex flex-col gap-5 mb-6'>
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
      <div className='flex flex-col gap-5 mb-6'>
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
      <div className='flex flex-col gap-5 mb-6'>
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
      <div className='flex flex-col gap-5 mb-6'>
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
      <div className='flex flex-col gap-5 mb-6'>
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
