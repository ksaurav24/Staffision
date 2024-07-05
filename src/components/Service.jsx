import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../data";
import bubble from "../assets/bubble.webp";
import { motion } from "framer-motion";
import Error from "./Error";
const Service = () => {
  const params = useParams();
  const service = services.find((service) => service.id === params.service);
  if (!service) {
    return <Error />;
  }
  return (
    <div className="w-screen relative flex flex-col">
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
      <div className="w-[82vw] mx-auto my-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: "easeInOut",
          }}
          className="w-fit mx-auto rounded-3xl -mt-8 mb-8 px-3 py-1 bg-opacity-50 bg-zinc-300"
        >
          <p className="capitalize poppins-medium text-sm text-zinc-700">
            <a href="/services" className="hover:underline">
              services
            </a>
            /{service.service}
          </p>
        </motion.div>
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0,
            ease: "easeInOut",
          }}
          className="text-center merriweather-bold text-5xl mb-8"
        >
          {service.service}
        </motion.h1>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0,
            ease: "easeInOut",
          }}
          className="poppins-regular lg:text-lg px-3 text-sm lg:px-32 text-center"
        >
          {service.description}
        </motion.p>
        <motion.img
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: "easeInOut",
          }}
          className="mx-auto rounded-lg max-h-[600px] shadow-xl my-12"
          src={service.image}
          alt={service.image}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Service;
