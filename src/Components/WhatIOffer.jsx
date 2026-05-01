import { Services } from "../constants/Materials";

const WhatIOffer = () => {
  return (
    <div className='mt-25'>
      <h1 className='text-[32px] text-center'>What I have to offer</h1>
      <h2 className='text-center dark:text-bg-text/60 '>Skills and expertise I bring to your team</h2>

      <div className='flex flex-wrap mt-15 gap-5'>
        {Services.map((service, id) => (
          <div className='w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] leading-7 bg-background ' key={id}>
            <div className='border border-border-gray rounded-xl py-4 px-5 hover:border-b-4  transition-all duration-300'>
              <h3 className='text-bg-text/70  text-[13px] tracking-[3px]'>{service.category} </h3>
              <p className='text-bg-text font-extrabold py-4'> {service.title} </p>
              <p className='text-bg-text/80'>{service.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIOffer;
