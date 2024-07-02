import React, { useRef } from "react";
import homepage from "../assets/homepage.svg";
import bubble from "../assets/bubble.jpeg";
import arrow from "../assets/arrow.gif";
import Searchtalent from "../assets/coreServices/Searchtalent.png";
import Consultant from "../assets/coreServices/Consultant.png";
import Moneycheck from "../assets/coreServices/Moneycheck.png";
import Graduationcap from "../assets/coreServices/Graduationcap.png";
import Achievement from "../assets/coreServices/Achievement.png";
import Shield from "../assets/coreServices/Shield.png";
import Linechart from "../assets/coreServices/Linechart.png";
import Gift from "../assets/coreServices/Gift.png";
import Flowchart from "../assets/coreServices/Flowchart.png";
import Loginout from "../assets/coreServices/Loginout.png";
import Teamwork from "../assets/coreServices/Teamwork.png";
import Gearcomputer from "../assets/coreServices/Gearcomputer.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
gsap.registerPlugin(useGSAP);
const Home = () => {
  const heroImage = useRef(null);
  const highlights = useRef(null);
  useGSAP(() => {
    gsap.from(".heroText", {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power3.out",
      delay: 0.5,
      stagger: 0.3,
    });
    gsap.from(".bubble", {
      duration: 1,
      opacity: 0,
      scale: 0.5,
      y: -50,
      delay: 0.5,
      ease: "power3.out",
      stagger: 0.2,
    });
    gsap.from(highlights.current, {
      duration: 1,
      opacity: 0,
      y: 150,
      ease: "power3.out",
      delay: 1,
    });
    gsap.from(".shadowBtn", {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power3.out",
      delay: 1,
    });
    gsap.from(heroImage.current, {
      duration: 1,
      opacity: 0,
      x: -50,
      ease: "power3.out",
      delay: 0.6,
    });
  });

  const coreServices = [
    {
      title: "Talent Acquisition",
      description:
        "We identify and recruit top talent tailored to your specific business needs.",
      icon: Searchtalent, // Only "s" capitalized
    },
    {
      title: "HR Consulting",
      description:
        "Our experts optimize your HR processes for maximum efficiency.",
      icon: Consultant, // Only "c" capitalized
    },
    {
      title: "Payroll Management",
      description:
        "We ensure timely and accurate payroll management for your workforce.",
      icon: Moneycheck, // Only "m" and "c" capitalized
    },
    {
      title: "Employee Training & Development",
      description:
        "Enhancing employee skills and productivity through targeted training.",
      icon: Graduationcap, // Only "g" and "c" capitalized
    },
    {
      title: "Performance Management",
      description:
        "Streamlining performance reviews to drive better business outcomes.",
      icon: Achievement, // Only "a" capitalized
    },
    {
      title: "Compliance & Risk Management",
      description:
        "Ensuring your business adheres to all relevant regulations.",
      icon: Shield, // Only "s" capitalized
    },
    {
      title: "Workforce Planning",
      description: "Strategic planning to meet your future workforce needs.",
      icon: Linechart, // Only "l" and "c" capitalized
    },
    {
      title: "Employee Benefits Administration",
      description: "Managing benefits to attract and retain top talent.",
      icon: Gift, // Only "g" capitalized
    },
    {
      title: "Recruitment Process Outsourcing",
      description:
        "Handling your recruitment needs quickly and cost-effectively.",

      icon: Flowchart, // Only "f" capitalized
    },
    {
      title: "Onboarding & Offboarding",
      description: "Providing seamless onboarding and offboarding processes.",
      icon: Loginout, // Only "l" and "o" capitalized
    },
    {
      title: "Employee Relations",
      description:
        "Fostering a positive workplace environment and resolving conflicts.",
      icon: Teamwork, // Only "t" capitalized
    },
    {
      title: "HR Technology Solutions",
      description: "Implementing technology to streamline HR operations.",
      icon: Gearcomputer, // Only "g" and "c" capitalized
    },
  ];

  return (
    <div data-scroll className="data-scroll-section">
      <img
        src={bubble}
        className="lg:w-[70vw] bubble w-screen mix-blend-multiply lg:block -z-10 absolute -top-36 lg:-top-96 -right-28 lg:-right-64"
        alt=""
      />
      <img
        src={bubble}
        className="lg:w-[16vw] w-[60vw] bubble mix-blend-multiply  lg:block -z-10 absolute top-[60vh] -left-28 rotate-180"
        alt=""
      />
      <div className="container w-screen relative  flex ">
        <div className="flex lg:mt-20 mt-4 lg:ml-28 right-0 px-8 flex-col ">
          <h1 className="text-5xl heroText merriweather-bold my-8 text-zinc-950 leading-tight ">
            Unlock Your Business Potential with Expert <br /> HR Solutions
          </h1>
          <h3 className="poppins-regular heroText text-md lg:text-sm">
            We are a team of HR professionals who provide HR solutions to help
            businesses grow. Our services include recruitment, training, and
            consultancy.
          </h3>
          <button className="w-fit flex lg:mx-12 justify-center mx-auto h-fit my-14">
            <a
              href="#"
              className="poppins-medium px-8 py-3 shadowBtn hover:shadow-none transition-shadow duration-300 lg:text-md text-lg bg-white ease-in-out rounded-3xl"
            >
              Get started
              <img
                className="w-5 h-5 inline-block ml-2"
                src={arrow}
                alt=""
                srcSet=""
              />
            </a>
          </button>
        </div>
        <div className="w-full lg:flex hidden  items-center">
          <img
            ref={heroImage}
            className="w-[30vw] drop-shadow-xl mt-24 mx-14 my-auto"
            src={homepage}
            alt="Homepage_Illustration"
          />
        </div>
      </div>
      <div className="container w-screen flex-col relative h-screen flex">
        <div
          ref={highlights}
          className="w-screen py-0 lg:py-12  relative lg:flex-row flex-col flex"
        >
          <h2 className=" lg:text-5xl text-4xl leading-tight  mx-auto w-full lg:w-1/2 lg:px-20  lg:ml-20 text-center lg:text-left merriweather-bold px-6 ">
            The Highlighting Part of Our Solution
          </h2>
          <h5 className="poppins-regular text-md  lg:text-left text-center w-full lg:w-1/2 lg:px-20 px-8 mb-4 lg:mr-20 lg:mt-0 mt-6">
            Explore our comprehensive services designed to elevate business
            performance, streamline operations, and drive long-term success
            across industries
          </h5>
        </div>
        <div className="lg:grid lg:px-36 pb-12 flex flex-col lg:grid-cols-4 w-screen h-fit  ">
          {coreServices.map((service, index) => {
            return (
              <div
                key={index}
                className="  w-[70vw] lg:w-[18vw] p-2 z-10 rounded-lg mx-auto my-5 bg-white shadow-xl "
              >
                <h3 className="text-xl w-full h-16  poppins-bold text-zinc-950 px-4 py-2">
                  {service.title}
                </h3>
                <p className="text-sm poppins-regular h-20 text-zinc-700 px-4 py-2">
                  {service.description}
                </p>
                <div className="w-full flex justify-end items-end">
                  <img
                    className="w-9 mr-2 mb-4"
                    src={service.icon}
                    alt={service.icon}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
