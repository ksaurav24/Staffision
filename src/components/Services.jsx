import React from "react";
import bubble from "../assets/bubble.webp";
import { motion } from "framer-motion";
import { services } from "../data";
const Services = () => {
  return (
    <div data-scroll>
      <motion.img
        initial={{ x: 120, scale: 0.2, opacity: 0.5 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0,
          ease: "easeInOut",
        }}
        className="absolute -z-10 lg:w-[30vw] w-[70vw] top-[30px] lg:-right-[12vw] -right-[26vw]"
        src={bubble}
        alt="bubble"
      />
      <motion.img
        initial={{ x: -120, scale: 0.2, opacity: 0.5 }}
        animate={{ x: -20, rotate: 180, scale: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0,
          ease: "easeInOut",
        }}
        className="absolute top-[300px] rotate-180 -z-10 lg:w-[20vw] w-[70vw] -left-36"
        src={bubble}
        alt="bubble"
      />
      <div className="w-screen relative">
        <div className="flex flex-col justify-center items-center my-20">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0,
              ease: "easeInOut",
            }}
            className="text-5xl my-2 text-center merriweather-bold"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeInOut",
            }}
            className="text-md my-4 text-zinc-700 poppins-regular text-center lg:px-0 px-14 lg:w-[50%] mt-4"
          >
           Staffision delivers a comprehensive suite of HR solutions designed to address the talent needs of businesses and empower career advancement for job seekers. We are your trusted partner in navigating the ever-evolving landscape of human resources.
          </motion.p>
        </div>
        <div className="">
          <div className="flex lg:grid lg:grid-cols-2 flex-col gap-12 w-[78%] mx-auto my-20 relative  ">
            {services.map((service, index) => {
              return (
                <motion.a
                  href={`/services/${service.id}`}
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="flex py-3 px-8 border-[1px] bg-zinc-50 rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out flex-col  "
                >
                  <h1 className="text-2xl lg:h-[40px] my-4 text-center text-zinc-950 poppins-medium">
                    {service.service}
                  </h1>
                  <p className="text-md lg:h-[150px]  text-zinc-700 poppins-regular ">
                    {service.shortDescription}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
