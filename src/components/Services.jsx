import React from "react";
import bubble from "../assets/bubble.webp";
import { motion } from "framer-motion";
const Services = () => {
  const services = [
    {
      service: "RPO Services",
      description:
        "Our Recruitment Process Outsourcing (RPO) service manages your entire recruitment process, from talent sourcing to onboarding. We ensure high-quality hires while reducing your recruitment costs and time-to-fill.",
    },
    {
      service: "Permanent Staffing",
      description:
        "Our Permanent Staffing service focuses on finding the right long-term talent for your organization. We handle the entire recruitment process, ensuring a perfect fit for your company culture and job requirements.",
    },
    {
      service: "Contractual Staffing",
      description:
        "Our Contractual Staffing service provides flexible staffing solutions to meet your short-term or project-based needs. We supply skilled professionals on a contract basis to help you manage workload fluctuations.",
    },
    {
      service: "HR Consulting",
      description:
        "Our HR Consulting service offers expert advice and strategic guidance to optimize your human resources practices. We assist with policy development, compliance, and organizational design to align HR operations with your business goals.",
    },
    {
      service: "Manpower Planning & Staffing",
      description:
        "Our Manpower Planning & Staffing service helps you forecast your workforce needs and create effective staffing strategies to ensure your business is always adequately staffed with the right talent.",
    },
    {
      service: "Bulk Staffing",
      description:
        "Our Bulk Staffing service is designed to handle large-scale recruitment drives efficiently. We provide a high volume of qualified candidates to meet the demands of large projects or rapid business expansion.",
    },
    {
      service: "IT/Non-IT Staffing",
      description:
        "Our IT/Non-IT Staffing service caters to both technical and non-technical staffing requirements. We provide specialized professionals across various domains to support your diverse staffing needs.",
    },
    {
      service: "BPO Staffing",
      description:
        "Our BPO Staffing service specializes in supplying skilled personnel for Business Process Outsourcing operations. We provide candidates with the right expertise to ensure your BPO processes run smoothly and efficiently.",
    },
  ];

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
            We offer a wide range of services and HR solutions to help
            businesses grow and succeed. Our team of experts is here to help you
            find the right talent and the perfect job.
          </motion.p>
        </div>
        <div className="">
          <div className="flex lg:grid lg:grid-cols-2 flex-col gap-8 w-[78%] mx-auto my-20 relative  ">
            {services.map((service, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="flex py-3  px-8 bg-zinc-50 rounded-lg shadow-lg flex-col  "
                >
                  <h1 className="text-2xl lg:h-[40px] my-4 text-center text-zinc-950 poppins-medium">
                    {service.service}
                  </h1>
                  <p className="text-md lg:h-[150px]  text-zinc-700 poppins-regular ">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
