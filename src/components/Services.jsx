import React from "react";
import bubble from "../assets/bubble.png";
import { motion } from "framer-motion";
const Services = () => {
  const services = [
    {
      title: "Recruitment Acquisition",
      description:
        "Our Recruitment and Talent Acquisition service focuses on identifying, and hiring top-tier talent for your organization. We utilize advanced techniques, extensive industry networks, and a robust candidate database to ensure the best match for your company.",
      benefits: [
        "Quality Candidates",
        "Time Efficiency",
        "Expertise",
        "Reduced Turnover",
      ],
    },
    {
      title: "Workforce Management",
      description:
        "Our Workforce Management service offers comprehensive solutions for managing your workforce efficiently. From scheduling and time tracking to compliance and reporting, we provide tools and support to optimize your workforce operations.",
      benefits: [
        "Increased Productivity",
        "Cost Savings",
        "Compliance Assurance",
        "Data-Driven Decisions",
      ],
    },
    {
      title: "Training and Development",
      description:
        "Our Training and Development service is designed to enhance the skills and capabilities of your employees. We offer customized training programs, leadership development, and ongoing professional development opportunities to foster growth.",
      benefits: [
        "Skill Enhancement",
        "Leadership Growth",
        "Employee Engagement",
        "Organizational Growth",
      ],
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
          <div className="flex lg:flex-row flex-col gap-8 w-[78%] mx-auto my-20 relative  ">
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
                  className="flex py-6 lg:w-1/3 w-[80vw] px-8 bg-zinc-50 rounded-lg shadow-lg flex-col  "
                >
                  <h1 className="text-2xl lg:h-[60px] my-8 text-center text-zinc-950 poppins-medium">
                    {service.title}
                  </h1>
                  <p className="text-md py-4 lg:h-[280px] mb-8 text-zinc-700 poppins-regular ">
                    {service.description}
                  </p>
                  <div className="flex flex-col justify-center items-center gap-4 w-full min-h-[200px] ">
                    <ul>
                      {service.benefits.map((benefit, index) => {
                        return (
                          <li key={index} className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-[#f4877b]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <p className="text-sm text-zinc-700 poppins-regular">
                              {benefit}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.4,
                        ease: "easeInOut",
                      }}
                      className="my-4 mx-auto"
                    >
                      <a
                        className="px-6 hover:shadow-xl hover:shadow-[#ff80804e]  transition duration-300 ease-in-out text-md py-3 text-white  bg-gradient-to-b from-[#FA7993] to-[#FDBA5F] mx-auto capitalize poppins-medium rounded-3xl"
                        href="/contact"
                      >
                        Get in touch
                      </a>
                    </motion.button>
                  </div>
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
