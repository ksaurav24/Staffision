import React, { useRef, useEffect } from "react";

import homepage from "../assets/homepage.svg";
import workforce from "../assets/workforce.webp";
import globaltalent from "../assets/globaltalent.webp";
import Rating from "@mui/material/Rating";
import bubble from "../assets/bubble.webp";
import arrow from "../assets/arrow.gif";
import { users } from "../data";
import { coreServices } from "../data";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import checkmarkCircle from "../assets/checkmarkCircle.svg";
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

  return (
    <div data-scroll className="has-scroll-smooth">
      <img
        src={bubble}
        className="lg:w-[70vw] bubble w-screen mix-blend-multiply lg:block -z-10 absolute -top-[42vw] lg:-top-96 -right-[38vw] lg:-right-64"
        alt=""
      />
      <img
        src={bubble}
        className="lg:w-[19vw] w-[60vw] bubble mix-blend-multiply  lg:block -z-10 absolute top-[60vh] lg:-left-[8vw] rotate-180 -left-[20vw]"
        alt=""
      />
      <div data-scroll className="h-fit">
        <div data-scroll className="container w-screen relative flex ">
          <div className="flex lg:mt-20   mt-4 lg:ml-20 right-0 px-8 flex-col ">
            <h1 className="lg:text-5xl  text-4xl text-center lg:text-start heroText merriweather-bold my-4 text-zinc-950 leading-tight ">
              Strengthen Your Workforce, Strengthen Your Business
            </h1>
            <h3 className="poppins-regular text-center lg:text-start heroText text-md lg:text-sm">
              Staffision is a Company Dedicated to Bridging the Gap Between
              Businesses and the Next Generation of Skilled Professionals.
            </h3>
            <button className="w-fit flex lg:mx-12 justify-center mx-auto h-fit my-14">
              <a
                href="/services"
                className="poppins-medium px-8 py-3 shadowBtn hover:shadow-none transition-shadow duration-300 lg:text-md text-lg bg-white ease-in-out rounded-3xl"
              >
                Get started
                <img className="w-5 h-5 inline-block ml-2" src={arrow} alt="" />
              </a>
            </button>
          </div>
          <div className="w-full lg:flex hidden ml-48 h-fit items-center">
            <img
              ref={heroImage}
              className="w-[30vw] drop-shadow-xl mt-24  my-auto"
              src={homepage}
              alt="Homepage_Illustration"
            />
          </div>
        </div>
        <div
          data-scroll
          className="container w-screen flex-col relative h-fit flex"
        >
          <div
            ref={highlights}
            className="w-screen py-0 lg:py-12  relative lg:flex-row flex-col flex"
          >
            <h2 className="  text-4xl leading-tight  mx-auto w-full lg:w-1/2 lg:px-16  lg:ml-20 text-center lg:text-left merriweather-bold px-6 ">
              The Highlighting Part of Our Solution
            </h2>
            <h5 className="poppins-regular text-md  lg:text-left text-center w-full lg:w-1/2 lg:px-20 px-8 mb-4 lg:mr-20 lg:mt-0 mt-6">
              Explore our comprehensive highlights designed to boost business
              performance, streamline operations, and drive long-term success
              across various industries.
            </h5>
          </div>
          <div className="lg:grid lg:px-24 pb-12 flex flex-col lg:grid-cols-4 w-screen h-fit ">
            {coreServices.map((service, index) => {
              return (
                <div
                  key={index}
                  className="  w-[70vw] lg:w-[20vw] p-2 z-10 rounded-lg mx-auto my-5 bg-white shadow-xl "
                >
                  <h3 className="text-lg w-full h-fit leading-6  merriweather-bold text-zinc-950 px-4 py-2">
                    {service.title}
                  </h3>
                  <p className="text-xs poppins-regular h-28 text-zinc-700 px-4 py-2">
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
        <div
          data-scroll
          className="w-screen mt-8 px-[6vw] lg:px-[10vw] h-fit flex flex-col relative "
        >
          <div className="w-full flex lg:flex-row flex-col-reverse">
            <div className="lg:w-1/2 w-full lg:px-6 px-2 py-8">
              <h2 className="lg:text-4xl text-3xl lg:text-start text-center merriweather-bold text-zinc-900">
                Create the dream team you deserve
              </h2>
              <p className="text-md my-6 poppins-medium lg:text-start text-center text-zinc-700">
                Our innovative HR solutions enable you to build strong,
                efficient, and engaged teams. Focus on your main company while
                we handle the key components of human resource management,
                resulting in a smooth and effective employee experience.
              </p>
              <ul className="flex poppins-medium gap-1 text-zinc-900 flex-col ">
                {[
                  "Seamless Onboarding",
                  "Comprehensive Talent Management",
                  "Insightful Analytics",
                  "Employee Engagement",
                  "Regulatory Compliance",
                  "Performance Management",
                ].map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-2">
                      <img
                        src={checkmarkCircle}
                        className="w-4 h-4"
                        alt="checkmarkCircle"
                      />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="lg:w-1/2 h-fit w-full ">
              <img className="" src={workforce} alt="workforce_illustration" />
            </div>
          </div>
          <div className="mt-16 w-full flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img src={globaltalent} alt="globalTalent_illustration" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-12 lg:px-6 px-2 py-8">
              <h2 className="lg:text-4xl text-3xl lg:text-start text-center merriweather-bold text-zinc-900">
                Global Talent, Local Expertise
              </h2>
              <p className="text-md my-6 poppins-medium lg:text-start text-center text-zinc-700">
                Build your global dream team, one connection at a time. We
                leverage our growing network of HR experts to help you find top
                talent, navigate local markets, and win the global hiring game.
              </p>
              <ul className="flex poppins-medium gap-1 text-zinc-900 flex-col ">
                {[
                  "Diverse Talent Pool",
                  "Local Market Knowledge",
                  "Global Network",
                  "Customized Solutions",
                  "Industry Expertise",
                  "24/7 Support",
                ].map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-2">
                      <img
                        src={checkmarkCircle}
                        className="w-4 h-4"
                        alt="checkmarkCircle"
                      />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div data-scroll className="mt-16 w-screen pb-16 h-fit testimonials ">
          <div className="w-screen py-0 lg:py-12  relative lg:flex-row flex-col flex">
            <h2 className=" lg:text-5xl text-4xl leading-tight  mx-auto w-full lg:w-1/2 lg:px-28  lg:ml-20 text-center lg:text-left merriweather-bold px-6 ">
              What our clients <br /> say about us
            </h2>
            <h5 className="poppins-regular text-md  lg:text-left text-center w-full lg:w-1/2 lg:px-20 px-8 mb-4 lg:mr-20 lg:mt-0 mt-6">
              See how our HR solutions helped businesses like yours thrive. Read
              success stories and discover the impact we can have on your team.
            </h5>
          </div>
          <div className="flex flex-col lg:flex-row py-12 h-fit gap-16 justify-between w-[80%] mx-auto ">
            {users.map((user, index) => {
              return (
                <div
                  key={index}
                  className="lg:w-1/3 w-[80vw] mx-auto px-4 py-3 shadow-xl bg-white rounded-lg "
                >
                  <div className=" w-20 h-20 my-6 -mt-10 mx-auto rounded-full p-[3px] bg-gradient-to-b from-[#236881] to-[#5fcaf0]">
                    <img src={user.image} alt={user.name} className="" />
                  </div>
                  <h3 className="text-2xl merriweather-bold my-2 text-zinc-950 text-center">
                    {user.name}
                  </h3>
                  <p className="text-sm mb-4 poppins-regular text-zinc-900 text-center">
                    {user.position}
                  </p>
                  <p className="text-md min-h-[200px]  py-4  poppins-regular text-zinc-700 text-center">
                    {user.review}
                  </p>
                  <div className="w-full py-4  flex justify-center items-center">
                    <Rating name="read-only" value={user.rating} readOnly />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-16">
          <div className="relative bg-gradient-to-b mb-16 from-[#fa7a92] rounded-b-[80px] rounded-t-xl lg:w-[82%] w-[86%] mx-auto h-fit lg:h-[42vh] to-[#FDBE5B] flex flex-col justify-center items-center">
            <div className="w-full py-8 text-white relative lg:flex-row flex-col flex">
              <h2 className=" lg:text-3xl text-3xl leading-tight  mx-auto w-full lg:w-1/2 lg:px-20  lg:ml-0 text-center lg:text-left merriweather-bold px-6 ">
                Helping businesses in the world with manpower solutions
              </h2>
              <h5 className="poppins-regular lg:text-md lg:text-left text-center w-full lg:w-1/2 lg:px-20 px-8 lg:mb-4 mb-0 lg:mr-10 lg:mt-0 mt-6">
                Join us today and leverage our HR expertise to build a thriving
                workforce. We offer innovative solutions and proven strategies
                to elevate your talent management
              </h5>
            </div>
            <div className="w-full ">
              <button className="w-fit flex mx-auto lg:mx-20 justify-center h-fit lg:my-6 my-10 ">
                <a
                  href="/services"
                  className="poppins-medium px-8 py-3 shadowBtn hover:shadow-none transition-shadow duration-300 lg:text-md text-lg bg-white ease-in-out rounded-3xl"
                >
                  Get started
                  <img
                    className="w-5 h-5 inline-block ml-2"
                    src={arrow}
                    alt="ArrowGIFForButton"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
