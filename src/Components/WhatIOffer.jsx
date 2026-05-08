import { motion } from "framer-motion";
import { Services } from "../constants/Materials";

const WhatIOffer = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <div className='mt-25'>
      <h1 className='text-[32px] text-center'>What I have to offer</h1>
      <h2 className='text-center dark:text-bg-text/60 '>Skills and expertise I bring to your team</h2>

      <motion.div variants={container} initial='hidden' whileInView='show' exit='hidden' viewport={{ once: false, amount: 0.2 }} className='flex flex-wrap mt-15 gap-5'>
        {Services.map((service, id) => (
          <div className='w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] leading-7 bg-background relative' key={id}>
            <motion.div
              key={id}
              variants={item}
              whileHover={{ y: -5 }}
              tabIndex={0}
              className={`group border border-border-gray rounded-xl py-4 px-5 hover:md:border-b-4 hover:md:border-b-red-500/30  focus:border-b-4 focus:border-b-red-500/30 focus:scale-107 transition-all duration-500 ${service.id === 1 ? "border-l-4 border-l-red-500/80" : ""}`}
            >
              <h3 className='text-bg-text/70  text-[13px] tracking-[3px]'>{service.category} </h3>
              <p className='text-bg-text font-extrabold py-4'> {service.title} </p>
              <p className='text-bg-text/80'>{service.body}</p>
              <p className='absolute top-1 right-3 text-[11px] text-gray-500'>{service.id === 1 ? "core" : ""}</p>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhatIOffer;
