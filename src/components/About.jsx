import React from "react";
import bubble from "../assets/bubble.png";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Rotate } from "hamburger-react";
function About() {
  return (
    <div>
      <motion.img
        initial={{ x: 120, scale: 0.2, opacity: 0.5 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0,
          ease: "easeInOut",
        }}
        className="absolute -z-10 lg:w-[30vw] w-[70vw] top-[80px] lg:-right-[12vw] -right-[26vw]"
        src={bubble}
        alt="bubble"
      />
      <motion.img
        initial={{ x: -120, scale: 0.2, opacity: 0.5 }}
        animate={{ x: -20, rotate: 90, scale: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0,
          ease: "easeInOut",
        }}
        className="absolute top-[500px] rotate-180 -z-10 lg:w-[20vw] w-[70vw] -left-36"
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
            About Staffision
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
            Staffision is a platform that connects businesses with the right
            talent and helps job seekers find the perfect job. We provide a wide
            range of services and HR solutions to help businesses grow and
            succeed.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.4,
              ease: "easeInOut",
            }}
            className="my-8 hover:shadow-xl hover:shadow-[#ff80804e]  transition duration-300 ease-in-out"
          >
            <a
              className="px-6  text-md py-3 text-white  bg-gradient-to-b from-[#FA7993] to-[#FDBA5F] capitalize poppins-medium rounded-3xl"
              href="/contact"
            >
              Get in touch
            </a>
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeInOut",
          }}
          className="w-[80vw] mb-8 relative mx-auto h-fit px-12 py-10 lg:gap-0 gap-8 flex flex-col lg:flex-row shadow-2xl rounded-xl  bg-white "
        >
          <div className="lg:w-1/4 w-full h-[80%] flex flex-col justify-center items-center my-auto   lg:border-r-[2px] mx-0">
            <h2 className="text-4xl mb-4 merriweather-bold text-center">
              <CountUp end={10} delay={0.8} suffix="K+" duration={2} />
            </h2>
            <p className="text-sm text-zinc-700 poppins-regular text-center">
              Clients
            </p>
          </div>
          <div className="lg:w-1/4 w-full h-[80%] flex flex-col justify-center items-center my-auto  lg:border-r-[2px] mx-0">
            <h2 className="text-4xl mb-4 merriweather-bold text-center">
              <CountUp end={500} delay={0.8} suffix="K+" duration={2} />
            </h2>
            <p className="text-sm text-zinc-700 poppins-regular text-center">
              Manpower Deployed
            </p>
          </div>
          <div className="lg:w-1/4 w-full h-[80%] flex flex-col justify-center items-center my-auto  lg:border-r-[2px] mx-0">
            <h2 className="text-4xl mb-4 merriweather-bold text-center">
              <CountUp end={5} delay={0.8} suffix="K+" duration={2} />
            </h2>
            <p className="text-sm text-zinc-700 poppins-regular text-center">
              Training Programs Conducted
            </p>
          </div>
          <div className="lg:w-1/4 w-full h-[80%] flex flex-col justify-center items-center my-auto   mx-0">
            <h2 className="text-4xl mb-4 merriweather-bold text-center">
              <CountUp end={10} delay={0.8} suffix="M+" duration={2} />
            </h2>
            <p className="text-sm text-zinc-700 poppins-regular text-center">
              Transactions Processed
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
